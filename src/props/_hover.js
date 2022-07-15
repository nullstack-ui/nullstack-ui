export const hover = ({ value }) => {
    return isNaN(value) ? value : `${value}rem`
}