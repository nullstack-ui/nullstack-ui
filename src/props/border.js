export const border = ({ value }) => {
    if (value === true) {
        return 'solid 1px #000';
    } else if (typeof value === 'string') {
        return value;
    } else {
        return '';
    }
}