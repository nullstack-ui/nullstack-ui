import { getColor } from './color.js';
import { getValue } from '#utils/getValue.js';

// Utils
import { getNestedProps } from '#utils/getNestedProps.js';

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
    propName = 'bd',
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
            propName,
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
            propName: 'bdRadius',
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
    'bd': {
        chainable: true,
        fn: border,
        key: 'border',
    },

    // Border color
    'bdColor': {
        fn: borderColor,
        key: 'border-color'
    },
    'bd.color': { aliasFor: 'bdColor' },

    // Border radius
    'bdRadius': {
        chainable: true,
        fn: borderRadius,
        key: 'border-radius'
    },
    'bd.radius': { aliasFor: 'bdRadius' },
    'radius': { aliasFor: 'bdRadius' },
    'rounded': { aliasFor: 'bdRadius' },

    // Border radius (bottom)
    'bdRadiusBottom': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-bottom-right-radius',
        ]
    },
    'bd.radius.bottom': { aliasFor: 'bdRadiusBottom' },
    'bdRadius.bottom': { aliasFor: 'bdRadiusBottom' },
    'radius.bottom': { aliasFor: 'bdRadiusBottom' },
    'rounded.bottom': { aliasFor: 'bdRadiusBottom' },

    // Border radius (left)
    'bdRadiusLeft': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-top-left-radius',
        ]
    },
    'bd.radius.left': { aliasFor: 'bdRadiusLeft' },
    'bdRadius.left': { aliasFor: 'bdRadiusLeft' },
    'radius.left': { aliasFor: 'bdRadiusLeft' },
    'rounded.left': { aliasFor: 'bdRadiusLeft' },

    'bdRadiusRight': {
        fn: borderRadius,
        key: [
            'border-bottom-right-radius',
            'border-top-right-radius',
        ]
    },
    'bd.radius.right': { aliasFor: 'bdRadiusRight' },
    'bdRadius.right': { aliasFor: 'bdRadiusRight' },
    'radius.right': { aliasFor: 'bdRadiusRight' },
    'rounded.right': { aliasFor: 'bdRadiusRight' },

    'bdRadiusTop': {
        fn: borderRadius,
        key: [
            'border-top-left-radius',
            'border-top-right-radius',
        ]
    },
    'bd.radius.top': { aliasFor: 'bdRadiusTop' },
    'bdRadius.top': { aliasFor: 'bdRadiusTop' },
    'radius.top': { aliasFor: 'bdRadiusTop' },
    'rounded.top': { aliasFor: 'bdRadiusTop' },

    // Border style
    'bdStyle': {
        fn: borderStyle,
        key: 'border-style',
    },
    'bd.style': { aliasFor: 'bdStyle' },

    // Border width
    'bdWidth': {
        fn: borderWidth,
        key: 'border-width',
    },
    'bd.width': { aliasFor: 'bdWidth' },

    // Border bottom
    'bdBottom': {
        chainable: true,
        fn: params => border({
            ...params,
            key: 'border-bottom',
            propName: 'bdBottom'
        })
    },
    'bd.bottom': { aliasFor: 'bdBottom' },

    'bdBottomColor': {
        fn: params => borderColor({
            ...params,
            key: 'border-bottom-color'
        })
    },
    'bd.bottom.color': { aliasFor: 'bdBottomColor' },
    'bdBottom.color': { aliasFor: 'bdBottomColor' },

    'bdBottomRadius': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-bottom-right-radius',
        ]
    },
    'bd.bottom.radius': { aliasFor: 'bdBottomRadius' },
    'bdBottom.radius': { aliasFor: 'bdBottomRadius' },

    'bdBottomStyle': {
        fn: params => borderStyle({
            ...params,
            key: 'border-bottom-style'
        })
    },
    'bd.bottom.style': { aliasFor: 'bdBottomStyle' },
    'bdBottom.style': { aliasFor: 'bdBottomStyle' },

    'bdBottomWidth': {
        fn: params => borderWidth({
            ...params,
            key: 'border-bottom-width'
        })
    },
    'bd.bottom.width': { aliasFor: 'bdBottomWidth' },
    'bdBottom.width': { aliasFor: 'bdBottomWidth' },

    // Border left
    'bdLeft': {
        fn: params => border({
            ...params,
            key: 'border-left',
            propName: 'bdLeft'
        })
    },
    'bd.left': { aliasFor: 'bdLeft' },

    'bdLeftColor': {
        fn: params => borderColor({
            ...params,
            key: 'border-left-color'
        })
    },
    'bd.left.color': { aliasFor: 'bdLeftColor' },
    'bdLeft.color': { aliasFor: 'bdLeftColor' },

    'bdLeftRadius': {
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-top-left-radius',
        ]
    },
    'bd.left.radius': { aliasFor: 'bdLeftRadius' },
    'bdLeft.radius': { aliasFor: 'bdLeftRadius' },

    'bdLeftStyle': {
        fn: params => borderStyle({
            ...params,
            key: 'border-left-style'
        })
    },
    'bd.left.style': { aliasFor: 'bdLeftStyle' },
    'bdLeft.style': { aliasFor: 'bdLeftStyle' },

    'bdLeftWidth': {
        fn: params => borderWidth({
            ...params,
            key: 'border-left-width'
        })
    },
    'bd.left.width': { aliasFor: 'bdLeftWidth' },
    'bdLeft.width': { aliasFor: 'bdLeftWidth' },

    // Border right
    'bdRight': {
        chainable: true,
        fn: params => border({
            ...params,
            key: 'border-right',
            propName: 'bdRight'
        })
    },
    'bd.right': { aliasFor: 'bdRight' },

    'bdRightColor': {
        fn: params => borderColor({
            ...params,
            key: 'border-right-color'
        })
    },
    'bd.right.color': { aliasFor: 'bdRightColor' },
    'bdRight.color': { aliasFor: 'bdRightColor' },

    'bdRightRadius': {
        fn: borderRadius,
        key: [
            'border-bottom-right-radius',
            'border-top-right-radius',
        ]
    },
    'bd.right.radius': { aliasFor: 'bdRightRadius' },
    'bdRight.radius': { aliasFor: 'bdRightRadius' },

    'bdRightStyle': {
        fn: params => borderStyle({
            ...params,
            key: 'border-right-style'
        })
    },
    'bd.right.style': { aliasFor: 'bdRightStyle' },
    'bdRight.style': { aliasFor: 'bdRightStyle' },

    'bdRightWidth': {
        fn: params => borderWidth({
            ...params,
            key: 'border-right-width'
        })
    },
    'bd.right.width': { aliasFor: 'bdRightWidth' },
    'bdRight.width': { aliasFor: 'bdRightWidth' },

    // Border top
    'bdTop': {
        fn: params => border({
            ...params,
            key: 'border-top',
            propName: 'bdTop'
        })
    },
    'bd.top': { aliasFor: 'bdTop' },

    'bdTopColor': {
        fn: params => borderColor({
            ...params,
            key: 'border-top-color'
        })
    },
    'bd.top.color': { aliasFor: 'bdTopColor' },
    'bdTop.color': { aliasFor: 'bdTopColor' },

    'bdTopRadius': {
        fn: borderRadius,
        key: [
            'border-top-left-radius',
            'border-top-right-radius',
        ]
    },
    'bd.top.radius': { aliasFor: 'bdTopRadius' },
    'bdTop.radius': { aliasFor: 'bdTopRadius' },

    'bdTopStyle': {
        fn: params => borderStyle({
            ...params,
            key: 'border-top-style'
        })
    },
    'bd.top.style': { aliasFor: 'bdTopStyle' },
    'bdTop.style': { aliasFor: 'bdTopStyle' },

    'bdTopWidth': {
        fn: params => borderWidth({
            ...params,
            key: 'border-top-width'
        })
    },
    'bd.top.width': { aliasFor: 'bdTopWidth' },
    'bdTop.width': { aliasFor: 'bdTopWidth' },

    // Border X
    'bdX': {
        fn: params => border({
            ...params,
            key: ['border-left', 'border-right'],
            propName: 'bdX'
        }),
    },
    'bd.x': { aliasFor: 'bdX' },

    'bdXColor': {
        fn: params => borderColor({
            ...params,
            key: [
                'border-left-color',
                'border-right-color',
            ]
        })
    },
    'bd.x.color': { aliasFor: 'bdXColor' },
    'bdX.color': { aliasFor: 'bdXColor' },

    'bdXStyle': {
        fn: params => borderStyle({
            ...params,
            key: [
                'border-left-style',
                'border-right-style',
            ]
        })
    },
    'bd.x.style': { aliasFor: 'bdXStyle' },
    'bdX.style': { aliasFor: 'bdXStyle' },

    'bdXWidth': {
        fn: params => borderWidth({
            ...params,
            key: [
                'border-left-width',
                'border-right-width',
            ]
        })
    },
    'bd.x.width': { aliasFor: 'bdXWidth' },
    'bdX.width': { aliasFor: 'bdXWidth' },

    // Border Y
    'bdY': {
        fn: params => border({
            ...params,
            key: ['border-bottom', 'border-top'],
            propName: 'bdY'
        }),
        key: ['border-bottom', 'border-top']
    },
    'bd.y': { aliasFor: 'bdY' },

    'bdYColor': {
        fn: params => borderColor({
            ...params,
            key: [
                'border-bottom-color',
                'border-top-color',
            ]
        })
    },
    'bd.y.color': { aliasFor: 'bdYColor' },
    'bdY.color': { aliasFor: 'bdYColor' },

    'bdYStyle': {
        fn: params => borderStyle({
            ...params,
            key: [
                'border-bottom-style',
                'border-top-style',
            ]
        })
    },
    'bd.y.style': { aliasFor: 'bdYStyle' },
    'bdY.style': { aliasFor: 'bdYStyle' },

    'bdYWidth': {
        fn: params => borderWidth({
            ...params,
            key: [
                'border-bottom-width',
                'border-top-width',
            ]
        })
    },
    'bd.y.width': { aliasFor: 'bdYWidth' },
    'bdY.width': { aliasFor: 'bdYWidth' },
}