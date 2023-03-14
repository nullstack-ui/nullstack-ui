import { handleProps } from '.';

import { getValue } from '../utils/getValue';

export const breakpointsWidths = {
    xs: '576px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}

const breakpoints = (theme = {}) => {
    const { breakpoints = {} } = theme;
    const widths = {
        ...breakpointsWidths,
        ...breakpoints
    };

    const allBreakpoints = {
        _down: {},
        _up: {}
    };

    for (let width in widths) {
        const widthPx = getValue({ unit: 'px', value: widths[width] });

        allBreakpoints._down[width] = `@media screen and (max-width: ${widthPx})`;
        allBreakpoints._up[width] = `@media screen and (min-width: ${widthPx})`;
    }
    
    return allBreakpoints;
}

const breakpointsOrder = (theme = {}) => {
    const { breakpoints = {} } = theme;
    const widths = {
        ...breakpointsWidths,
        ...breakpoints
    };
    const widthArray = Object.keys(widths).map(breakpoint => ({
        breakpoint,
        width: widths[breakpoint]
    }))
    const sortedArray = widthArray.sort((a, b) => parseFloat(a.width) - parseFloat(b.width));

    return sortedArray.map(({ breakpoint }) => breakpoint);
}

export const genericProps = ({
    context,
    props,
    theme
}) => {
    const handledProps = {};
    const sortedProps = [];

    for (let bp in props[context]) {
        const breakpointSelector = breakpoints(theme)[context][bp];
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

    if (theme?.useBreakpointPropsOrder) {
        for (let bp in handledProps) {
            sortedProps.push(handledProps[bp]);
        }
    } else {
        for (let o of breakpointsOrder(theme)) {
            if (handledProps[o]) {
                sortedProps.push(handledProps[o]);
            }
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