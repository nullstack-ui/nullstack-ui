import { getColor } from './color';

export const bgColor = ({
    key,
    theme,
    value
}) => {
    return {
        key,
        value: getColor({
            theme,
            value
        })
    };
}

export const bgProps = {
    'bg': {
        aliases: ['background'],
        key: 'background',
    },
    'bgColor': {
        aliases: [
            'bg.color',
            'background.color',
            'backgroundColor'
        ],
        fn: bgColor,
        key: 'background-color',
    },
}