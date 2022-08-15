import { getValue } from '../utils/getValue';

const filter = ({ childProps }) => {
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
        key: 'filter',
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
        fn: filter
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
}