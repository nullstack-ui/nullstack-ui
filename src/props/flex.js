import { handleProps } from '.';
import { getValue } from '../utils/getValue';

const aliases = {
    'end': 'flex-end',
    'left': 'flex-start',
    'right': 'flex-end',
    'start': 'flex-start'
}

export const getFlexDirection = props => {
    const { flex, flexDir, flexDirection } = props;

    return flex?.dir || flex?.direction || flexDir || flexDirection || 'row';
}

export const isReverse = props => {
    const { flex, flexReverse, reverse } = props;

    return flex?.reverse || flexReverse || reverse;
}

export const flex = ({ theme, value }) => {
    if (value === true) {
        return {
            key: 'display',
            value: 'flex'
        }
    } else if (Array.isArray(value)) {
        if (value[0] === true && typeof value[1] === 'object') {
            const handled = {};
            let handledProps;
    
            for (let key in value[1]) {
                handled[`flex.${key}`] = value[1][key];
            }
    
            handled.flex = true;
    
            handledProps = handleProps({ props: handled, theme });
    
            return Object.keys(handledProps.elementProps).map(propName => ({
                key: propName,
                value: handledProps.elementProps[propName]
            }));
        } else {
            return {}
        }
    } else if (typeof value === 'object') {
        const handled = {};
        let handledProps;

        for (let key in value) {
            handled[`flex.${key}`] = value[key];
        }

        if (value.value) {
            handled.flex = value.value;
        }

        handledProps = handleProps({ props: handled, theme });

        return Object.keys(handledProps.elementProps).map(propName => ({
            key: propName,
            value: handledProps.elementProps[propName]
        }));
    } else {
        return {}
    }
}

const flexAlignH = ({ props, value }) => {
    const direction = getFlexDirection(props)

    if (direction === 'column') {
        return {
            key: 'align-items',
            value: aliases[value] || value
        }
    } else {
        return {
            key: 'justify-content',
            value: aliases[value] || value
        }
    }
}

export const flexAlignV = ({ props, value }) => {
    const direction = getFlexDirection(props)

    if (direction === 'column') {
        return {
            key: 'justify-content',
            value: aliases[value] || value
        }
    } else {
        return {
            key: 'align-items',
            value: aliases[value] || value
        }
    }
}

export const flexDirection = ({ value }) => {
    return {
        key: 'flex-direction',
        value
    }
}

export const flexReverse = ({ props }) => {
    const direction = getFlexDirection(props);

    return {
        key: 'flex-direction',
        value: props.reverse ? `${direction}-reverse` : ''
    }
}

const handleFlexAlign = ({
    key,
    value
}) => {
    if (Array.isArray(key)) {
        return key.map(k => ({
            key: k,
            value: aliases[value] || value
        }))
    } else {
        return {
            key,
            value: aliases[value] || value
        }
    }
}

// Props
export const flexProps = {
    'flex': {
        fn: flex
    },
    'flex.align': {
        aliases: [
            'al',
            'align',
            'flex.al'
        ],
        fn: ({ value }) => handleFlexAlign({
            key: ['align-items', 'justify-content'],
            value
        })
    },
    'flex.alignContent': {
        aliases: [
            'alContent',
            'alignContent',
            'flex.alContent'
        ],
        fn: ({ value }) => handleFlexAlign({
            key: 'align-content',
            value
        }),
        key: 'align-content'
    },
    'flex.alignH': {
        aliases: [
            'alH',
            'alignH',
            'flex.alH'
        ],
        fn: flexAlignH
    },
    'flex.alignItems': {
        aliases: [
            'alItems',
            'alignItems',
            'flex.alItems'
        ],
        fn: ({ value }) => handleFlexAlign({
            key: 'align-items',
            value
        }),
        key: 'align-items'
    },
    'flex.alignSelf': {
        aliases: [
            'alSelf',
            'alignSelf',
            'flex.alSelf'
        ],
        fn: ({ value }) => handleFlexAlign({
            key: 'align-self',
            value
        }),
        key: 'align-self'
    },
    'flex.alignV': {
        aliases: [
            'alV',
            'alignV',
            'flex.alV'
        ],
        fn: flexAlignV
    },
    'flex.basis': {
        aliases: [
            'basis',
            'flexBasis'
        ],
        fn: ({ value }) => ({
            key: 'flex-basis',
            value: getValue({ unit: 'px', value })
        }),
        key: 'flex-basis'
    },
    'flex.direction': {
        aliases: [
            'flex.dir',
            'flexDir',
            'flexDirection'
        ],
        fn: flexDirection
    },
    'flex.flow': {
        aliases: [
            'flexFlow',
            'flow'
        ],
        fn: ({ value }) => ({
            key: 'flex-flow',
            value: Array.isArray(value) ? value.join(' ') : value
        }),
        key: 'flex-flow'
    },
    'flex.grow': {
        aliases: [
            'flexGrow',
            'grow'
        ],
        key: 'flex-grow'
    },
    'flex.justifyContent': {
        aliases: [
            'justifyContent'
        ],
        key: 'justify-content'
    },
    'flex.justifySelf': {
        aliases: [
            'justifySelf'
        ],
        key: 'justify-self'
    },
    'flex.order': {
        aliases: [
            'flexOrder',
            'order'
        ],
        key: 'order'
    },
    'flex.placeContent': {
        aliases: [
            'flexPlaceContent',
            'placeContent'
        ],
        key: 'place-content'
    },
    'flex.placeItems': {
        aliases: [
            'flexPlaceItems',
            'placeItems'
        ],
        key: 'place-items'
    },
    'flex.placeSelf': {
        aliases: [
            'flexPlaceSelf',
            'placeSelf'
        ],
        key: 'place-self'
    },
    'flex.reverse': {
        aliases: [
            'flexReverse',
            'reverse'
        ],
        fn: flexReverse
    },
    'flex.shrink': {
        aliases: [
            'flexShrink',
            'shrink'
        ],
        key: 'flex-shrink'
    },
    'flex.wrap': {
        aliases: [
            'flexWrap',
            'wrap'
        ],
        key: 'flex-wrap'
    },
    'flexCol': {
        transform: {
            props: {
                flex: true,
                flexDir: 'column'
            },
        }
    },
    'flexRow': {
        transform: {
            props: {
                flex: true,
                flexDir: 'row'
            },
        }
    },
}