import { css } from '@emotion/css';
import { handleProps } from '../../props';

export const ComponentStyle = ({ context, darkMode, name, props, theme }) => {
    const componentProps = { ...props };
    const themeProps = theme?.components?.[name] || {};

    for (let key in themeProps) {
        const prop = componentProps[key];
        const themeProp = themeProps[key];

        if (!prop) {
            componentProps[key] = themeProp;
        } else {
            if (Array.isArray(themeProp)) {
                componentProps[key] = [
                    ...prop,
                    ...themeProp
                ];
            } else if (typeof themeProp === 'object') {
                componentProps[key] = {
                    ...prop,
                    ...themeProp
                };
            }
        }
    }

    const { asString } = handleProps({
        context,
        darkMode,
        props: {
            ...componentProps,
            boxSizing: 'border-box'
        },
        theme
    });

    return css(asString);
}