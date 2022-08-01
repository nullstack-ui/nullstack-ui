import { getNestedProps } from '#utils/getNestedProps';

export const margin = ({
    key = 'margin',
    theme,
    value
}) => {
    if (typeof value === 'object') {
        return getNestedProps({
            childProps: value,
            propName: 'margin',
            theme
        });
    } else {
        return {
            key,
            value: isNaN(value) ? value : `${value}rem`
        }
    }
}

export const marginProps = {
    'margin': {
        aliases: ['m'],
        fn: margin
    },
    'margin.bottom': {
        aliases: [
            'mb',
            'marginB',
            'marginBottom'
        ],
        fn: margin,
        key: 'margin-bottom'
    },
    'margin.left': {
        aliases: [
            'ml',
            'marginL',
            'marginLeft'
        ],
        fn: margin,
        key: 'margin-left'
    },
    'margin.right': {
        aliases: [
            'mr',
            'marginR',
            'marginRight'
        ],
        fn: margin,
        key: 'margin-right'
    },
    'margin.top': {
        aliases: [
            'mt',
            'marginT',
            'marginTop'
        ],
        fn: ({ value }) => margin({
            key: 'margin-top',
            value
        }),
    },
    'margin.x': {
        aliases: [
            'mx',
            'marginX'
        ],
        fn: ({ value }) => margin({
            key: [
                'margin-left',
                'margin-right'
            ],
            value
        }),
    },
    'margin.y': {
        aliases: [
            'my',
            'marginY'
        ],
        fn: ({ value }) => margin({
            key: [
                'margin-bottom',
                'margin-top'
            ],
            value
        }),
    }
}