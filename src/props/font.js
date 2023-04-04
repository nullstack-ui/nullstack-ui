import { handleProps } from './index.js';
import { getSize } from '../utils/getSize.js';

const font = params => {
    const { context, props, theme, value } = params;
    let fontProps = {};

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

        return handleProps({
            ...params,
            props: fontProps,
        });
    }
}

const fontFamily = ({ context, props, theme, value }) => {
    return {
        key: 'font-family',
        value: getFont({ context, props, theme, value })
    }
}

const fontSize = ({ context, props, rel, theme, value }) => {
    const size = getSize({
        baseSize: rel ? '1em' : '1rem',
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

const fontSmoothing = ({ value }) => {
    let mozSmoothing;
    let webkitSmoothing;

    if (typeof value === 'string') {
        mozSmoothing = value;
        webkitSmoothing = value;
    } else if (typeof value === 'object') {
        mozSmoothing = value.moz || 'auto';
        webkitSmoothing = value.webkit || 'auto';
    }

    return [
        {
            key: '-moz-osx-font-smoothing',
            value: mozSmoothing
        },
        {
            key: '-webkit-font-smoothing',
            value: webkitSmoothing
        }
    ]
}

// Methods
const getFont = ({ context, props, theme = {}, value }) => {
    // const { globals } = theme || {};
    const fonts = theme.fonts || theme.globals?.fonts || {};
    const defaultFont = typeof fonts?.DEFAULT === 'function' ? fonts.DEFAULT({ context, props, theme, value }) : fonts.DEFAULT;
    const font = typeof fonts?.[value] === 'function' ? fonts[value]({ context, props, theme, value }) : fonts[value];
    const fallbackFonts = fonts?.fallback || [];

    return [font, ...fallbackFonts] || [defaultFont, ...fallbackFonts];
}

export const fontProps = {
    'antialiased': {
        fn: () => ([
            {
                key: '-moz-osx-font-smoothing',
                value: 'grayscale'
            },
            {
                key: '-webkit-font-smoothing',
                value: 'antialiased'
            },
        ]),
    },
    'antiAliased': { aliasFor: 'antialiased' },

    'bold': {
        fn: () => ({
            key: 'font-weight',
            value: 700
        })
    },
    'font': {
        key: 'font',
        fn: font
    },
    'font.family': {
        key: 'font-family',
        fn: fontFamily
    },
    'fontFamily': { aliasFor: 'font.family' },

    'font.relSize': {
        fn: params => fontSize({
            ...params,
            rel: true
        }),
        key: 'font-size'
    },
    'fontRelSize': { aliasFor: 'font.relSize' },
    'relSize': { aliasFor: 'font.relSize' },

    'font.size': {
        fn: fontSize,
        key: 'font-size'
    },
    'fontSize': { aliasFor: 'font.size' },
    'size': { aliasFor: 'font.size' },

    'font.smoothing': {
        fn: fontSmoothing,
        key: 'font-smoothing'
    },
    'fontSmoothing': { aliasFor: 'font.smoothing' },

    'font.style': {
        key: 'font-style'
    },
    'fontStyle': { aliasFor: 'font.style' },

    'font.weight': {
        key: 'font-weight'
    },
    'fontWeight': { aliasFor: 'font.weight' },
    'weight': { aliasFor: 'font.weight' },

    'italic': {
        fn: () => ({
            key: 'font-style',
            value: 'italic'
        })
    },
    'light': {
        fn: () => ({
            key: 'font-weight',
            value: 300
        })
    },
    'medium': {
        fn: () => ({
            key: 'font-weight',
            value: 500
        })
    },
    'normal': {
        fn: () => ({
            key: 'font-style',
            value: 'normal'
        })
    },
    'oblique': {
        fn: () => ({
            key: 'font-style',
            value: 'oblique'
        })
    },
    'regular': {
        fn: () => ({
            key: 'font-weight',
            value: 400
        })
    },
    'semibold': {
        fn: () => ({
            key: 'font-weight',
            value: 600
        })
    },
    'semiBold': { aliasFor: 'semibold' },

    'subpixel': {
        fn: params => fontSmoothing({ ...params, value: 'auto' })
    },
    'subPixel': { aliasFor: 'subpixel' },
}