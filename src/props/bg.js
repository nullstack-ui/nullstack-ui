import { handleProps } from '.';

const bg = ({
    theme,
    value
}) => {
    if (typeof value === 'object') {
        const bgProps = {};
        let handledProps;

        for (let key in value) {
            bgProps[`background.${key}`] = value[key];
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

export const bgProps = {
    'bg': {
        aliases: ['background'],
        fn: bg,
        key: 'background',
    },
    'bgAttachment': {
        aliases: [
            'bg.attachment',
            'background.attachment',
            'backgroundAttachment'
        ],
        key: 'background-attachment',
    },
    'bgBlend': {
        aliases: [
            'bg.blend',
            'bg.blendMode',
            'background.blend',
            'background.blendMode',
            'backgroundBlend',
            'backgroundBlendMode',
            'bgBlendMode'
        ],
        key: 'background-blend-mode'  
    },
    'bgClip': {
        aliases: [
            'bg.clip'
        ],
        key: 'background-clip'  
    },
    'bgImage': {
        aliases: [
            'bg.image',
            'background.image',
            'backgroundImage'
        ],
        key: 'background-image',
    },
    'bgPosition': {
        aliases: [
            'bgPos',
            'bg.pos',
            'bg.position',
            'background.pos',
            'background.position',
            'backgroundPos',
            'backgroundPosition'
        ],
        key: 'background-position',
    },
    'bgRepeat': {
        aliases: [
            'bg.repeat',
            'background.repeat',
            'backgroundRepeat'
        ],
        key: 'background-repeat',
    },
    'bgSize': {
        aliases: [
            'bg.size',
            'background.size',
            'backgroundSize'
        ],
        key: 'background-size',
    },
}