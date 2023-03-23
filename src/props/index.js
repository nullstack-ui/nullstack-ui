import { bgProps } from './bg';

// Props
import { borderProps } from './border';
import { colorProps } from './color';
import { dimensionProps } from './dimension';
import { filterProps } from './filter';
import { flexProps } from './flex';
import { fontProps } from './font';
import { gridProps } from './grid';
import { marginProps } from './margin';
import { otherProps } from './other';
import { outlineProps } from './outline';
import { overflowProps } from './overflow';
import { paddingProps } from './padding';
import { positionProps } from './position';
import { pseudoClasses } from './pseudoClasses';
import { pseudoElements } from './pseudoElements';
import { ringProps } from './ring';
import { shadowProps } from './shadow';
import { spacingProps } from './spacing';
import { textProps } from './text';
import { transformProps } from './transform';
import { transition, transitionDelay, transitionDuration, transitionProperty, transitionTimingFunction } from './transition';
import { visibilityProps } from './visibility';
import { groupProps } from './_group';
import { responsiveness } from './_responsiveness';

// All props
export const allProps = {
    'all': {
        key: 'all'
    },
    'appearance': {
        key: 'appearance'
    },
    ...bgProps,
    'block': {
        fn: () => ({
            key: 'display',
            value: 'block'
        })
    },
    ...borderProps,
    'boxSizing': {
        key: 'box-sizing'
    },
    ...colorProps,
    'content': {
        key: 'content'
    },
    'cursor': {
        key: 'cursor'
    },
    ...dimensionProps,
    'display': {
        key: 'display'
    },
    'd': { aliasFor: 'display' },

    ...filterProps,
    ...flexProps,
    ...fontProps,
    ...gridProps,
    ...groupProps,
    ...marginProps,
    'opacity': {
        key: 'opacity'
    },
    'op': { aliasFor: 'opacity' },
    ...otherProps,
    ...outlineProps,
    ...overflowProps,
    ...paddingProps,
    ...positionProps,
    'reset': {
        fn: () => ([
            {
                key: 'appearance',
                value: 'none'
            },
            {
                key: 'background',
                value: 'none'
            },
            {
                key: 'border',
                value: 'none'
            }])
    },
    'resize': {
        key: 'resize'
    },
    ...ringProps,
    ...shadowProps,
    // // ...sizeProps,
    ...spacingProps,
    ...textProps,
    ...transformProps,
    'transition': {
        fn: transition
    },
    'transition.delay': {
        fn: transitionDelay
    },
    'transition.duration': {
        fn: transitionDuration
    },
    'transition.property': {
        fn: transitionProperty
    },
    'transition.timingFunciton': {
        fn: transitionTimingFunction
    },
    ...visibilityProps
}

export const allStates = {
    '_checked': {
        key: ':checked'
    },
    '_disabled': {
        key: '[disabled]'
    },
    '_empty': {
        key: ':empty'
    },
    '_focus': {
        key: ':focus'
    },
    '_hover': {
        // props: , 
        key: ':hover',
    },
    '_link': {
        key: ':link'
    },
    '_optional': {
        key: ':optional'
    },
    '_readOnly': {
        key: ':read-only'
    },
    '_visited': {
        key: ':visited'
    },
    '_active': {
        key: ':active'
    },

    // Pseudo classes
    // Move this somewhere else later
    ...pseudoClasses,

    // Pseudo elements
    // Move this somewhere else later
    ...pseudoElements,
    ...responsiveness
}

let cachedProps;

// Methods
export const getCustomProps = ({
    props,
    theme
}) => {
    let allProps = [];
    let customProps = {};

    if (theme?.customProps) {
        allProps.push(...theme?.customProps)
    }

    if (props?.customProps) {
        if (typeof props.customProps === 'function') {
            allProps.push(...props?.customProps({ props }))
        } else {
            allProps.push(...props?.customProps)
        }
    }

    if (!allProps.length) { return {}; }

    for (let customProp of allProps) {
        const componentProp = props[customProp.name];

        if (componentProp != null) {
            if (customProp.values && Array.isArray(customProp.values)) {
                const index = customProp.values.map(value => value.name).indexOf(componentProp);

                if (index > -1) {
                    customProps = {
                        ...customProps,
                        ...customProp.values[index].props
                    }
                }
            } else {
                customProps = {
                    ...customProps,
                    ...customProp.props
                }
            }
        }
    }

    return customProps;
}

export const handleProp = ({
    addToCache,
    bypass,
    cache,
    context,
    depth,
    prop,
    props,
    theme
}) => {
    if (!allProps[prop]) {
        return {
            cssProps: [],
            initialValue: props[prop],
            prop
        };
    }

    const alias = allProps[prop]?.aliasFor;
    const initialValue = typeof props[prop] === 'function' ? props[prop]({
        props,
        theme
    }) : props[prop];
    const {
        fn,
        key,
        transform,
        value: unhandledValue
    } = allProps[alias || prop]
    const propName = alias || prop;
    let cssProps = [];
    let handledProps = {};

    if (cache?.[propName]?.[initialValue]) {
        // return cache[propName][initialValue];
    }

    if (transform) {
        const { props: transformProps, value: transformValue } = typeof transform === 'function' ? transform({
            cache,
            context,
            depth,
            props,
            theme,
            value: props[propName]
        }) : transform;
        const stringifiedProps = transformValue ? JSON.stringify(transformProps).replace(/value/g, transformValue({
            cache,
            context,
            depth,
            props,
            theme,
            value: props[propName]
        })) : '';
        const parsedProps = transformValue ? JSON.parse(stringifiedProps) : transformProps;

        if (typeof parsedProps === 'object') {
            for (let parsedProp of Object.keys(parsedProps)) {
                const parsedPropName = allProps[parsedProp]?.aliasFor || parsedProp;

                if (allProps[parsedProp]) {
                    const {
                        cssProps: childCSSProps,
                        initialValue: childInitialValue,
                    } = handleProp({
                        bypass,
                        cache,
                        context,
                        depth,
                        prop: parsedPropName,
                        props: parsedProps,
                        theme
                    });

                    handledProps[parsedPropName] = {
                        cssProps: childCSSProps,
                        initialValue: childInitialValue,
                        prop: parsedPropName
                    }
                }

                if (allStates[parsedPropName]) {
                    const handledState = handleState({
                        addToCache,
                        cache,
                        context,
                        depth,
                        prop: parsedPropName,
                        props: parsedProps,
                        theme
                    })

                    handledProps[parsedProp] = handledState;
                }
            }
        }
    } else if (fn && typeof fn === 'function') {
        const fnOutput = fn({
            cache,
            context,
            depth,
            key,
            props,
            theme,
            value: initialValue
        });

        if (Array.isArray(fnOutput)) {
            handledProps[propName] = {
                cssProps: fnOutput,
                initialValue,
                prop: propName
            }
        } else if (typeof fnOutput === 'object') {
            if (fnOutput.key != null && fnOutput.value != null) {
                if (Array.isArray(fnOutput.key)) {
                    cssProps = fnOutput.key.map((key, i) => ({
                        key,
                        value: Array.isArray(fnOutput.value) ? fnOutput.value[i] : fnOutput.value
                    }));

                    handledProps[propName] = {
                        cssProps,
                        initialValue,
                        prop: propName
                    }
                } else {
                    cssProps = [{
                        key: fnOutput.key,
                        value: fnOutput.value
                    }];

                    handledProps[propName] = {
                        cssProps,
                        initialValue,
                        prop: propName
                    }
                }
            } else {
                handledProps = {
                    ...handledProps,
                    ...fnOutput
                }
            }
        }
    } else if (unhandledValue != null) {
        const unhandledOutput = typeof unhandledValue === 'function' ? unhandledValue({ context, props, theme }) : unhandledValue;

        if (typeof unhandledOutput === 'object' && unhandledOutput.key != null && unhandledOutput.value != null) {
            if (Array.isArray(unhandledOutput.key)) {
                cssProps = unhandledOutput.key.map((key, i) => ({
                    key,
                    value: Array.isArray(unhandledOutput.value) ? unhandledOutput.value[i] : unhandledOutput.value
                }));
            } else {
                cssProps = [{
                    key: unhandledOutput.key,
                    value: unhandledOutput.value
                }];
            }
        }

        handledProps[propName] = {
            cssProps,
            initialValue,
            prop: propName
        }
    } else {
        cssProps = [{
            key,
            value: props[propName]
        }];

        handledProps[propName] = {
            cssProps,
            initialValue,
            prop: propName
        }
    }

    if (!cache?.[propName]?.[initialValue]) {
        // addToCache?.({
        //     cachedProps: handledProps,
        //     initialValue,
        //     propName,
        // })
    }

    return handledProps
}

export const handleState = ({
    addToCache,
    cache,
    context,
    customSelector,
    depth,
    parentSelector,
    prop,
    props,
    selectorFn,
    theme
}) => {
    const {
        fn,
        key,
    } = allStates[prop];
    const customSelectorFn = selectorFn || allStates[prop].selectorFn;

    let stateProps = typeof props[prop] === 'function' ? props[prop]({ props }) : props[prop];
    let handledState = {};
    let totalProps = 0;
    let selector = customSelector || key;

    if (fn) {
        const stateFnOutput = fn({
            addToCache,
            cache,
            context,
            depth,
            parentSelector,
            prop,
            props,
            theme
        });

        handledState = {
            ...handledState,
            ...stateFnOutput
        }
    }

    for (let stateProp in stateProps) {
        let propType = 'unknown'

        if (allProps[stateProp]) {
            propType = 'prop';
            totalProps++;
        } else if (allStates[stateProp]) {
            propType = 'state';
        }

        if (propType === 'prop') {
            const handledProp = handleProp({
                addToCache,
                cache,
                context,
                depth,
                prop: stateProp,
                props: stateProps,
                theme,
            })

            if (Object.keys(handledProp)[0] === stateProp) {
                handledProp[stateProp].selector = selector;

                handledState = {
                    ...handledState,
                    ...handledProp,
                }
            } else {
                handledProp.selector = selector;

                handledState[stateProp] = {
                    ...handledProp,
                }
            }
        }

        if (propType === 'state') {
            const {
                fn: childFn,
                key: childSelector
            } = allStates[stateProp];
            let parentSelector = null;

            if (customSelectorFn && typeof customSelectorFn === 'function') {
                parentSelector = selector ? `${selector}${customSelectorFn(childSelector)}` : customSelectorFn(childSelector)
            }

            if (childFn) {
                const fnOutput = childFn({
                    addToCache,
                    cache,
                    context,
                    depth,
                    props: stateProps,
                    theme
                });

                if (fnOutput) {
                    handledState = {
                        ...handledState,
                        ...fnOutput,
                        state: true
                    };
                }
            } else {
                const childState = handleState({
                    addToCache,
                    cache,
                    context,
                    customSelector: parentSelector || (childSelector ? `${selector}${childSelector}` : selector),
                    depth,
                    prop: stateProp,
                    props: stateProps,
                    theme,
                });

                handledState[stateProp] = {
                    ...childState,
                    state: true
                }
            }
        }
    }

    return {
        ...handledState,
        state: true
    }
}

export const handleProps = ({
    addToCache,
    bypass,
    cache,
    context,
    depth,
    props,
    theme
}) => {
    const customProps = cachedProps || getCustomProps({ props, theme });
    const propsWithCustomProps = {
        depth,
        ...props,
        ...customProps
    }
    let handledProps = {};

    if (!cachedProps) { cachedProps = customProps }

    // New loop
    for (let prop of Object.keys(propsWithCustomProps)) {
        let propType = 'unknown'

        if (allProps[prop]) {
            propType = 'prop'
        } else if (allStates[prop]) {
            propType = 'state'
        }

        if (propType === 'prop') {
            const handledProp = handleProp({
                addToCache,
                bypass,
                cache,
                context,
                depth,
                prop,
                props: propsWithCustomProps,
                theme
            })

            handledProps = {
                ...handledProps,
                ...handledProp
            }
        }

        if (propType === 'state') {
            const handledState = handleState({
                addToCache,
                cache,
                context,
                depth,
                prop,
                props: propsWithCustomProps,
                theme
            })

            handledProps[prop] = handledState
        }
    }

    return handledProps
}