import { getNestedProps } from '#utils/getNestedProps';

export const padding = ({
    key = 'padding',
    theme,
    value
}) => {
    if (typeof value === 'object') {
        return getNestedProps({
            childProps: value,
            propName: 'padding',
            theme
        });
    } else {
        return {
            key,
            value: isNaN(value) ? value : `${value}rem`
        }
    }
}

export const paddingProps = {
    'padding': {
        fn: padding
    },
    'p': { aliasFor: 'padding' },

    'padding.bottom': {
        fn: padding,
        key: 'padding-bottom'
    },
    'pb': { aliasFor: 'padding.bottom' },
    'pB': { aliasFor: 'padding.bottom' },
    'paddingB': { aliasFor: 'padding.bottom' },
    'paddingBottom': { aliasFor: 'padding.bottom' },

    'padding.left': {
        fn: padding,
        key: 'padding-left'
    },
    'pl': { aliasFor: 'padding.left' },
    'pL': { aliasFor: 'padding.left' },
    'paddingL': { aliasFor: 'padding.left' },
    'paddingLeft': { aliasFor: 'padding.left' },

    'padding.right': {
        fn: padding,
        key: 'padding-right'
    },
    'pr': { aliasFor: 'padding.right' },
    'pR': { aliasFor: 'padding.right' },
    'paddingR': { aliasFor: 'padding.right' },
    'paddingRight': { aliasFor: 'padding.right' },

    'padding.top': {
        fn: ({ value }) => padding({
            key: 'padding-top',
            value
        }),
    },
    'pt': { aliasFor: 'padding.top' },
    'pT': { aliasFor: 'padding.top' },
    'paddingT': { aliasFor: 'padding.top' },
    'paddingTop': { aliasFor: 'padding.top' },

    'padding.x': {
        fn: ({ value }) => padding({
            key: [
                'padding-left',
                'padding-right'
            ],
            value
        }),
    },
    'px': { aliasFor: 'padding.x' },
    'pX': { aliasFor: 'padding.x' },
    'paddingX': { aliasFor: 'padding.x' },

    'padding.y': {
        fn: ({ value }) => padding({
            key: [
                'padding-bottom',
                'padding-top'
            ],
            value
        }),
    },
    'py': { aliasFor: 'padding.y' },
    'pY': { aliasFor: 'padding.y' },
    'paddingY': { aliasFor: 'padding.y' },
}