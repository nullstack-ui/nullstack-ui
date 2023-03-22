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
        if (Array.isArray(propName)) {
            for (let name of propName) {
                handled[`${name}.${prop}`] = childProps[prop];
            }
        } else {
            handled[`${propName}.${prop}`] = childProps[prop];
        }
        
    }

    handledProps = handleProps({
        props: handled,
        theme,
        ...rest
    });

    return Object.values(handledProps).map(prop => ({
        key: prop.style[0].key,
        value: prop.style[0].value
    }))
}