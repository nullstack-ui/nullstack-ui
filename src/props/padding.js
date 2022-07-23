export const padding = ({
    key,
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}rem`
    };
}