import { handleProps } from '.';

export const transition = ({ theme, value }) => {
    let handledProps;

    if (value === true) {
        return {
            key: 'transition',
            value: 'all .2s ease-in-out'
        }
    } else if (Array.isArray(value)) {
        handledProps = handleProps({
            props: {
                'transition': true,
                'transition.duration': '.2s',
                'transition.property': value,
                'transition.timingFunction': 'ease-in-out'
            },
            theme
        });

        return Object.values(handledProps).map(prop => ({
            key: prop.style[0].key,
            value: prop.style[0].value
        }))
    } else if (typeof value === 'object') {
        const handled = {};

        for (let key in value) {
            handled[`transition.${key}`] = value[key];
        }

        handledProps = handleProps({ props: handled, theme });

        return Object.values(handledProps).map(prop => ({
            key: prop.style[0].key,
            value: prop.style[0].value
        }))
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