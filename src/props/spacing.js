import { isReverse } from './flex';

const spacing = ({
    props,
    theme,
    value
}) => {
    return isNaN(value) ? value : `${value}rem`
}

export const spacingProps = {
    'space.x': {
        aliases: [
            'spX',
            'spaceX'
        ],
        transform: ({ props }) => {
            if (props.reverse) {
                return {
                    props: {
                        _children: {
                            _not: {
                                _lastChild: {
                                    ml: 'value'
                                }
                            }
                        }
                    },
                    value: spacing
                }
            } else {
                return {
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
            }
        }
    },
    'space.y': {
        aliases: [
            'spY',
            'spaceY'
        ],
        transform: ({ props }) => {
            if (props.reverse) {
                return {
                    props: {
                        _children: {
                            _not: {
                                _lastChild: {
                                    mt: 'value'
                                }
                            }
                        }
                    },
                    value: spacing
                }
            } else {
                return {
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
            }
        }
    },
}