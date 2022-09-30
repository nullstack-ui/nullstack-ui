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

    // Border bottom
    'border.bottom': {
        aliases: [
            'bd.bottom',
            'bdBottom',
            'borderBottom',
        ],
        fn: params => border({
            ...params,
            key: 'border-bottom'
        })
    },
    'border-bottom.color': {
        aliases: [
            'bdBottom.color',
            'border.bottom.color',
            'bdBottomColor',
            'borderBottomColor',
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-bottom-color'
        })
    },
    'border-bottom.radius': {
        aliases: [
            'border.bottom.radius',
            'bdBottomRadius',
            'borderBottomRadius'
        ],
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-bottom-right-radius',
        ]
    },
    'border-bottom.style': {
        aliases: [
            'border.bottom.style',
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
            'border.bottom.width',
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
            'bd.left',
            'bdLeft',
            'borderLeft'
        ],
        fn: params => border({
            ...params,
            key: 'border-left'
        })
    },
    'border-left.color': {
        aliases: [
            'border.left.color',
            'bdLeftColor',
            'borderLeftColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-left-color'
        })
    },
    'border-left.radius': {
        aliases: [
            'border.left.radius',
            'bdLeftRadius',
            'borderLeftRadius'
        ],
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-top-left-radius',
        ]
    },
    'border-left.style': {
        aliases: [
            'border.left.style',
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
            'bd.left.width',
            'border.left.width',
            'bdLeft',
            'bdLeftWidth',
            'borderLeftWidth'
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
    'border-right.radius': {
        aliases: [
            'border.right.radius',
            'bdRightRadius',
            'borderRightRadius'
        ],
        fn: borderRadius,
        key: [
            'border-bottom-right-radius',
            'border-top-right-radius',
        ]
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
    'border-top.radius': {
        aliases: [
            'border.top.radius',
            'bdTopRadius',
            'borderTopRadius'
        ],
        fn: borderRadius,
        key: [
            'border-top-left-radius',
            'border-top-right-radius',
        ]
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

    // Border radius
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
    'border-radius.bottom': {
        aliases: [
            'bd.radius.bottom',
            'bdRadius.bottom',
            'borderRadius.bottom',
            'radius.bottom',
            'rounded.bottom'
        ],
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-bottom-right-radius',
        ]
    },
    'border-radius.left': {
        aliases: [
            'bd.radius.left',
            'bdRadius.left',
            'borderRadius.left',
            'radius.left',
            'rounded.left'
        ],
        fn: borderRadius,
        key: [
            'border-bottom-left-radius',
            'border-top-left-radius',
        ]
    },
    'border-radius.right': {
        aliases: [
            'bd.radius.right',
            'bdRadius.right',
            'borderRadius.right',
            'radius.right',
            'rounded.right'
        ],
        fn: borderRadius,
        key: [
            'border-bottom-right-radius',
            'border-top-right-radius',
        ]
    },
    'border-radius.top': {
        aliases: [
            'bd.radius.top',
            'bdRadius.top',
            'borderRadius.top',
            'radius.top',
            'rounded.top'
        ],
        fn: borderRadius,
        key: [
            'border-top-left-radius',
            'border-top-right-radius',
        ]
    },

    // style
    'border.style': {
        aliases: [
            'bd.style',
            'bdStyle',
            'borderStyle'
        ],
        fn: borderStyle,
        key: 'border-style',
    },

    // width
    'border.width': {
        aliases: [
            'bd.width',
            'bdWidth',
            'borderWidth'
        ],
        fn: borderWidth,
        key: 'border-width',
    },

    // Border X & Y
    'border.x': {
        aliases: [
            'bdX',
            'bd.x',
            'borderX',
        ],
        fn: border,
        key: ['border-left', 'border-right'],
    },
    'border.y': {
        aliases: [
            'bdY',
            'bd.y',
            'borderY'
        ],
        fn: border,
        key: ['border-bottom', 'border-top']
    },
}