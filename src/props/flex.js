import { handleProps } from '.';

export const flex = ({ theme, value }) => {
    if (value === true) {
        return {
            key: 'display',
            value: 'flex'
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
    }
}

export const flexAlign = ({ value }) => {
    return [
        {
            key: 'align-items',
            value
        },
        {
            key: 'justify-content',
            value
        }
    ]
}

export const flexAlignH = ({ props, value }) => {
    const { flex } = props;
    const direction = flex?.direction;

    if (direction === 'column') {
        return {
            key: 'align-items',
            value
        }
    } else {
        return {
            key: 'justify-content',
            value
        }
    }
}

export const flexAlignV = ({ props, value }) => {
    const { flex } = props;
    const direction = flex?.direction;

    if (direction === 'column') {
        return {
            key: 'justify-content',
            value
        }
    } else {
        return {
            key: 'align-items',
            value
        }
    }
}

export const flexDirection = ({ value }) => {
    return {
        key: 'flex-direction',
        value
    }
}

// Props
export const flexProps = {
    'flex': {
        fn: flex
    },
    'flex.align': {
        aliases: ['flex.al'],
        fn: flexAlign
    },
    'flex.alignContent': {
        aliases: [
            'alContent',
            'alignContent',
            'flex.alContent'
        ],
        key: 'align-content'
    },
    'flex.alH': {
        fn: flexAlignH
    },
    'flex.alV': {
        fn: flexAlignV
    },
    'flex.basis': {
        aliases: [
            'basis',
            'flexBasis'
        ],
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
    }
}