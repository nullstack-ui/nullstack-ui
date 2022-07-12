import { handleProps } from '../../props';

export const ButtonStyle = ({ props, theme }) => {
    const handledProps = handleProps({
        props,
        theme
    });

    return handledProps;
}