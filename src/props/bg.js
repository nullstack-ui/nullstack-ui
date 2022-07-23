import { getColor } from './color';

export const bgColor = ({
    key,
    theme,
    value
}) => {
    return {
        key,
        value: getColor({
            theme,
            value
        })
    };
}