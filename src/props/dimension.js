const sizeAliases = [
    {
        alias: '1/2',
        value: '50%'
    },
    {
        alias: '1/3',
        value: '33.333333%'
    },
    {
        alias: '1/4',
        value: '25%'
    },
    {
        alias: '1/5',
        value: '20%'
    },
    {
        alias: '1/6',
        value: '16.666667%'
    },
    {
        alias: '2/3',
        value: '66.666667%'
    },
    {
        alias: '2/4',
        value: '50%'
    },
    {
        alias: '2/5',
        value: '40%'
    },
    {
        alias: '2/6',
        value: '33.333333%'
    },
    {
        alias: '3/4',
        value: '75%'
    },
    {
        alias: '3/5',
        value: '60%'
    },
    {
        alias: '3/6',
        value: '50%'
    },
    {
        alias: '4/5',
        value: '80%'
    },
    {
        alias: '4/6',
        value: '66.666667%'
    },
    {
        alias: '5/6',
        value: '83.333333%'
    },
    {
        alias: 'fit',
        value: 'fit-content'
    },
    {
        alias: 'full',
        value: '100%'
    },
    {
        alias: 'half',
        value: '50%'
    },
    {
        alias: 'max',
        value: 'max-content'
    },
    {
        alias: 'min',
        value: 'min-content'
    },
    {
        alias: 'screen',
        value: '100vh'
    },
    {
        alias: 'quarter',
        value: '25%'
    }
]

const genericDimension = ({
    key,
    value
}) => {
    let sizeAlias;

    if (typeof value === 'string') {
        sizeAlias = sizeAliases.find(({ alias }) => alias === value);
    }

    if (sizeAlias?.value) {
        return {
            key,
            value: sizeAlias?.value
        }
    } else {
        return {
            key,
            value: isNaN(value) ? value : `${value}px`
        }
    }
}

// Props
const dimensionProps = {
    height: {
        aliases: ['h'],
        fn: ({ value }) => genericDimension({
            key: 'height',
            value
        })
    },
    maxHeight: {
        aliases: ['maxH'],
        fn: ({ value }) => genericDimension({
            key: 'max-height',
            value
        })
    },
    maxWidth: {
        aliases: ['maxW'],
        fn: ({ value }) => genericDimension({
            key: 'max-width',
            value
        })
    },
    minHeight: {
        aliases: ['minH'],
        fn: ({ value }) => genericDimension({
            key: 'min-height',
            value
        })
    },
    minWidth: {
        aliases: ['minW'],
        fn: ({ value }) => genericDimension({
            key: 'min-width',
            value
        })
    },
    width: {
        aliases: ['w'],
        fn: ({ value }) => genericDimension({
            key: 'width',
            value
        })
    }
}

// Exports
module.exports = {
    dimensionProps,
    sizeAliases
}