import { handleProps } from '.';

export const flex = ({ theme, value }) => {
    if (value === true) {
        return {
            key: 'display',
            value: 'flex'
        }
    } else if (typeof value === 'object') {
        const handled = {};
        let handledProps;

        for (let key in value) {
            handled[`flex.${key}`] = value[key];
        }

        if (value.value) {
            handled.flex = value.value;
        }

        handledProps = handleProps({ props: handled, theme });

        return Object.keys(handledProps.elementProps).map(propName => ({
            key: propName,
            value: handledProps.elementProps[propName]
        }));
    }
}

export const flexAlign = ({ value }) => {
    return [
        {
            key: 'align-items',
            value
        },
        {
            key: 'justify-content',
            value
        }
    ]
}

export const flexAlignContent = ({ value }) => {
    return {
        key: 'align-content',
        value
    }
}

export const flexAlignH = ({ props, value }) => {
    const { flex } = props;
    const direction = flex?.direction;

    if (direction === 'column') {
        return {
            key: 'align-items',
            value
        }
    } else {
        return {
            key: 'justify-content',
            value
        }
    }
}

export const flexAlignV = ({ props, value }) => {
    const { flex } = props;
    const direction = flex?.direction;

    if (direction === 'column') {
        return {
            key: 'justify-content',
            value
        }
    } else {
        return {
            key: 'align-items',
            value
        }
    }
}

export const flexDirection = ({ value }) => {
    return {
        key: 'flex-direction',
        value
    }
}