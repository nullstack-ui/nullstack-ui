export const height = ({ value }) => {
    return {
        key: 'height',
        value: isNaN(value) ? value : `${value}px`
    }
}

export const size = ({ value }) => {
    const handledValue = isNaN(value) ? value : `${value}px`;

    return [
        {
            key: 'height',
            value: handledValue
        },
        {
            key: 'width',
            value: handledValue
        }
    ]
}

export const width = ({ value }) => {
    return {
        key: 'width',
        value: isNaN(value) ? value : `${value}px`
    }
}