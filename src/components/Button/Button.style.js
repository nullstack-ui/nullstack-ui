import { css } from '@emotion/css';
import { handleProps } from '../../props';

export const ButtonStyle = ({ props, theme }) => {
    const { asString, elementProps } = handleProps({
        props,
        theme
    });

    return css(asString);
}