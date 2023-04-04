import { getValue } from '../utils/getValue.js';

const filter = ({
    childProps,
    key = 'filter'
}) => {
    const valueAsArr = [];

    if (childProps) {
        for (let childProp of childProps) {
            const { fn, propName, value } = childProp;
            const propValue = typeof fn === 'function' ? fn(value) : value;

            if (propValue != null) {
                valueAsArr.push(`${propName}(${propValue})`);
            }
        }
    }

    return {
        key,
        value: valueAsArr.join(' ')
    }
}

const blur = value => getValue({
    unit: 'px',
    value
});

const hueRotate = value => getValue({
    unit: 'deg',
    value
});

export const filterProps = {
    'blur': {
        fn: blur,
        key: 'blur',
        parent: 'filter'
    },
    'brightness': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'brightness',
        parent: 'filter'
    },
    'contrast': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'contrast',
        parent: 'filter'
    },
    'grayScale': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'grayscale',
        parent: 'filter'
    },
    'grayscale': { aliasFor: 'grayScale' },

    'hueRotate': {
        fn: hueRotate,
        key: 'hue-rotate',
        parent: 'filter'
    },
    'hue': { aliasFor: 'hueRotate' },

    'filter': {
        fn: filter,
        key: 'filter'
    },
    'invert': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'invert',
        parent: 'filter'
    },
    'saturate': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'saturate',
        parent: 'filter'
    },
    'sepia': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'sepia',
        parent: 'filter'
    },

    // Bg filters
    'bgBlur': {
        fn: blur,
        key: 'blur',
        parent: 'bgFilter'
    },
    'bgBrightness': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'brightness',
        parent: 'bgFilter'
    },
    'bgContrast': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'contrast',
        parent: 'bgFilter'
    },
    'bgFilter': {
        fn: filter,
        key: 'backdrop-filter'
    },
    'bgGrayScale': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'grayscale',
        parent: 'bgFilter'
    },
    'bgGrayscale': { aliasFor: 'bgGrayScale' },

    'bgHueRotate': {
        fn: hueRotate,
        key: 'hue-rotate',
        parent: 'bgFilter'
    },
    'bgHue': { aliasFor: 'bgHueRotate' },

    'bgInvert': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'invert',
        parent: 'bgFilter'
    },
    'bgSaturate': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'saturate',
        parent: 'bgFilter'
    },
    'bgSepia': {
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'sepia',
        parent: 'bgFilter'
    },
}