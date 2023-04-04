import { handleProps } from './index.js';

export const transition = params => {
    const { theme, value } = params;
    let handledProps;

    if (value === true) {
        return {
            key: 'transition',
            value: 'all .2s ease-in-out'
        }
    } else if (Array.isArray(value)) {
        return handleProps({
            ...params,
            props: {
                'transition': true,
                'transition.duration': '.2s',
                'transition.property': value,
                'transition.timingFunction': 'ease-in-out'
            },
        });
    } else if (typeof value === 'object') {
        const handled = {};

        for (let key in value) {
            handled[`transition.${key}`] = value[key];
        }

        return handleProps({ ...params, props: handled });
    }
}

export const transitionDelay = ({ value }) => {
    return {
        key: 'transition-delay',
        value
    }
}

export const transitionDuration = ({ value }) => {
    return {
        key: 'transition-duration',
        value
    }
}

export const transitionProperty = ({ value }) => {
    return {
        key: 'transition-property',
        value: Array.isArray(value) ? value.join(', ') : value
    }
}

export const transitionTimingFunction = ({ value }) => {
    return {
        key: 'transition-timing-function',
        value
    }
}