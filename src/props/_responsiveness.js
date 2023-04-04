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

const getBreakpointsOrder = (theme = {}) => {
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

export const genericProps = params => {
    const { props, responsiveContext, theme } = params;
    const handledProps = {};
    const sortedProps = {};

    for (let bp in props[responsiveContext]) {
        const breakpointSelector = breakpoints(theme)[responsiveContext][bp];
        const handledBpProps = handleProps({
            ...params,
            props: props[responsiveContext][bp],
        });

        for (let prop in handledBpProps) {
            if (typeof handledBpProps[prop] === 'object') {
                handledBpProps[prop] = {
                    ...handledBpProps[prop],
                    selector: breakpointSelector
                };
            }
        }

        handledProps[bp] = {
            ...handledBpProps,
            state: true
        }
    }

    for (let i = 0; i < Object.keys(handledProps).length; i++) {
        const bp = Object.keys(handledProps)[i];

        sortedProps[`${i}_${bp}`] = handledProps[bp];
    }

    return sortedProps;
}

export const responsiveness = {
    '_down': {
        fn: params => genericProps({
            ...params,
            responsiveContext: '_down',
        }),
        responsiveness: true
    },
    '_up': {
        fn: params => genericProps({
            ...params,
            responsiveContext: '_up',
        }),
        responsiveness: true
    }
}