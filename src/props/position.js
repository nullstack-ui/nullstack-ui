export const placement = ({
    key,
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}px`
    }
}

export const position = ({
    key = 'position',
    subValue,
    value
}) => {
    if (value && subValue) {
        return {
            key,
            value: subValue
        };
    } else {
        return {
            key,
            value
        };
    }
}

export const positionProps = {
    'absolute': {
        transform: {
            props: {
                position: 'absolute'
            },
        }
    },
    'bottom': {
        fn: ({ value }) => placement({
            key: 'bottom',
            value
        })
    },
    'fixed': {
        transform: {
            props: {
                position: 'fixed'
            },
        }
    },
    'inset': {
        fn: ({ value }) => placement({
            key: [
                'bottom',
                'left',
                'right',
                'top'
            ],
            value
        })
    },
    'left': {
        fn: ({ value }) => placement({
            key: 'left',
            value
        })
    },
    'position': {
        key: 'position'
    },
    'pos': { aliasFor: 'position' },

    'relative': {
        transform: {
            props: {
                position: 'relative'
            },
        }
    },
    'right': {
        fn: ({ value }) => placement({
            key: 'right',
            value
        })
    },
    'static': {
        transform: {
            props: {
                position: 'static'
            },
        }
    },
    'sticky': {
        transform: {
            props: {
                position: 'sticky'
            },
        }
    },
    'top': {
        fn: ({ value }) => placement({
            key: 'top',
            value
        })
    },
    'zIndex': {
        key: 'z-index'
    },
    'z': { aliasFor: 'zIndex' },
}