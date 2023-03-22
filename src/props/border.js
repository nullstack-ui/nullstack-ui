import { handleProps } from '.';
import { getColor } from './color';
import { getValue } from '#utils/getValue';

// Utils
import { getNestedProps } from '#utils/getNestedProps';

const radiusUnit = 'em';

const borderRadiusAliases = [
    {
        alias: '2xl',
        value: `1${radiusUnit}`
    },
    {
        alias: 'full',
        value: '9999px'
    },
    {
        alias: 'lg',
        value: `.5${radiusUnit}`
    },
    {
        alias: 'md',
        value: `.375${radiusUnit}`
    },
    {
        alias: 'sm',
        value: `.125${radiusUnit}`
    },
    {
        alias: 'xl',
        value: `.75${radiusUnit}`
    },
]

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
            propName: key,
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
    theme,
    value
}) => {
    const alias = typeof value === 'string' ? borderRadiusAliases.find(({ alias }) => alias === value) : null;

    if (alias) {
        return {
            key,
            value: alias.value
        }
    } else if (typeof value === 'boolean') {
        return {
            key,
            value: value ? `.5${radiusUnit}` : 0
        }
    } else if (typeof value === 'object') {
        return getNestedProps({
            childProps: value,
            propName: 'borderRadius',
            theme
        });
    } else {
        return {
            key,
            value: getValue({ unit: radiusUnit, value })
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
        fn: border,
        key: 'border',
    },
    'bd': { aliasFor: 'border' },

    'border.color': {
        fn: borderColor,
        key: 'border-color'
    },
    'bd.color': { aliasFor: 'border.color' },
    'bdColor': { aliasFor: 'border.color' },
    'borderColor': { aliasFor: 'border.color' },

    // Border bottom
    'border.bottom': {
        fn: params => border({
            ...params,
            key: 'border-bottom'
        })
    },
    'bd.bottom': { aliasFor: 'border.bottom' },
    'bdBottom': { aliasFor: 'border.bottom' },
    'borderBottom': { aliasFor: 'border.bottom' },

    'border-bottom.color': {
        fn: params => borderColor({
            ...params,
            key: 'border-bottom-color'
        })
    },
    'bdBottom.color': { aliasFor: 'border-bottom.color' },
    'border.bottom.color': { aliasFor: 'border-bottom.color' },
    'bdBottomColor': { aliasFor: 'border-bottom.color' },
    'borderBottomColor': { aliasFor: 'border-bottom.color' },

    'border-bottom.radius': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-bottom-right-radius',
        ]
    },
    'border.bottom.radius': { aliasFor: 'border-bottom.radius' },
    'bdBottom.radius': { aliasFor: 'border-bottom.radius' },
    'bdBottomRadius': { aliasFor: 'border-bottom.radius' },
    'borderBottomRadius': { aliasFor: 'border-bottom.radius' },

    'border-bottom.style': {
        fn: params => borderStyle({
            ...params,
            key: 'border-bottom-style'
        })
    },
    'border.bottom.style': { aliasFor: 'border-bottom.style' },
    'bdBottom.style': { aliasFor: 'border-bottom.style' },
    'bdBottomStyle': { aliasFor: 'border-bottom.style' },
    'borderBottomStyle': { aliasFor: 'border-bottom.style' },

    'border-bottom.width': {
        fn: params => borderWidth({
            ...params,
            key: 'border-bottom-width'
        })
    },
    'border.bottom.width': { aliasFor: 'border-bottom.width' },
    'bdBottom.width': { aliasFor: 'border-bottom.width' },
    'bdBottomWidth': { aliasFor: 'border-bottom.width' },
    'borderBottomWidth': { aliasFor: 'border-bottom.width' },

    // Border left
    'border.left': {
        aliases: [
            'bd.left',
            'bdLeft',
            'borderLeft'
        ],
        fn: params => border({
            ...params,
            key: 'border-left'
        })
    },
    'bd.left': { aliasFor: 'border.left' },
    'bdLeft': { aliasFor: 'border.left' },
    'borderLeft': { aliasFor: 'border.left' },

    'border-left.color': {
        fn: params => borderColor({
            ...params,
            key: 'border-left-color'
        })
    },
    'border.left.color': { aliasFor: 'border-left.color' },
    'bdLeft.color': { aliasFor: 'border-left.color' },
    'bdLeftColor': { aliasFor: 'border-left.color' },
    'borderLeftColor': { aliasFor: 'border-left.color' },

    'border-left.radius': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-top-left-radius',
        ]
    },
    'border.left.radius': { aliasFor: 'border-left.radius' },
    'bdLeft.radius': { aliasFor: 'border-left.radius' },
    'bdLeftRadius': { aliasFor: 'border-left.radius' },
    'borderLeftRadius': { aliasFor: 'border-left.radius' },

    'border-left.style': {
        fn: params => borderStyle({
            ...params,
            key: 'border-left-style'
        })
    },
    'border.left.style': { aliasFor: 'border-left.style' },
    'bdLeft.style': { aliasFor: 'border-left.style' },
    'bdLeftStyle': { aliasFor: 'border-left.style' },
    'borderLeftStyle': { aliasFor: 'border-left.style' },

    'border-left.width': {
        fn: params => borderWidth({
            ...params,
            key: 'border-left-width'
        })
    },
    'border.left.width': { aliasFor: 'border-left.width' },
    'bdLeft.width': { aliasFor: 'border-left.width' },
    'bdLeftWidth': { aliasFor: 'border-left.width' },
    'borderLeftWidth': { aliasFor: 'border-left.width' },

    // Border right
    'border.right': {
        fn: params => border({
            ...params,
            key: 'border-right'
        })
    },
    'bd.right': { aliasFor: 'border.right' },

    'borderRight': {
        fn: params => border({
            ...params,
            key: 'border-right'
        })
    },
    'borderR': { aliasFor: 'borderRight' },
    'bdRight': { aliasFor: 'borderRight' },
    'bdR': { aliasFor: 'borderRight' },

    'border-right.color': {
        fn: params => borderColor({
            ...params,
            key: 'border-right-color'
        })
    },
    'bdRight.color': { aliasFor: 'border-right.color' },
    'bdRightColor': { aliasFor: 'border-right.color' },
    'borderRightColor': { aliasFor: 'border-right.color' },

    'border-right.radius': {
        fn: borderRadius,
        key: [
            'border-bottom-right-radius',
            'border-top-right-radius',
        ]
    },
    'border.right.radius': { aliasFor: 'border-right.radius' },
    'bdRight.radius': { aliasFor: 'border-right.radius' },
    'bdRightRadius': { aliasFor: 'border-right.radius' },
    'borderRightRadius': { aliasFor: 'border-right.radius' },

    'border-right.style': {
        fn: params => borderStyle({
            ...params,
            key: 'border-right-style'
        })
    },
    'bdRight.style': { aliasFor: 'border-right.style' },
    'bdRightStyle': { aliasFor: 'border-right.style' },
    'borderRightStyle': { aliasFor: 'border-right.style' },

    'border-right.width': {
        fn: params => borderWidth({
            ...params,
            key: 'border-right-width'
        })
    },
    'border.right.width': { aliasFor: 'border-right.width' },
    'bdRight.width': { aliasFor: 'border-right.width' },
    'bdRightWidth': { aliasFor: 'border-right.width' },

    // Border top
    'border.top': {
        fn: params => border({
            ...params,
            key: 'border-top'
        })
    },
    'bd.top': { aliasFor: 'border.top' },
    'bdTop': { aliasFor: 'border.top' },
    'borderTop': { aliasFor: 'border.top' },

    'border-top.color': {
        fn: params => borderColor({
            ...params,
            key: 'border-top-color'
        })
    },
    'bdTopColor': { aliasFor: 'border-top.color' },
    'borderTopColor': { aliasFor: 'border-top.color' },

    'border-top.radius': {
        fn: borderRadius,
        key: [
            'border-top-left-radius',
            'border-top-right-radius',
        ]
    },
    'border.top.radius': { aliasFor: 'border-top.radius' },
    'bdTop.radius': { aliasFor: 'border-top.radius' },
    'bdTopRadius': { aliasFor: 'border-top.radius' },
    'borderTopRadius': { aliasFor: 'border-top.radius' },

    'border-top.style': {
        fn: params => borderStyle({
            ...params,
            key: 'border-top-style'
        })
    },
    'bdTopStyle': { aliasFor: 'border-top.style' },
    'borderTopStyle': { aliasFor: 'border-top.style' },
    'bd.top.style': { aliasFor: 'border-top.style' },
    'border.top.style': { aliasFor: 'border-top.style' },

    'border-top.width': {
        fn: params => borderWidth({
            ...params,
            key: 'border-top-width'
        })
    },
    'bdTWidth': { aliasFor: 'border-top.width' },
    'bdTopWidth': { aliasFor: 'border-top.width' },
    'borderTopWidth': { aliasFor: 'border-top.width' },
    'bd.top.width': { aliasFor: 'border-top.width' },
    'border.top.width': { aliasFor: 'border-top.width' },

    // Border radius
    'border.radius': {
        fn: borderRadius,
        key: 'border-radius'
    },
    'bd.radius': { aliasFor: 'border.radius' },
    'bdRadius': { aliasFor: 'border.radius' },
    'borderRadius': { aliasFor: 'border.radius' },
    'radius': { aliasFor: 'border.radius' },
    'rounded': { aliasFor: 'border.radius' },

    'border-radius.bottom': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-bottom-right-radius',
        ]
    },
    'bd.radius.bottom': { aliasFor: 'border-radius.bottom' },
    'bdRadius.bottom': { aliasFor: 'border-radius.bottom' },
    'borderRadius.bottom': { aliasFor: 'border-radius.bottom' },
    'radius.bottom': { aliasFor: 'border-radius.bottom' },
    'rounded.bottom': { aliasFor: 'border-radius.bottom' },

    'border-radius.left': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-top-left-radius',
        ]
    },
    'bd.radius.left': { aliasFor: 'border-radius.left' },
    'bdRadius.left': { aliasFor: 'border-radius.left' },
    'borderRadius.left': { aliasFor: 'border-radius.left' },
    'radius.left': { aliasFor: 'border-radius.left' },
    'rounded.left': { aliasFor: 'border-radius.left' },

    'border-radius.right': {
        fn: borderRadius,
        key: [
            'border-bottom-right-radius',
            'border-top-right-radius',
        ]
    },
    'bd.radius.right': { aliasFor: 'border-radius.right' },
    'bdRadius.right': { aliasFor: 'border-radius.right' },
    'borderRadius.right': { aliasFor: 'border-radius.right' },
    'radius.right': { aliasFor: 'border-radius.right' },
    'rounded.right': { aliasFor: 'border-radius.right' },

    'border-radius.top': {
        fn: borderRadius,
        key: [
            'border-top-left-radius',
            'border-top-right-radius',
        ]
    },
    'bd.radius.top': { aliasFor: 'border-radius.top' },
    'bdRadius.top': { aliasFor: 'border-radius.top' },
    'borderRadius.top': { aliasFor: 'border-radius.top' },
    'radius.top': { aliasFor: 'border-radius.top' },
    'rounded.top': { aliasFor: 'border-radius.top' },

    // style
    'border.style': {
        fn: borderStyle,
        key: 'border-style',
    },
    'bd.style': { aliasFor: 'border.style' },
    'bdStyle': { aliasFor: 'border.style' },
    'borderStyle': { aliasFor: 'border.style' },

    // width
    'border.width': {
        fn: borderWidth,
        key: 'border-width',
    },
    'bd.width': { aliasFor: 'border.width' },
    'bdWidth': { aliasFor: 'border.width' },
    'borderWidth': { aliasFor: 'border.width' },

    // Border X & Y
    'border.x': {
        fn: border,
        key: ['border-left', 'border-right'],
    },
    'bdX': { aliasFor: 'border.x' },
    'bd.x': { aliasFor: 'border.x' },
    'borderX': { aliasFor: 'border.x' },

    'border.y': {
        fn: border,
        key: ['border-bottom', 'border-top']
    },
    'bdY': { aliasFor: 'border.y' },
    'bd.y': { aliasFor: 'border.y' },
    'borderY': { aliasFor: 'border.y' },
}