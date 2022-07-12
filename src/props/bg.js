import { color } from './color';

export const bgColor = ({
    theme,
    value
}) => {
    if (typeof value === 'string') {
        return theme?.colors?.[value] || value;
    } else if (typeof value === 'object') {
        return color({
            ...value,
            value: theme?.colors?.[value.value] || value.value
        });
    } else if (Array.isArray(value)) {
        return color({
            ...value[1],
            value: theme?.colors?.[value[0]] || value[0]
        })
    }
}