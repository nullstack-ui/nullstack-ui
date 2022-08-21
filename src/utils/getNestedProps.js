import { handleProps } from '#props/index';

export const getNestedProps = ({
    childProps,
    propName,
    theme,
    ...rest
}) => {
    const handled = {};
    let handledProps;

    for (let prop in childProps) {
        handled[`${propName}.${prop}`] = childProps[prop];
    }

    handledProps = handleProps({
        props: handled,
        theme,
        ...rest
    });

    return Object.keys(handledProps.elementProps).map(propName => ({
        key: propName,
        value: handledProps.elementProps[propName]
    }));
}