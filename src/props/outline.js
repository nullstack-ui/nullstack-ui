import { handleProps } from '.';
import { getColor } from './color';

// Utils
import { getNestedProps } from '#utils/getNestedProps';

// Methods
export const outline = ({
    key = 'outline',
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
        const outlineColor = getColor({ theme, value });

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
        aliases: [
            'outlineColor'
        ],
        fn: outlineColor,
        key: 'outline-color'
    },
    'outline.offset': {
        aliases: [
            'outlineOffset'
        ],
        fn: outlineOffset,
        key: 'outline-offset',
    },
    'outline.style': {
        aliases: [
            'outlineStyle'
        ],
        fn: outlineStyle,
        key: 'outline-style',
    },
    'outline.width': {
        aliases: [
            'outlineWidth'
        ],
        fn: outlineWidth,
        key: 'outline-width',
    }
}