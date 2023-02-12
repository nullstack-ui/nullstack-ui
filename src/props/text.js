import { getColor } from './color';
import { getNestedProps } from '../utils/getNestedProps';
import { getValue } from '../utils/getValue';

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
            value: alias?.value || 1
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
    if (typeof value === 'object') {

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
        transform: {
            props: {
                textTransform: 'capitalize'
            },
        }
    },
    'direction': {
        key: 'direction'
    },
    'ellipsis': {
        transform: {
            props: {
                ovX: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            },
        }
    },
    'letterSpacing': {
        aliases: ['tracking'],
        key: 'letter-spacing',
        fn: letterSpacing
    },
    'lineClamp': {
        aliases: ['clamp'],
        key: 'line-clamp',
        fn: lineClamp
    },
    'lineHeight': {
        aliases: ['leading'],
        key: 'line-height',
        fn: lineHeight
    },
    'lowerCase': {
        aliases: ['lowercase'],
        transform: {
            props: {
                textTransform: 'lowercase'
            },
        }
    },
    'noWrap': {
        aliases: ['nowrap'],
        transform: {
            props: {
                whiteSpace: 'nowrap'
            }
        }
    },
    'text': {
        key: 'text',
        fn: text
    },
    'text.align': {
        aliases: [
            'textAl',
            'text.al',
            'textAlign'
        ],
        key: 'text-align'
    },
    'text.alignLast': {
        aliases: [
            'textAlLast',
            'text.alLast',
            'textAlignLast'
        ],
        key: 'text-align-last'
    },
    'textDecoration': {
        aliases: [
            'text.decoration'
        ],
        fn: textDecoration,
        key: 'text-decoration'
    },
    'textDecoration.color': {
        aliases: [
            'text.decorationColor',
            'textDecorationColor'
        ],
        fn: textDecorationColor,
        key: 'text-decoration-color'
    },
    'textDecoration.line': {
        aliases: [
            'text.decorationLine',
            'textDecorationLine'
        ],
        key: 'text-decoration-line'
    },
    'textDecoration.style': {
        aliases: [
            'text.decorationStyle',
            'textDecorationStyle'
        ],
        key: 'text-decoration-style'
    },
    'textDecoration.thickness': {
        aliases: [
            'text.decorationThickness',
            'textDecorationThickness',
            'textDecoration.width',
            'text.decorationWidth',
            'textDecorationWidth'
        ],
        fn: ({ value }) => ({
            key: 'text-decoration-thickness',
            value: getValue({ unit: 'px', value })
        }),
        key: 'text-decoration-thickness'
    },
    'text.direction': {
        aliases: [
            'textDir',
            'text.dir',
            'textDirection'
        ],
        key: 'text-direction'
    },
    'text.indent': {
        aliases: [
            'indent',
            'textIndent'
        ],
        fn: ({ value }) => ({
            key: 'text-indent',
            value: getValue({ unit: 'px', value })
        }),
        key: 'text-indent'
    },
    'text.overflow': {
        aliases: [
            'text.ov',
            'textOverflow'
        ],
        key: 'text-overflow'
    },
    'text.transform': {
        aliases: ['textTransform'],
        key: 'text-transform'
    },
    'underline': {
        transform: {
            props: {
                textDecoration: 'underline'
            }
        }
    },
    'upperCase': {
        aliases: ['uppercase'],
        transform: {
            props: {
                textTransform: 'uppercase'
            },
        }
    },
    'verticalAlign': {
        aliases: [
            'vAl',
            'vAlign'
        ],
        key: 'vertical-align'
    },
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