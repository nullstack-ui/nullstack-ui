import { handleProps } from '.';

export const breakpointsWidths = {
    xs: '576px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}

const breakpoints = {
    _down: {
        xs: `@media screen and (max-width: ${breakpointsWidths.xs})`,
        sm: `@media screen and (max-width: ${breakpointsWidths.sm})`,
        md: `@media screen and (max-width: ${breakpointsWidths.md})`,
        lg: `@media screen and (max-width: ${breakpointsWidths.lg})`,
        xl: `@media screen and (max-width: ${breakpointsWidths.xl})`
    },
    _up: {
        xs: `@media screen and (min-width: ${breakpointsWidths.xs})`,
        sm: `@media screen and (min-width: ${breakpointsWidths.sm})`,
        md: `@media screen and (min-width: ${breakpointsWidths.md})`,
        lg: `@media screen and (min-width: ${breakpointsWidths.lg})`,
        xl: `@media screen and (min-width: ${breakpointsWidths.xl})`
    }
}

const breakpointsOrder = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl'
]

export const genericProps = ({
    context,
    props,
    theme
}) => {
    const handledProps = {};
    const sortedProps = [];

    for (let bp in props[context]) {
        const breakpointSelector = breakpoints[context][bp];
        const { asArray, elementProps } = handleProps({
            props: props[context][bp],
            theme
        });

        if (!handledProps[bp]) {
            handledProps[bp] = {
                asArray: [],
                breakpoint: bp,
                context,
                elementProps: {}
            }
        }

        handledProps[bp].asArray.push(...asArray);
        handledProps[bp].elementProps = elementProps;
        handledProps[bp].selector = breakpointSelector;
    }

    for (let o of breakpointsOrder) {
        if (handledProps[o]) {
            sortedProps.push(handledProps[o]);
        }
    }

    return sortedProps;
}

export const responsiveness = {
    '_down': {
        fn: ({ props, theme }) => genericProps({
            context: '_down',
            props,
            theme
        }),
        responsiveness: true
    },
    '_up': {
        fn: ({ props, theme }) => genericProps({
            context: '_up',
            props,
            theme
        }),
        responsiveness: true
    }
}