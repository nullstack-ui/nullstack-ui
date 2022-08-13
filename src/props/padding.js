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
        aliases: ['p'],
        fn: padding
    },
    'padding.bottom': {
        aliases: [
            'pb',
            'pB',
            'paddingB',
            'paddingBottom'
        ],
        fn: padding,
        key: 'padding-bottom'
    },
    'padding.left': {
        aliases: [
            'pl',
            'pL',
            'paddingL',
            'paddingLeft'
        ],
        fn: padding,
        key: 'padding-left'
    },
    'padding.right': {
        aliases: [
            'pr',
            'pR',
            'paddingR',
            'paddingRight'
        ],
        fn: padding,
        key: 'padding-right'
    },
    'padding.top': {
        aliases: [
            'pt',
            'pT',
            'paddingT',
            'paddingTop'
        ],
        fn: ({ value }) => padding({
            key: 'padding-top',
            value
        }),
    },
    'padding.x': {
        aliases: [
            'px',
            'pX',
            'paddingX'
        ],
        fn: ({ value }) => padding({
            key: [
                'padding-left',
                'padding-right'
            ],
            value
        }),
    },
    'padding.y': {
        aliases: [
            'py',
            'pY',
            'paddingY'
        ],
        fn: ({ value }) => padding({
            key: [
                'padding-bottom',
                'padding-top'
            ],
            value
        }),
    }
}