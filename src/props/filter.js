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
        key: 'brightness',
        parent: 'filter'
    },
    'contrast': {
        key: 'contrast',
        parent: 'filter'
    },
    'grayScale': {
        aliases: ['grayscale'],
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
        key: 'invert',
        parent: 'filter'
    },
    'saturate': {
        key: 'saturate',
        parent: 'filter'
    },
    'sepia': {
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
        key: 'brightness',
        parent: 'bgFilter'
    },
    'bgContrast': {
        key: 'contrast',
        parent: 'bgFilter'
    },
    'bgFilter': {
        fn: filter,
        key: 'backdrop-filter'
    },
    'bgGrayScale': {
        aliases: ['grayscale'],
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
        key: 'invert',
        parent: 'bgFilter'
    },
    'bgSaturate': {
        key: 'saturate',
        parent: 'bgFilter'
    },
    'bgSepia': {
        key: 'sepia',
        parent: 'bgFilter'
    },
}