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

export const textProps = {
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
    'noWrap': {
        transform: {
            props: {
                whiteSpace: 'nowrap'
            }
        }
    },
    'text.overflow': {
        aliases: [
            'text.ov',
            'textOverflow'
        ],
        key: 'text-overflow'
    },
    'whiteSpace': {
        'key': 'white-space'
    }
}