import { handleProps } from '.';
import { getColor } from './color';

export const border = ({
    key = 'border',
    theme,
    value
}) => {
    if (value === 'none') {
        return {
            key,
            value: 'none'
        };
    } else if (value === true) {
        return {
            key,
            value: 'solid 1px #000'
        };
    } else if (typeof value === 'string') {
        const borderColor = getColor({ theme, value });

        return {
            key,
            value: `solid 1px ${borderColor}`
        };
    } else if (typeof value === 'object') {
        const handled = {};
        let handledProps;

        for (let v in value) {
            handled[`${key}.${v}`] = value[v];
        }

        handledProps = handleProps({ props: handled, theme });

        return Object.keys(handledProps.elementProps).map(propName => ({
            key: propName,
            value: handledProps.elementProps[propName]
        }));
    } else {
        return '';
    }
}

export const borderColor = ({
    key = 'border-color',
    theme,
    value
}) => {
    return {
        key,
        value: getColor({
            theme,
            value
        })
    }
}

export const borderRadius = ({
    key = 'border-radius',
    value
}) => {
    if (typeof value === 'boolean') {
        return {
            key,
            value: value ? '.5em' : 0
        }
    } else {
        return {
            key,
            value: isNaN(value) ? value : `${value}em`
        }
    }
}

export const borderStyle = ({
    key = 'border-style',
    value
}) => {
    return {
        key,
        value
    }
}

export const borderWidth = ({
    key = 'border-width',
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}px`
    }
}