import { css } from '@emotion/css';
import { handleProps } from '../../props';

export const ComponentStyle = ({ name, props, theme }) => {
    const themeProps = theme?.components?.[name] || {};
    const { asString } = handleProps({
        props: {
            ...props,
            ...themeProps,
            boxSizing: 'border-box'
        },
        theme
    });

    return css(asString);
}