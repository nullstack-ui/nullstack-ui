import { isReverse } from './flex';

const spacing = ({
    propKey,
    spacingProp,
    reverse,
    value
}) => {
    const handledValue = isNaN(value) ? value : `${value}rem`;
    const output = {};

    output[spacingProp] = {
        cssProps: [{
            key: propKey,
            value: handledValue
        }],
        prop: spacingProp,
        selector: reverse ? '> *:not(:last-child)' : '> *:not(:first-child)'
    }
    
    return output;
}

export const spacingProps = {
    'space.x': {
        fn: ({ props, value }) => spacing({
            propKey: 'margin-left',
            reverse: props.reverse,
            spacingProp: 'spX',
            value
        })
    },
    'spX': { aliasFor: 'space.x' },
    'spaceX': { aliasFor: 'space.x' },

    'space.y': {
        fn: ({ props, value }) => spacing({
            propKey: 'margin-top',
            reverse: props.reverse,
            spacingProp: 'spY',
            value
        })
    },
    'spY': { aliasFor: 'space.y' },
    'spaceY': { aliasFor: 'space.y' },
}