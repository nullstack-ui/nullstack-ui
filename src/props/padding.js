export const padding = ({ value }) => {
    return isNaN(value) ? value : `${value}rem`
}