import { getNestedProps } from '#utils/getNestedProps.js';

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
        fn: margin
    },
    'm': { aliasFor: 'margin' },

    'margin.bottom': {
        fn: margin,
        key: 'margin-bottom'
    },
    'mb': { aliasFor: 'margin.bottom' },
    'mB': { aliasFor: 'margin.bottom' },
    'marginB': { aliasFor: 'margin.bottom' },
    'marginBottom': { aliasFor: 'margin.bottom' },

    'margin.left': {
        fn: margin,
        key: 'margin-left'
    },
    'ml': { aliasFor: 'margin.left' },
    'mL': { aliasFor: 'margin.left' },
    'marginL': { aliasFor: 'margin.left' },
    'marginLeft': { aliasFor: 'margin.left' },

    'margin.right': {
        fn: margin,
        key: 'margin-right'
    },
    'mr': { aliasFor: 'margin.right' },
    'mR': { aliasFor: 'margin.right' },
    'marginR': { aliasFor: 'margin.right' },
    'marginRight': { aliasFor: 'margin.right' },

    'margin.top': {
        fn: ({ value }) => margin({
            key: 'margin-top',
            value
        }),
    },
    'mt': { aliasFor: 'margin.top' },
    'mT': { aliasFor: 'margin.top' },
    'marginT': { aliasFor: 'margin.top' },
    'marginTop': { aliasFor: 'margin.top' },

    'margin.x': {
        fn: ({ value }) => margin({
            key: [
                'margin-left',
                'margin-right'
            ],
            value
        }),
    },
    'mx': { aliasFor: 'margin.x' },
    'mX': { aliasFor: 'margin.x' },
    'marginX': { aliasFor: 'margin.x' },

    'margin.y': {
        fn: ({ value }) => margin({
            key: [
                'margin-bottom',
                'margin-top'
            ],
            value
        }),
    },
    'my': { aliasFor: 'margin.y' },
    'mY': { aliasFor: 'margin.y' },
    'marginY': { aliasFor: 'margin.y' }
}