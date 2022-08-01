const genericSize = ({
    key,
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}px`
    }
}

export const height = ({ value }) => {
    return genericSize({ key: 'height', value });
}

export const size = ({ value }) => {
    return [
        ...genericSize({
            key: 'height',
            value
        }),
        ...genericSize({
            key: 'width',
            value
        })
    ]
}

export const width = ({ value }) => {
    return genericSize({ key: 'width', value });
}

// Props
export const sizeProps = {
    height: {
        aliases: ['h'],
        fn: ({ value }) => genericSize({
            key: 'height',
            value
        })
    },
    maxHeight: {
        aliases: ['maxH'],
        fn: ({ value }) => genericSize({
            key: 'max-height',
            value
        })
    },
    maxWidth: {
        aliases: ['maxW'],
        fn: ({ value }) => genericSize({
            key: 'max-width',
            value
        })
    },
    minHeight: {
        aliases: ['minH'],
        fn: ({ value }) => genericSize({
            key: 'min-height',
            value
        })
    },
    minWidth: {
        aliases: ['minW'],
        fn: ({ value }) => genericSize({
            key: 'min-width',
            value
        })
    },
    width: {
        aliases: ['w'],
        fn: ({ value }) => genericSize({
            key: 'width',
            value
        })
    }
}