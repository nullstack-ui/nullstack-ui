const genericTransform = ({
    axis,
    includeAngle,
    unit,
    value
}) => {
    if (Array.isArray(value) || typeof value === 'object') {
        const transform = getTransform({
            axis,
            includeAngle,
            unit,
            value
        });

        return transform.join(', ')
    } else {
        return getValue({ unit, value });
    }
}

const getTransform = ({
    axis,
    includeAngle,
    unit,
    value
}) => {
    const transform = [];
    let angle = 0;
    let x = 0;
    let y = 0;
    let z = 0;

    if (Array.isArray(value)) {
        if (value[0] != null) {
            x = getValue({ unit, value: value[0] });
        }

        if (value[1] != null) {
            y = getValue({ unit, value: value[1] });
        }

        if (value[2] != null) {
            z = getValue({ unit, value: value[2] });
        }

        if (value[3] != null) {
            angle = getValue({ unit: 'deg', value: value[3] });
        }
    } else if (typeof value === 'object') {
        if (value.angle) { angle = getValue({ unit: 'deg', value: value.angle }); }
        if (value.x) { x = getValue({ unit, value: value.x }); }
        if (value.y) { y = getValue({ unit, value: value.y }); }
        if (value.z) { z = getValue({ unit, value: value.z }); }
    }

    if (axis.indexOf('x') > -1) {
        transform.push(x);
    }

    if (axis.indexOf('y') > -1) {
        transform.push(y);
    }

    if (axis.indexOf('z') > -1) {
        transform.push(z);
    }

    if (includeAngle) {
        transform.push(angle);
    }

    return transform
}

const getValue = ({ unit, value }) => {
    if (unit) {
        return isNaN(value) ? value : `${value}${unit}`
    } else {
        return value;
    }
}

const rotate = value => {
    return genericTransform({
        axis: 'x',
        unit: 'deg',
        value
    })
}

const rotate3d = value => {
    return genericTransform({
        axis: 'xyz',
        includeAngle: true,
        value
    })
}

const rotateX = value => {
    return genericTransform({
        axis: 'x',
        unit: 'deg',
        value
    })
}

const rotateY = value => {
    return genericTransform({
        axis: 'y',
        unit: 'deg',
        value
    })
}

const rotateZ = value => {
    return genericTransform({
        axis: 'z',
        unit: 'deg',
        value
    })
}

const scale = value => {
    return genericTransform({
        axis: 'xy',
        value
    })
}

const scale3d = value => {
    return genericTransform({
        axis: 'xyz',
        value
    })
}

const scaleX = value => {
    return genericTransform({
        axis: 'x',
        value
    })
}

const scaleY = value => {
    return genericTransform({
        axis: 'y',
        value
    })
}

const scaleZ = value => {
    return genericTransform({
        axis: 'z',
        value
    })
}

const transform = ({
    childProps
}) => {
    const valueAsArr = [];

    if (childProps) {
        for (let childProp of childProps) {
            const { fn, propName, value } = childProp;
            const propValue = fn(value);

            valueAsArr.push(`${propName}(${propValue})`);
        }
    }

    return {
        key: 'transform',
        value: valueAsArr.join(' ')
    }
}

const transformOrigin = ({
    value
}) => {
    let handledValue;

    if (Array.isArray(value)) {
        handledValue = value.join(' ');
    } else if (typeof value === 'object') {
        handledValue = `${value.x} ${value.y}`;
    } else {
        handledValue = getValue({ unit: 'px', value });
    }
    
    return {
        key: 'transform-origin',
        value: handledValue
    }
}

const translate = value => {
    return genericTransform({
        axis: 'xy',
        unit: 'px',
        value
    })
}

const translate3d = value => {
    return genericTransform({
        axis: 'xyz',
        unit: 'px',
        value
    })
}

const translateX = value => {
    return genericTransform({
        axis: 'x',
        unit: 'px',
        value
    })
}

const translateY = value => {
    return genericTransform({
        axis: 'y',
        unit: 'px',
        value
    })
}

const translateZ = value => {
    return genericTransform({
        axis: 'z',
        unit: 'px',
        value
    })
}

export const transformProps = {
    'rotate': {
        key: 'rotate',
        fn: rotate,
        parent: 'transform',
    },
    'rotate3d': {
        key: 'rotate3d',
        fn: rotate3d,
        parent: 'transform',
    },
    'rotateX': {
        key: 'rotateX',
        fn: rotateX,
        parent: 'transform',
    },
    'rotateY': {
        key: 'rotateY',
        fn: rotateY,
        parent: 'transform',
    },
    'rotateZ': {
        key: 'rotateZ',
        fn: rotateZ,
        parent: 'transform',
    },
    'scale': {
        key: 'scale',
        fn: scale,
        parent: 'transform',
    },
    'scale3d': {
        key: 'scale3d',
        fn: scale3d,
        parent: 'transform',
    },
    'scaleX': {
        key: 'scaleX',
        fn: scaleX,
        parent: 'transform',
    },
    'scaleY': {
        key: 'scaleY',
        fn: scaleY,
        parent: 'transform',
    },
    'scaleZ': {
        key: 'scaleZ',
        fn: scaleZ,
        parent: 'transform',
    },
    'transform': {
        key: 'transform',
        fn: transform
    },
    'transform.origin': {
        fn: transformOrigin,
        key: 'transform-origin',
    },
    'transformOrigin': { aliasFor: 'transform.origin' },

    'translate3d': {
        key: 'translate3d',
        fn: translate3d,
        parent: 'transform',
    },
    'translateX': {
        key: 'translateX',
        fn: translateX,
        parent: 'transform',
    },
    'translateY': {
        key: 'translateY',
        fn: translateY,
        parent: 'transform',
    },
    'translateZ': {
        key: 'translateZ',
        fn: translateZ,
        parent: 'transform',
    },
    'translate': {
        key: 'translate',
        fn: translate,
        parent: 'transform',
    }
}