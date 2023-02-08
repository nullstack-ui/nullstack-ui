import { getValue } from '../utils/getValue';

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
        aliases: ['grayscale'],
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'grayscale',
        parent: 'filter'
    },
    'hueRotate': {
        aliases: ['hue'],
        fn: hueRotate,
        key: 'hue-rotate',
        parent: 'filter'
    },
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
        aliases: ['bgGrayscale'],
        fn: value => getValue({
            unit: '%',
            value
        }),
        key: 'grayscale',
        parent: 'bgFilter'
    },
    'bgHueRotate': {
        aliases: ['hue'],
        fn: hueRotate,
        key: 'hue-rotate',
        parent: 'bgFilter'
    },
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