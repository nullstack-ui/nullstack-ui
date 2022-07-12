import { css } from '@emotion/css';
import { bgColor } from './bg';

// Props
import { margin } from './margin';

// All props
export const allProps = {
    'bgColor': {
        key: 'background-color',
        value: bgColor
    },
    'marginLeft': {
        key: 'margin-left',
        value: margin
    },
    'marginL': {
        key: 'margin-left',
        value: margin
    },
    'ml': {
        key: 'margin-left',
        value: margin
    }
}

// Methods
export const handleProps = ({
    props,
    theme
}) => {
    const cssAsArray = [];

    for (let prop in props) {
        const { key, value } = allProps[prop] || {};
        let handledValue;

        if (key) {
            handledValue = typeof value === 'function' ? value({
                theme,
                value: props[prop]
            }) : props[prop];

            cssAsArray.push(`${key}: ${handledValue}`);
        }
    }

    return css`${cssAsArray.join(';')}`;
}