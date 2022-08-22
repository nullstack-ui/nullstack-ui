import { handleProps } from '.';
import { getColor } from './color';

// Utils
import { getNestedProps } from '#utils/getNestedProps';

// Methods
export const border = ({
    key = 'border',
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
        const borderColor = getColor({
            ...rest,
            theme,
            value
        });

        return {
            key,
            value: `solid 1px ${borderColor}`
        };
    } else if (typeof value === 'object') {
        return getNestedProps({
            childProps: value,
            propName: 'border',
            theme
        });
    } else {
        return '';
    }
}

export const borderColor = ({
    key = 'border-color',
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

export const rounded = ({
    value
}) => {
    // TODO: add sizes
    let handledValue;

    if (!isNaN(value) || typeof value === 'string') {
        return borderRadius({ value });
    } else {
        return borderRadius({ value });
    }

}

// Props
export const borderProps = {
    // Border
    'border': {
        aliases: ['bd'],
        fn: border,
        key: 'border',
    },
    'border.color': {
        aliases: [
            'bd.color',
            'bdColor',
            'borderColor'
        ],
        fn: borderColor,
        key: 'border-color'
    },
    'border.radius': {
        aliases: [
            'bd.radius',
            'bdRadius',
            'borderRadius',
            'radius',
            'rounded'
        ],
        fn: borderRadius,
        key: 'border-radius'
    },
    'border.style': {
        aliases: [
            'bd.style',
            'bdStyle',
            'borderStyle'
        ],
        fn: borderStyle,
        key: 'border-style',
    },
    'border.width': {
        aliases: [
            'bd.width',
            'bdWidth',
            'borderWidth'
        ],
        fn: borderWidth,
        key: 'border-width',
    },

    // Border bottom
    'border.bottom': {
        aliases: [
            'bd.bottom'
        ],
        fn: params => border({
            ...params,
            key: 'border-bottom'
        })
    },
    'borderBottom': {
        aliases: [
            'borderB',
            'bdB',
            'bdBottom'
        ],
        fn: params => border({
            ...params,
            key: 'border-bottom'
        })
    },
    'border-bottom.color': {
        aliases: [
            'bdBottomColor',
            'borderBottomColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-bottom-color'
        })
    },
    'border-bottom.style': {
        aliases: [
            'bdBottomStyle',
            'borderBottomStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-bottom-style'
        })
    },
    'border-bottom.width': {
        aliases: [
            'bdBW',
            'bdBottomWidth',
            'borderBottomWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-bottom-width'
        })
    },

    // Border left
    'border.left': {
        aliases: [
            'bd.left'
        ],
        fn: params => border({
            ...params,
            key: 'border-left'
        })
    },
    'borderLeft': {
        aliases: [
            'borderL',
            'bdLeft',
            'bdL'
        ],
        fn: params => border({
            ...params,
            key: 'border-left'
        })
    },
    'border-left.color': {
        aliases: [
            'bdLeftColor',
            'borderLeftColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-left-color'
        })
    },
    'border-left.style': {
        aliases: [
            'bdLeftStyle',
            'borderLeftStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-left-style'
        })
    },
    'border-left.width': {
        aliases: [
            'bdLWidth',
            'bdLeftWidth',
            'borderLeftmWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-left-width'
        })
    },

    // Border right
    'border.right': {
        aliases: [
            'bd.right'
        ],
        fn: params => border({
            ...params,
            key: 'border-right'
        })
    },
    'borderRight': {
        aliases: [
            'borderR',
            'bdRight',
            'bdR'
        ],
        fn: params => border({
            ...params,
            key: 'border-right'
        })
    },
    'border-right.color': {
        aliases: [
            'bdRightColor',
            'borderRightColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-right-color'
        })
    },
    'border-right.style': {
        aliases: [
            'bdRightStyle',
            'borderRightStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-right-style'
        })
    },
    'border-right.width': {
        aliases: [
            'bdRWidth',
            'bdRightWidth',
            'borderRightWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-right-width'
        })
    },

    // Border top
    'border.top': {
        aliases: [
            'bd.top'
        ],
        fn: params => border({
            ...params,
            key: 'border-top'
        })
    },
    'borderTop': {
        aliases: [
            'borderT',
            'bdTop',
            'bdT'
        ],
        fn: params => border({
            ...params,
            key: 'border-top'
        })
    },
    'border-top.color': {
        aliases: [
            'bdTopColor',
            'borderTopColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-top-color'
        })
    },
    'border-top.style': {
        aliases: [
            'bdTopStyle',
            'borderTopStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-top-style'
        })
    },
    'border-top.width': {
        aliases: [
            'bdTWidth',
            'bdTopWidth',
            'borderTopWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-top-width'
        })
    },

    // Border X & Y
    'borderX': {
        aliases: ['bdX'],
        fn: border,
        key: ['border-left', 'border-right']
    },
    'borderY': {
        aliases: ['bdY'],
        fn: border,
        key: ['border-bottom', 'border-top']
    },

    // Rounded
    'rounded': {
        fn: rounded,
        key: 'border-radius'
    }
}