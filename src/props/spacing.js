const spacing = value => {
    return isNaN(value) ? value : `${value}rem`
}

export const spacingProps = {
    'space': {
        aliases: [
            'sp'
        ],
        transform: {
            props: {
                _children: {
                    _not: {
                        _firstChild: {
                            ml: 'value',
                            mt: 'value'
                        }
                    }
                }
            },
            value: spacing
        }
    },
    'space.x': {
        aliases: [
            'spX',
            'spaceX'
        ],
        transform: {
            props: {
                _children: {
                    _not: {
                        _firstChild: {
                            ml: 'value'
                        }
                    }
                }
            },
            value: spacing
        }
    },
    'space.y': {
        aliases: [
            'spY',
            'spaceY'
        ],
        transform: {
            props: {
                _children: {
                    _not: {
                        _firstChild: {
                            mt: 'value'
                        }
                    }
                }
            },
            value: spacing
        }
    },
}