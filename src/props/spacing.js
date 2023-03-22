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
    'spX': { aliasFor: 'space.x' },
    'spaceX': { aliasFor: 'space.x' },

    'space.y': {
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
    'spY': { aliasFor: 'space.y' },
    'spaceY': { aliasFor: 'space.y' },
}