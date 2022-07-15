import { css } from '@emotion/css';
import { handleProps } from '../../props';

export const ComponentStyle = ({ props, theme }) => {
    const { asString } = handleProps({
        props,
        theme
    });

    return css(asString);
}