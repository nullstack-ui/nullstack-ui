const genericDimension = ({
    key,
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}px`
    }
}

// Props
export const dimensionProps = {
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