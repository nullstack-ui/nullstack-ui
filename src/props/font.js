import { handleProps } from '.';
import { getSize } from '../utils/getSize';

const font = ({ context, props, theme, value }) => {
    let fontProps = {};
    let handledProps;

    if (typeof value === 'string') {
        return fontFamily({
            context,
            props,
            theme,
            value
        });
    } else if (typeof value === 'object') {
        for (let key in value) {
            fontProps[`font.${key}`] = value[key];
        }

        handledProps = handleProps({
            props: fontProps,
            theme
        });

        return Object.keys(handledProps.elementProps).map(propName => ({
            key: propName,
            value: handledProps.elementProps[propName]
        }));
    }
}

const fontFamily = ({ context, props, theme, value }) => {
    return {
        key: 'font-family',
        value: getFont({ context, props, theme, value })
    }
}

const fontSize = ({ context, props, theme, value }) => {
    const size = getSize({
        baseSize: '1rem',
        context,
        props: {
            ...props,
            size: value
        },
        theme,
        value
    });

    return {
        key: 'font-size',
        value: size
    }
}

// Methods
const getFont = ({ context, props, theme, value }) => {
    const { globals } = theme || {};
    const { fonts } = globals || {};
    const defaultFont = typeof fonts?.DEFAULT === 'function' ? fonts.DEFAULT({ context, props, theme, value }) : fonts.DEFAULT;
    const font = typeof fonts?.[value] === 'function' ? fonts[value]({ context, props, theme, value }) : fonts[value];
    const fallbackFonts = fonts?.fallback || [];

    return [font, ...fallbackFonts] || [defaultFont, ...fallbackFonts];
}

export const fontProps = {
    'bold': {
        transform: {
            props: {
                fontWeight: 700
            }
        }
    },
    'font': {
        key: 'font',
        fn: font
    },
    'font.family': {
        aliases: ['fontFamily'],
        key: 'font-family',
        fn: fontFamily
    },
    'font.size': {
        aliases: [
            'fontSize',
            'size'
        ],
        fn: fontSize,
        key: 'font-size'
    },
    'font.style': {
        aliases: ['fontStyle'],
        key: 'font-style'
    },
    'font.weight': {
        aliases: [
            'fontWeight',
            'weight'
        ],
        key: 'font-weight'
    },
    'italic': {
        transform: {
            props: {
                fontStyle: 'italic'
            }
        }
    },
    'light': {
        transform: {
            props: {
                fontWeight: 300
            }
        }
    },
    'medium': {
        transform: {
            props: {
                fontWeight: 500
            }
        }
    },
    'normal': {
        transform: {
            props: {
                fontStyle: 'normal'
            }
        }
    },
    'oblique': {
        transform: {
            props: {
                fontStyle: 'oblique'
            }
        }
    },
    'regular': {
        transform: {
            props: {
                fontWeight: 400
            }
        }
    },
    'semibold': {
        aliases: ['semiBold'],
        transform: {
            props: {
                fontWeight: 600
            }
        }
    },
}