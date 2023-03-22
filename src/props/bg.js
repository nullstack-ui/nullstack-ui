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
        key: 'background-attachment',
    },
    'bg.attachment': { aliasFor: 'bgAttachment' },

    'bgBlend': {
        key: 'background-blend-mode'  
    },
    'bg.blend': { aliasFor: 'bgBlend' },
    'bg.blendMode': { aliasFor: 'bgBlend' },
    'bgBlendMode': { aliasFor: 'bgBlend' },

    'bgClip': {
        key: 'background-clip'  
    },
    'bg.clip': { aliasFor: 'bgClip' },

    'bgImage': {
        key: 'background-image',
    },
    'bg.image': { aliasFor: 'bgImage' },

    'bgOrigin': {
        fn: ({ value }) => ({
            key: 'background-origin',
            value: `${value}-box`
        }),
        key: 'background-origin',
    },
    'bg.origin': { aliasFor: 'bgOrigin' },

    'bgPosition': {
        fn: position,
        key: 'background-position',
    },
    'bgPos': { aliasFor: 'bgPosition' },
    'bg.pos': { aliasFor: 'bgPosition' },
    'bg.position': { aliasFor: 'bgPosition' },

    'bgRepeat': {
        key: 'background-repeat',
    },
    'bg.repeat': { aliasFor: 'bgRepeat' },

    'bgSize': {
        key: 'background-size',
    },
    'bg.size': { aliasFor: 'bgSize' },

    'bgUrl': {
        key: 'background-image',
        fn: url
    },
    'bg.url': { aliasFor: 'bgUrl' },
}