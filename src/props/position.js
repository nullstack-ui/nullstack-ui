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
        aliases: ['abs'],
        fn: ({
            value
        }) => position({
            subValue: 'absolute',
            value
        }),
        key: 'position',
    },
    'bottom': {
        fn: ({ value }) => placement({
            key: 'bottom',
            value
        })
    },
    'fixed': {
        fn: ({
            value
        }) => position({
            subValue: 'fixed',
            value
        }),
        key: 'position',
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
        aliases: ['pos'],
        key: 'position'
    },
    'relative': {
        fn: ({
            value
        }) => position({
            subValue: 'relative',
            value
        }),
        key: 'position',
    },
    'right': {
        fn: ({ value }) => placement({
            key: 'right',
            value
        })
    },
    'static': {
        fn: ({
            value
        }) => position({
            subValue: 'static',
            value
        }),
        key: 'position'
    },
    'top': {
        fn: ({ value }) => placement({
            key: 'top',
            value
        })
    },
    'zIndex': {
        aliases: ['z'],
        key: 'z-index'
    }
}