import { handleProps } from '.';

const breakpoints = {
    _down: {
        xs: '@media screen and (max-width: 576px)',
        sm: '@media screen and (max-width: 768px)',
        md: '@media screen and (max-width: 992px)',
        lg: '@media screen and (max-width: 1200px)',
        xl: '@media screen and (max-width: 1400px)'
    },
    _up: {
        xs: '@media screen and (min-width: 576px)',
        sm: '@media screen and (min-width: 768px)',
        md: '@media screen and (min-width: 992px)',
        lg: '@media screen and (min-width: 1200px)',
        xl: '@media screen and (min-width: 1400px)'
    }
}

const breakpointsOrder = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl'
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