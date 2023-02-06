import { handleProps } from '.';

const bg = ({
    theme,
    value
}) => {
    if (typeof value === 'object') {
        const bgProps = {};
        let handledProps;

        for (let key in value) {
            bgProps[`bg.${key}`] = value[key];
        }

        handledProps = handleProps({
            props: bgProps,
            theme
        });

        return Object
            .keys(handledProps.elementProps)
            .map(propName => ({
                key: propName,
                value: handledProps.elementProps[propName]
            }));
    } else if (typeof value === 'string') {
        return {
            key: 'background',
            value
        }
    }
}

const position = ({ value }) => {
    return {
        key: 'background-position',
        value: Array.isArray(value) ? value.join(' ') : value
    }
}

const url = ({ value }) => {
    return {
        key: 'background-image',
        value: `url(${value})`
    }
}

export const bgProps = {
    'bg': {
        fn: bg,
        key: 'background',
    },
    'bgAttachment': {
        aliases: [
            'bg.attachment',
        ],
        key: 'background-attachment',
    },
    'bgBlend': {
        aliases: [
            'bg.blend',
            'bg.blendMode',
            'bgBlendMode'
        ],
        key: 'background-blend-mode'  
    },
    'bgClip': {
        aliases: ['bg.clip'],
        key: 'background-clip'  
    },
    'bgImage': {
        aliases: ['bg.image'],
        key: 'background-image',
    },
    'bgPosition': {
        aliases: [
            'bgPos',
            'bg.pos',
            'bg.position',
        ],
        fn: position,
        key: 'background-position',
    },
    'bgRepeat': {
        aliases: ['bg.repeat'],
        key: 'background-repeat',
    },
    'bgSize': {
        aliases: ['bg.size'],
        key: 'background-size',
    },
    'bgUrl': {
        aliases: ['bg.url'],
        key: 'background-image',
        fn: url
    }
}