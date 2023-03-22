const ratioAliases = [
    {
        alias: 'square',
        value: '1 / 1'
    },
    {
        alias: 'video',
        value: '16 / 9'
    },
]

const aspectRatio = ({ value }) => {
    const alias = ratioAliases.find(({ alias }) => alias === value);
    const handledValue = value.indexOf(':') ? value.replace(':', '/') : value;

    return {
        key: 'aspect-ratio',
        value: alias?.value || handledValue
    }
}

export const otherProps = {
    'aspectRatio': {
        fn: aspectRatio,
        key: 'aspect-ratio'
    },
    'ratio': { aliasFor: 'aspectRatio' },

    'clear': {
        key: 'clear'
    },
    'float': {
        key: 'float'
    },
    'listStyle': {
        key: 'list-style'
    },
    'listStylePosition': {
        key: 'list-style-position'
    },
    'listStyleType': {
        key: 'list-style-type'
    },
    'mixBlend': {
        key: 'mix-blend-mode'  
    },
    'blend': { aliasFor: 'mixBlend' },
    'mixBlendMode': { aliasFor: 'mixBlend' },

    'objectFit': {
        key: 'object-fit'
    },
    'fit': { aliasFor: 'objectFit' },
    'objFit': { aliasFor: 'objectFit' },

    'objectPosition': {
        fn: ({ value }) => {
            return Array.isArray(value) ? value.join(' ') : value
        },
        key: 'object-position'
    },
    'objPos': { aliasFor: 'objectPosition' },
    'objPosition': { aliasFor: 'objectPosition' },

    'pointerEvents': {
        key: 'pointer-events'
    },
    'events': { aliasFor: 'pointerEvents' },

    'userSelect': {
        key: 'user-select'
    }
}