import { getColor } from './color';

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

const caretColor = props => {
    return {
        key: 'caret-color',
        value: getColor(props)
    }
}

export const otherProps = {
    'aspectRatio': {
        aliases: ['ratio'],
        fn: aspectRatio,
        key: 'aspect-ratio'
    },
    'caretColor': {
        fn: caretColor,
        key: 'caret-color'
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
    'pointerEvents': {
        aliases: ['events'],
        key: 'pointer-events'
    }
}