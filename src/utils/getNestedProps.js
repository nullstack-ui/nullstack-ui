import { handleProps } from '#props/index.js';

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

    return handleProps({
        ...rest,
        props: handled,
        theme,
    });
}