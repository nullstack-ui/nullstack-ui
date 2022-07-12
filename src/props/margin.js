export const margin = ({ value }) => {
    return isNaN(value) ? value : `${value}rem`
}