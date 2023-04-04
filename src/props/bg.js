import { handleProps } from './index.js';

const bg = params => {
    const { value } = params;

    if (typeof value === 'object') {
        const bgProps = {};

        for (let key in value) {
            bgProps[`bg.${key}`] = value[key];
        }

        return handleProps({
            ...params,
            props: bgProps,
        });
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
        chainable: true,
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