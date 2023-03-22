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
            'mB',
            'marginB',
            'marginBottom'
        ],
        fn: margin,
        key: 'margin-bottom'
    },
    'margin.left': {
        aliases: [
            'ml',
            'mL',
            'marginL',
            'marginLeft'
        ],
        fn: margin,
        key: 'margin-left'
    },
    'margin.right': {
        fn: margin,
        key: 'margin-right'
    },
    'mr': { aliasFor: 'margin.right' },
    'mR': { aliasFor: 'margin.right' },
    'marginR': { aliasFor: 'margin.right' },
    'marginRight': { aliasFor: 'margin.right' },

    'margin.top': {
        aliases: [
            'mt',
            'mT',
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
            'mX',
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
            'mY',
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