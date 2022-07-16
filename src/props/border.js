import { allProps, handleProps } from '.';

export const border = ({
    key = 'border',
    theme,
    value
}) => {
    if (value === true) {
        return 'solid 1px #000';
    } else if (typeof value === 'string') {
        return value;
    } else if (typeof value === 'object') {
        const handled = {};
        let props;

        for (let v in value) {
            handled[`${key}.${v}`] = value[v];
        }

        props = handleProps({ props: handled, theme });

        return props;
        // const handled = {};

        // handled[`${key}.color`] = value.color;
        // handled[`${key}.style`] = value.style;
        // handled[`${key}.width`] = value.width;

        // props = handleProps({
        //     props: handled,
        //     theme
        // });

        // if (key === 'border-bottom') {
        //     console.log('props', props);
        // }

        // return props;
    } else {
        return '';
    }
}

export const borderColor = ({
    key = 'border',
    value
}) => {
    return {
        key: `${key}-color`,
        value
    }
}

export const borderStyle = ({
    key = 'border',
    value
}) => {
    return {
        key: `${key}-style`,
        value
    }
}

export const borderWidth = ({
    key = 'border',
    value
}) => {
    return {
        key: `${key}-width`,
        value: isNaN(value) ? value : `${value}px`
    }
}