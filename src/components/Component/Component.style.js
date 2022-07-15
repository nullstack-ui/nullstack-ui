import { css } from '@emotion/css';
import { handleProps } from '../../props';

export const ComponentStyle = ({ props, theme }) => {
    const { asString } = handleProps({
        props: {
            ...props,
            boxSizing: 'border-box'
        },
        theme
    });

    return css(asString);
}