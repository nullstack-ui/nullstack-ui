import { getColor } from './color';

// Utils
import { getNestedProps } from '#utils/getNestedProps';

// Methods
export const outline = ({
    key = 'outline',
    theme,
    value,
    ...rest
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
        const outlineColor = getColor({
            ...rest,
            theme,
            value
        });

        return {
            key,
            value: `solid 1px ${outlineColor}`
        };
    } else if (typeof value === 'object') {
        return getNestedProps({
            childProps: value,
            propName: 'outline',
            theme
        });
    } else {
        return '';
    }
}

export const outlineColor = ({
    key = 'outline-color',
    theme,
    value,
    ...rest
}) => {
    return {
        key,
        value: getColor({
            ...rest,
            theme,
            value
        })
    }
}

export const outlineOffset = ({
    key = 'outline-offset',
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}px`
    }
}

export const outlineStyle = ({
    key = 'outline-style',
    value
}) => {
    return {
        key,
        value
    }
}

export const outlineWidth = ({
    key = 'outline-width',
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}px`
    }
}

// Props
export const outlineProps = {
    // outline
    'outline': {
        fn: outline,
        key: 'outline',
    },
    'outline.color': {
        fn: outlineColor,
        key: 'outline-color'
    },
    'outlineColor': { aliasFor: 'outline.color' },

    'outline.offset': {
        fn: outlineOffset,
        key: 'outline-offset',
    },
    'outlineOffset': { aliasFor: 'outline.offset' },

    'outline.style': {
        fn: outlineStyle,
        key: 'outline-style',
    },
    'outlineStyle': { aliasFor: 'outline.style' },

    'outline.width': {
        fn: outlineWidth,
        key: 'outline-width',
    },
    'outlineWidth': { aliasFor: 'outline.width' },
}