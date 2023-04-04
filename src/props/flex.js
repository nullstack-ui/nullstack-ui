import { handleProp, handleProps } from './index.js';
import { getValue } from '../utils/getValue.js';

const aliases = {
    'end': 'flex-end',
    'left': 'flex-start',
    'right': 'flex-end',
    'start': 'flex-start'
}

export const getFlexDirection = props => {
    const { flex, flexDir, flexDirection } = props;
    let direction;

    if (Array.isArray(flex)) {
        direction = flex[1].dir || flex[1].direction;
    }

    return direction || flex?.dir || flex?.direction || flexDir || flexDirection || 'row';
}

export const isReverse = props => {
    const { flex, flexReverse, reverse } = props;

    return flex?.reverse || flexReverse || reverse;
}

export const flex = params => {
    const { theme, value } = params;
    
    if (value === true) {
        return {
            key: 'display',
            value: 'flex'
        }
    } else if (Array.isArray(value)) {
        if (value[0] === true && typeof value[1] === 'object') {
            const handled = {};

            for (let key in value[1]) {
                handled[`flex.${key}`] = value[1][key];
            }

            handled.flex = true;

            return handleProps({
                ...params,
                customProps: handled,
                props: handled,
            });
        } else {
            return {}
        }
    } else if (typeof value === 'object') {
        const handled = {};

        for (let key in value) {
            handled[`flex.${key}`] = value[key];
        }

        if (value.value) {
            handled.flex = value.value;
        }

        return handleProps({
            ...params,
            props: handled
        });
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
        fn: ({ value }) => handleFlexAlign({
            key: ['align-items', 'justify-content'],
            value
        })
    },
    'al': { aliasFor: 'flex.align' },
    'align': { aliasFor: 'flex.align' },
    'flex.al': { aliasFor: 'flex.align' },

    'flex.alignContent': {
        fn: ({ value }) => handleFlexAlign({
            key: 'align-content',
            value
        }),
        key: 'align-content'
    },
    'alContent': { aliasFor: 'flex.alignContent' },
    'alignContent': { aliasFor: 'flex.alignContent' },
    'flex.alContent': { aliasFor: 'flex.alignContent' },

    'flex.alignH': {
        fn: flexAlignH
    },
    'alH': { aliasFor: 'flex.alignH' },
    'alignH': { aliasFor: 'flex.alignH' },
    'flex.alH': { aliasFor: 'flex.alignH' },

    'flex.alignItems': {
        fn: ({ value }) => handleFlexAlign({
            key: 'align-items',
            value
        }),
        key: 'align-items'
    },
    'alItems': { aliasFor: 'flex.alignItems' },
    'alignItems': { aliasFor: 'flex.alignItems' },
    'flex.alItems': { aliasFor: 'flex.alignItems' },

    'flex.alignSelf': {
        fn: ({ value }) => handleFlexAlign({
            key: 'align-self',
            value
        }),
        key: 'align-self'
    },
    'alSelf': { aliasFor: 'flex.alignSelf' },
    'alignSelf': { aliasFor: 'flex.alignSelf' },
    'flex.alSelf': { aliasFor: 'flex.alignSelf' },

    'flex.alignV': {
        fn: flexAlignV
    },
    'alV': { aliasFor: 'flex.alignV' },
    'alignV': { aliasFor: 'flex.alignV' },
    'flex.alV': { aliasFor: 'flex.alignV' },

    'flex.basis': {
        fn: ({ value }) => ({
            key: 'flex-basis',
            value: getValue({ unit: 'px', value })
        }),
        key: 'flex-basis'
    },
    'basis': { aliasFor: 'flex.basis' },
    'flexBasis': { aliasFor: 'flex.basis' },

    'flex.direction': {
        fn: flexDirection
    },
    'flex.dir': { aliasFor: 'flex.direction' },
    'flexDir': { aliasFor: 'flex.direction' },
    'flexDirection': { aliasFor: 'flex.direction' },

    'flex.flow': {
        fn: ({ value }) => ({
            key: 'flex-flow',
            value: Array.isArray(value) ? value.join(' ') : value
        }),
        key: 'flex-flow'
    },
    'flexFlow': { aliasFor: 'flex.flow' },
    'flow': { aliasFor: 'flex.flow' },

    'flex.grow': {
        key: 'flex-grow'
    },
    'flexGrow': { aliasFor: 'flex.grow' },
    'grow': { aliasFor: 'flex.grow' },

    'flex.justifyContent': {
        key: 'justify-content'
    },
    'justifyContent': { aliasFor: 'flex.justifyContent' },
    'flex.justifySelf': {
        key: 'justify-self'
    },
    'justifySelf': { aliasFor: 'flex.justifySelf' },

    'flex.order': {
        key: 'order'
    },
    'flexOrder': { aliasFor: 'flex.order' },
    'order': { aliasFor: 'flex.order' },

    'flex.placeContent': {
        key: 'place-content'
    },
    'flexPlaceContent': { aliasFor: 'flex.placeContent' },
    'placeContent': { aliasFor: 'flex.placeContent' },

    'flex.placeItems': {
        key: 'place-items'
    },
    'flexPlaceItems': { aliasFor: 'flex.placeItems' },
    'placeItems': { aliasFor: 'flex.placeItems' },

    'flex.placeSelf': {
        key: 'place-self'
    },
    'flexPlaceSelf': { aliasFor: 'flex.placeSelf' },
    'placeSelf': { aliasFor: 'flex.placeSelf' },

    'flex.reverse': {
        fn: flexReverse
    },
    'flexReverse': { aliasFor: 'flex.reverse' },
    'reverse': { aliasFor: 'flex.reverse' },

    'flex.shrink': {
        key: 'flex-shrink'
    },
    'flexShrink': { aliasFor: 'flex.shrink' },
    'shrink': { aliasFor: 'flex.shrink' },

    'flex.wrap': {
        fn: ({ value }) => ({
            key: 'flex-wrap',
            value: typeof value === 'boolean' ? (value ? 'wrap' : 'nowrap') : value
        }),
        key: 'flex-wrap'
    },
    'flexWrap': { aliasFor: 'flex.wrap' },
    'wrap': { aliasFor: 'flex.wrap' },

    'flexCol': {
        fn: () => ([
            {
                key: 'display',
                value: 'flex'
            },
            {
                key: 'flex-direction',
                value: 'column'
            },
        ]),
    },
    'flexRow': {
        fn: () => ([
            {
                key: 'display',
                value: 'flex'
            },
            {
                key: 'flex-direction',
                value: 'row'
            },
        ]),
    },
}