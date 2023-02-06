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
        aliases: ['ratio'],
        fn: aspectRatio,
        key: 'aspect-ratio'
    },
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
        aliases: [
            'blend',
            'mixBlendMode'
        ],
        key: 'mix-blend-mode'  
    },
    'objectFit': {
        aliases: [
            'fit',
            'objFit'
        ],
        key: 'object-fit'
    },
    'objectPosition': {
        aliases: [
            'objPos',
            'objPosition'
        ],
        key: 'object-position'
    },
    'pointerEvents': {
        aliases: ['events'],
        key: 'pointer-events'
    },
    'userSelect': {
        key: 'user-select'
    }
}