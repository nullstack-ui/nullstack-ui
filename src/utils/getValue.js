export const getValue = ({ unit, value }) => {
    if (unit) {
        return isNaN(value) ? value : `${value}${unit}`
    } else {
        return value;
    }
}