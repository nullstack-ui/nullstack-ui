import { getColor } from './color.js';
import { getNestedProps } from '../utils/getNestedProps.js';
import { getValue } from '../utils/getValue.js';

const letterSpacingAliases = [
    {
        alias: 'tighter',
        value: '-0.05em'
    },
    {
        alias: 'tight',
        value: '-0.025em'
    },
    {
        alias: 'normal',
        value: '0em'
    },
    {
        alias: 'wide',
        value: '0.025em'
    },
    {
        alias: 'wider',
        value: '0.05em'
    },
    {
        alias: 'widest',
        value: '0.1em'
    }
];

const lineHeightAliases = [
    // {
    //     alias: '3',
    //     value: '.75rem'
    // },
    // {
    //     alias: '4',
    //     value: '1rem'
    // },
    // {
    //     alias: '5',
    //     value: '1.25rem'
    // },
    // {
    //     alias: '6',
    //     value: '1.5rem'
    // },
    // {
    //     alias: '7',
    //     value: '1.75rem'
    // },
    // {
    //     alias: '8',
    //     value: '2rem'
    // },
    // {
    //     alias: '9',
    //     value: '2.25rem'
    // },
    // {
    //     alias: '10',
    //     value: '1rem'
    // },
    {
        alias: 'none',
        value: 1
    },
    {
        alias: 'tight',
        value: 1.25
    },
    {
        alias: 'snug',
        value: 1.375
    },
    {
        alias: 'normal',
        value: 1.5
    },
    {
        alias: 'relaxed',
        value: 1.625
    },
    {
        alias: 'loose',
        value: 2
    }
];

const letterSpacing = ({ value }) => {
    let alias;

    if (typeof value === 'string') {
        alias = letterSpacingAliases.find(({ alias }) => alias === value);
    }

    if (alias?.value) {
        return {
            key: 'letter-spacing',
            value: alias.value
        }
    } else {
        return {
            key: 'letter-spacing',
            value: isNaN(value) ? value : `${value}px`
        }
    }
}

const lineClamp = ({ value }) => {
    return [
        {
            key: 'display',
            value: '-webkit-box'
        },
        {
            key: '-webkit-line-clamp',
            value
        },
        {
            key: '-webkit-box-orient',
            value: 'vertical'
        }
    ]
}

const lineHeight = ({
    props,
    value
}) => {
    let alias;

    if (props.leading != null) {
        alias = lineHeightAliases.find(({ alias }) => alias === value);

        return {
            key: 'line-height',
            value: alias?.value ?? value ?? 1
        }
    } else {
        return {
            key: 'line-height',
            value
        }
    }
}

const text = ({
    key = 'text',
    theme,
    value
}) => {
    return getNestedProps({
        childProps: value,
        propName: key,
        theme
    });
}

const textDecoration = ({
    theme,
    value,
    ...rest
}) => {
    let color = '#000';
    let line = 'underline';
    let style = 'solid';
    let thickness = '1px';

    if (typeof value === 'object') {
        if (value.color) {
            color = getColor({
                ...rest,
                theme,
                value: value.color
            });
        }

        if (value.line) {
            line = value.line;
        }

        if (value.style) {
            style = value.style;
        }

        if (value.thickness ?? value.width) {
            thickness = getValue({ unit: 'px', value: value.thickness ?? value.width });
        }

        return {
            key: 'text-decoration',
            value: `${color} ${line} ${style} ${thickness}`
        }
    } else {
        return {
            key: 'text-decoration',
            value
        }
    }
}

const textDecorationColor = ({
    key = 'text-decoration-color',
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
    };
}

export const textProps = {
    'capitalize': {
        fn: () => ({
            key: 'text-transform',
            value: 'capitalize'
        })
    },
    'direction': {
        key: 'direction'
    },
    'ellipsis': {
        fn: () => ([
            {
                key: 'overflow-x',
                value: 'hidden'
            },
            {
                key: 'text-overflow',
                value: 'ellipsis'
            },
            {
                key: 'white-space',
                value: 'nowrap'
            }
        ])
    },
    'letterSpacing': {
        key: 'letter-spacing',
        fn: letterSpacing
    },
    'tracking': { aliasFor: 'letterSpacing' },

    'lineClamp': {
        key: 'line-clamp',
        fn: lineClamp
    },
    'clamp': { aliasFor: 'lineClamp' },

    'lineHeight': {
        key: 'line-height',
        fn: lineHeight
    },
    'leading': { aliasFor: 'lineHeight' },

    'lowerCase': {
        fn: () => ({
            key: 'text-transform',
            value: 'lowercase'
        })
    },
    'lowercase': { aliasFor: 'lowerCase' },

    'noWrap': {
        fn: () => ({
            key: 'white-space',
            value: 'nowrap'
        })
    },
    'nowrap': { aliasFor: 'noWrap' },

    'text': {
        key: 'text',
        fn: text
    },
    'text.align': {
        key: 'text-align'
    },
    'textAl': { aliasFor: 'text.align' },
    'text.al': { aliasFor: 'text.align' },
    'textAlign': { aliasFor: 'text.align' },

    'text.alignLast': {
        key: 'text-align-last'
    },
    'textAlLast': { aliasFor: 'text.alignLast' },
    'text.alLast': { aliasFor: 'text.alignLast' },
    'textAlignLast': { aliasFor: 'text.alignLast' },

    'textDecoration': {
        fn: textDecoration,
        key: 'text-decoration'
    },
    'text.decoration': { aliasFor: 'textDecoration' },

    'textDecoration.color': {
        fn: textDecorationColor,
        key: 'text-decoration-color'
    },
    'text.decorationColor': { aliasFor: 'textDecoration.color' },
    'textDecorationColor': { aliasFor: 'textDecoration.color' },

    'textDecoration.line': {
        key: 'text-decoration-line'
    },
    'text.decorationLine': { aliasFor: 'textDecoration.line' },
    'textDecorationLine': { aliasFor: 'textDecoration.line' },

    'textDecoration.style': {
        key: 'text-decoration-style'
    },
    'text.decorationStyle': { aliasFor: 'textDecoration.style' },
    'textDecorationStyle': { aliasFor: 'textDecoration.style' },

    'textDecoration.thickness': {
        fn: ({ value }) => ({
            key: 'text-decoration-thickness',
            value: getValue({ unit: 'px', value })
        }),
        key: 'text-decoration-thickness'
    },
    'text.decorationThickness': { aliasFor: 'textDecoration.thickness' },
    'textDecorationThickness': { aliasFor: 'textDecoration.thickness' },
    'textDecoration.width': { aliasFor: 'textDecoration.thickness' },
    'text.decorationWidth': { aliasFor: 'textDecoration.thickness' },
    'textDecorationWidth': { aliasFor: 'textDecoration.thickness' },

    'text.direction': {
        key: 'text-direction'
    },
    'textDir': { aliasFor: 'text.direction' },
    'text.dir': { aliasFor: 'text.direction' },
    'textDirection': { aliasFor: 'text.direction' },

    'text.indent': {
        fn: ({ value }) => ({
            key: 'text-indent',
            value: getValue({ unit: 'px', value })
        }),
        key: 'text-indent'
    },
    'indent': { aliasFor: 'text.indent' },
    'textIndent': { aliasFor: 'text.indent' },

    'text.overflow': {
        key: 'text-overflow'
    },
    'text.ov': { aliasFor: 'text.overflow' },
    'textOv': { aliasFor: 'text.overflow' },
    'textOverflow': { aliasFor: 'text.overflow' },

    'text.transform': {
        key: 'text-transform'
    },
    'textTransform': { aliasFor: 'text.transform' },

    'underline': {
        fn: () => ({
            key: 'text-decoration',
            value: 'underline'
        })
    },
    'upperCase': {
        fn: () => ({
            key: 'text-transform',
            value: 'uppercase'
        })
    },
    'uppercase': { aliasFor: 'upperCase' },

    'verticalAlign': {
        key: 'vertical-align'
    },
    'vAl': { aliasFor: 'verticalAlign' },
    'vAlign': { aliasFor: 'verticalAlign' },

    'whiteSpace': {
        key: 'white-space'
    },
    'wordSpacing': {
        fn: ({ value }) => ({
            key: 'word-spacing',
            value: getValue({ unit: 'px', value })
        }),
        key: 'word-spacing'
    }
}