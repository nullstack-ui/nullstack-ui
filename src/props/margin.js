export const margin = ({
    key = 'margin',
    value
}) => {
    return {
        key,
        value: isNaN(value) ? value : `${value}rem`
    }
}