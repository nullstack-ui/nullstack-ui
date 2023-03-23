import { css } from '@emotion/css';
import { bgProps } from './bg';

// Props
import { border, borderColor, borderProps, borderRadius, borderStyle, borderWidth } from './border';
import { bgColor, color, colorProps, textColor } from './color';
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
import { sizeProps } from './size';
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
        transform: {
            props: {
                d: 'block'
            }
        }
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
        transform: {
            props: {
                appearance: 'none',
                bg: 'none',
                border: 'none'
            }
        }
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

const handleProp = ({
    addToCache,
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
    let cssProps = [];

    if (cache?.[prop]?.[initialValue]) {
        return {
            cssProps: cache[prop][initialValue],
            initialValue,
            prop
        };
    } else {
        // TODO: fix caching
        // console.log('cache miss', prop, initialValue)
    }

    if (transform) {
        const { props: transformProps, value: transformValue } = typeof transform === 'function' ? transform({
            context,
            depth,
            props,
            theme,
            value: props[prop]
        }) : transform;
        const stringifiedProps = transformValue ? JSON.stringify(transformProps).replace(/value/g, transformValue({
            depth,
            props,
            theme,
            value: props[prop]
        })) : '';
        const parsedProps = transformValue ? JSON.parse(stringifiedProps) : transformProps;

        if (typeof parsedProps === 'object') {
            for (let parsedProp of Object.keys(parsedProps)) {
                if (allProps[parsedProp]) {
                    const {
                        cssProps: childCSSProps,
                        initialValue: childInitialValue,
                    } = handleProp({
                        cache,
                        context,
                        depth,
                        prop: parsedProp,
                        props: parsedProps,
                        theme
                    });

                    cssProps.push(childCSSProps);
                }

                if (allStates[parsedProp]) {
                    const handledState = handleState({
                        addToCache,
                        cache,
                        context,
                        depth,
                        prop: parsedProp,
                        props: parsedProps,
                        theme
                    })

                    if (handledState && Object.keys(handledState).length && typeof handledState[parsedProp] === 'object') {
                        const statesWithCSS = Object
                            .keys(handledState[parsedProp])
                            .find(state => handledState[parsedProp]?.[state]?.cssProps?.length);

                        if (statesWithCSS.length) {
                            cssProps.push(...handledState[parsedProp][statesWithCSS].cssProps)
                        }
                    }
                }
            }
        }

        // propList = handleProps({ cache, context, depth, props: parsedProps, selector, theme });
    } else if (fn && typeof fn === 'function') {
        const fnOutput = fn({
            context,
            depth,
            key,
            props,
            theme,
            value: initialValue
        });

        if (typeof fnOutput === 'object' && fnOutput.key != null && fnOutput.value != null) {
            if (Array.isArray(fnOutput.key)) {
                cssProps = fnOutput.key.map((key, i) => ({
                    key,
                    value: Array.isArray(fnOutput.value) ? fnOutput.value[i] : fnOutput.value
                }));
            } else {
                cssProps = [{
                    key: fnOutput.key,
                    value: fnOutput.value
                }];
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
    } else {
        cssProps = [{
            key,
            value: props[prop]
        }];
    }

    addToCache?.({
        cssProps,
        initialValue,
        prop
    })

    return {
        cssProps,
        initialValue,
        prop
    }
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
    theme
}) => {
    const {
        fn,
        key
    } = allStates[prop];

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
        })
        
        handledState = {
            ...handledState,
            ...stateFnOutput
        }
    } else {
        console.log('*** stateProps', stateProps);
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

            handledState[prop] = {
                ...handledProp,
                selector
            }
        }

        if (propType === 'state') {
            const {
                fn: childFn,
                key: childSelector
            } = allStates[stateProp];

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
                    customSelector: `${selector}${childSelector}`,
                    depth,
                    prop: stateProp,
                    props: stateProps,
                    theme,
                });

                handledState[prop] = {
                    ...childState,
                    state: true
                }
            }
            // console.log('a prop inside a prop', prop, selector)

            // const hs = handleState({
            //     addToCache,
            //     cache,
            //     context,
            //     depth,
            //     parentSelector: selector,
            //     prop: stateProp,
            //     props: stateProps,
            //     theme,
            // })
            // if (fn && typeof fn === 'function') {
            //     const fnOutput = fn({
            //         addToCache,
            //         cache,
            //         context,
            //         depth,
            //         parentSelector,
            //         prop,
            //         props,
            //         theme
            //     });

            //     handledState = {
            //         ...handledState,
            //         ...fnOutput
            //     };
            // } else {
            //     const hs = handleState({
            //         addToCache,
            //         cache,
            //         context,
            //         depth,
            //         parentSelector: selector,
            //         prop: stateProp,
            //         props: stateProps,
            //         theme,
            //     })

            //     handledState[prop] = {
            //         ...hs,
            //         selector
            //     }
            // }
        }
    }

    return handledState
}

export const handleProps = ({
    addToCache,
    cache,
    context,
    depth,
    props,
    selector,
    theme
}) => {
    const customProps = getCustomProps({ props, theme });
    const propsWithCustomProps = {
        depth,
        ...props,
        ...customProps
    }

    const groups = {};
    let handledProps = {};

    const fnProps = {
        context,
        depth,
        theme
    }

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
                cache,
                context,
                depth,
                prop,
                props: propsWithCustomProps,
                theme
            })

            handledProps[prop] = handledProp
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

            if (handledState && Object.keys(handledState).length) {
                handledState.state = true;

                handledProps = {
                    ...handledProps,
                    ...handledState
                }
            }

            // handledProps[prop] = handledState
        }
    }

    //     if (allProps[prop]) {
    //         // const initialValue = typeof propsWithCustomProps[prop] === 'function' ? propsWithCustomProps[prop]({
    //         //     props: propsWithCustomProps,
    //         //     theme
    //         // }) : propsWithCustomProps[prop];

    //         // if (cache?.[prop]?.[initialValue]) {
    //         //     handledProps[prop] = {
    //         //         initialValue,
    //         //         style: cache[prop][initialValue]
    //         //     };

    //         //     continue;
    //         // }

    //         // const alias = allProps[prop].aliasFor;

    //         // const {
    //         //     fn,
    //         //     key,
    //         //     transform,
    //         //     value: unhandledValue
    //         // } = alias ? allProps[alias] : allProps[prop]

    //         // let propList;

    //         // if (!handledProps[prop]) {
    //         //     handledProps[prop] = {};
    //         // }

    //         // if (transform) {
    //         //     const { props: transformProps, value: transformValue } = typeof transform === 'function' ? transform({ context, depth, props, theme, value: propsWithCustomProps[prop] }) : transform;
    //         //     const stringifiedProps = transformValue ? JSON.stringify(transformProps).replace(/value/g, transformValue({
    //         //         depth,
    //         //         props,
    //         //         theme,
    //         //         value: propsWithCustomProps[prop]
    //         //     })) : '';
    //         //     const parsedProps = transformValue ? JSON.parse(stringifiedProps) : transformProps;

    //         //     if (parsedProps == null || typeof parsedProps !== 'object') {
    //         //         continue;
    //         //     }

    //         //     propList = handleProps({ cache, context, depth, props: parsedProps, selector, theme });
    //         // } else if (fn && typeof fn === 'function') {
    //         //     propList = fn({
    //         //         ...fnProps,
    //         //         key,
    //         //         props: propsWithCustomProps,
    //         //         value: initialValue
    //         //     });
    //         // } else if (unhandledValue != null) {
    //         //     propList = typeof unhandledValue === 'function' ? unhandledValue({ context, props: propsWithCustomProps, theme }) : unhandledValue;
    //         // } else {
    //         //     propList = {
    //         //         key,
    //         //         value: propsWithCustomProps[prop]
    //         //     };
    //         // }

    //         // if (transform) {
    //         //     handledProps[prop] = {
    //         //         selector,
    //         //         initialValue: propsWithCustomProps[prop],
    //         //         style: Object.values(propList).map(res => ({
    //         //             key: res.style[0].key,
    //         //             value: res.style[0].value
    //         //         })),
    //         //     }
    //         // } else {
    //         //     handledProps[prop] = {
    //         //         initialValue: propsWithCustomProps[prop],
    //         //         selector,
    //         //         style: Array.isArray(propList) ? propList : [propList],
    //         //     }
    //         // }
    //     } else if (allStates[prop]) {
    //         const alias = allStates[prop].aliasFor;
    //         const {
    //             fn,
    //             key,
    //             responsiveness
    //         } = alias ? allStates[alias] : allStates[prop];

    //         if (responsiveness) {
    //             const responsivenessProps = fn({
    //                 cache,
    //                 key,
    //                 props: propsWithCustomProps,
    //                 theme
    //             });

    //             handledProps[prop] = {
    //                 initialValue: propsWithCustomProps[prop],
    //                 selector: key,
    //             }

    //             if (responsivenessProps?.length) {
    //                 for (let rp of responsivenessProps) {
    //                     const { breakpoint, breakpointSelector, elementProps } = rp;

    //                     handledProps[prop] = {
    //                         initialValue: propsWithCustomProps[prop],
    //                         style: Object.values(elementProps).map(res => ({
    //                             breakpoint,
    //                             breakpointSelector,
    //                             key: res.style[0]?.key,
    //                             value: res.style[0]?.value
    //                         })),
    //                     }
    //                 }
    //             }
    //         } else {
    //             const { fn } = allStates[prop];
    //             const stateSelector = getStateSelector({
    //                 cache,
    //                 context,
    //                 props: propsWithCustomProps,
    //                 stateData: allStates[prop],
    //                 state: propsWithCustomProps[prop],
    //                 theme,
    //             })
    //             const stateStyleProps = getStateStyleProps(propsWithCustomProps[prop]);
    //             const handledStateProps = handleProps({ cache, context, depth, props: stateStyleProps, selector: stateSelector, theme });

    //             if (fn) {
    //                 const { selector } = typeof fn === 'function' ? fn({
    //                     ...fnProps,
    //                     cache,
    //                     props: propsWithCustomProps
    //                 }) : handleProps({ cache, context, depth, props: propsWithCustomProps[prop], selector: key, theme });

    //                 handledProps[prop] = {
    //                     selector,
    //                     state: true
    //                 }
    //             } else {
    //                 handledProps[prop] = {
    //                     selector: stateSelector,
    //                     state: true,
    //                     style: Object.values(handledStateProps).map(res => ({
    //                         key: res.style[0]?.key,
    //                         value: res.style[0]?.value
    //                     }))
    //                 }
    //             }
    //             // console.log('handledProps', prop, handledProps);
    //             // console.log('stateSelectors', stateSelectors);
    //             // console.log('stateStyleProps', stateStyleProps);

    //             // let stateProps = {};

    //             // handleState({
    //             //     stateData: allStates[prop],
    //             //     stateName: prop,
    //             //     state: propsWithCustomProps[prop]
    //             // })

    //             // if (fn) {
    //             //     const { selector } = typeof fn === 'function' ? fn({
    //             //         ...fnProps,
    //             //         cache,
    //             //         props: propsWithCustomProps
    //             //     }) : handleProps({ cache, context, depth, props: propsWithCustomProps[prop], selector: key, theme });

    //             //     console.log('selector', selector)
    //             //     handledProps[prop] = {
    //             //         selector,
    //             //         state: true
    //             //     }

    //             //     // console.log(prop, handledProps[prop])
    //             // } else {
    //             //     let selector = key;
    //             //     for (const stateProp in propsWithCustomProps[prop]) {
    //             //         if (allStates[stateProp]) {

    //             //         } else {
    //             //             // stateProps = {
    //             //             //     ...stateProps,
    //             //             //     ...handleProps({ cache, context, depth, props: propsWithCustomProps[prop], selector: key, theme })
    //             //             // };
    //             //         }
    //             //     }

    //             //     // handledProps[prop] = {
    //             //     //     selector: key,
    //             //     //     style: Object.values(stateProps).map(res => ({
    //             //     //         key: res.style?.[0]?.key,
    //             //     //         value: res.style?.[0]?.value
    //             //     //     })),
    //             //     //     state: true
    //             //     // }

    //             //     // console.log('stateProps', stateProps)
    //             //     // console.log('state', propsWithCustomProps[prop])
    //             //     // stateProps = handleProps({ cache, context, depth, props: propsWithCustomProps[prop], selector: key, theme });

    //             //     // for (const stateProp in stateProps) {
    //             //     //     if (allStates[stateProp]) {
    //             //     //         console.log('isState', stateProp)
    //             //     //     }
    //             //     // }

    //             //     // if (prop === '_children') {
    //             //     //     console.log('!CHILDREN!', stateProps)
    //             //     // }

    //             //     // handledProps[prop] = {
    //             //     //     selector: key,
    //             //     //     style: Object.values(stateProps).map(res => ({
    //             //     //         key: res.style?.[0]?.key,
    //             //     //         value: res.style?.[0]?.value
    //             //     //     })),
    //             //     //     state: true
    //             //     // }
    //             // }


    //             // const { selector } = typeof fn === 'function' ? fn({
    //             //     ...fnProps,
    //             //     cache,
    //             //     props: propsWithCustomProps
    //             // }) : handleProps({ cache, context, depth, props: propsWithCustomProps[prop], selector: key, theme });

    //             // if (Array.isArray(selector)) {
    //             //     console.log('An array!', selector)
    //             // } else {
    //             //     handledProps[prop] = {
    //             //         initialValue: propsWithCustomProps[prop],
    //             //         selector: selector ? `${selector}${key}` : key,
    //             //         // style: Object.values(handledProps).map(res => ({
    //             //         //     key: res.style[0]?.key,
    //             //         //     value: res.style[0]?.value
    //             //         // }))
    //             //     }
    //             // }    
    //         }
    //         // console.log('is state', prop)
    //     } else {
    //         // console.log('is not prop or state', prop)
    //     }
    // }

    // for (let prop in output) {
    //     console.log('prop', output[prop])
    //     // cssAsArray.push(`${propName}: ${elementProps[propName]}`);
    // }

    console.log('handledProps', handledProps)

    return handledProps

    // for (let cssProp of cssProps) {
    //     const {
    //         fn,
    //         key,
    //         parent,
    //         transform,
    //         value: unhandledValue
    //     } = allProps[cssProp] || getPropByAlias(cssProp) || {};
    //     const value = typeof unhandledValue === 'function' ? unhandledValue({ context, props, theme }) : unhandledValue;

    //     if (parent) {
    //         if (!groups[parent]) {
    //             groups[parent] = {
    //                 childProps: [],
    //                 key: parent
    //             };
    //         }

    //         groups[parent].childProps.push({
    //             fn,
    //             propName: key,
    //             value: props[key] || props[cssProp]
    //         })
    //     } else if (transform) {
    //         const { props: transformProps, value: transformValue } = typeof transform === 'function' ? transform({ context, depth, props, theme, value: propsWithCustomProps[cssProp] }) : transform;
    //         const stringifiedProps = transformValue ? JSON.stringify(transformProps).replace(/value/g, transformValue({
    //             depth,
    //             props,
    //             theme,
    //             value: propsWithCustomProps[cssProp]
    //         })) : '';
    //         const { asArray } = handleProps({
    //             context,
    //             depth,
    //             props: transformValue ? JSON.parse(stringifiedProps) : transformProps,
    //             theme
    //         });

    //         if (transformValue || propsWithCustomProps[cssProp]) {
    //             cssAsArray.push(...asArray);
    //         }
    //     } else if (key && value) {
    //         elementProps[key] = typeof value === 'function' ? value({
    //             context,
    //             depth,
    //             props: propsWithCustomProps,
    //             theme
    //         }) : value;
    //     } else if (fn && typeof fn === 'function' && propsWithCustomProps[cssProp] != null) {
    //         const handledProp = fn({
    //             context,
    //             depth,
    //             key,
    //             props: propsWithCustomProps,
    //             theme,
    //             value: typeof propsWithCustomProps[cssProp] === 'function' ? propsWithCustomProps[cssProp]({
    //                 props: propsWithCustomProps,
    //                 theme
    //             }) : propsWithCustomProps[cssProp]
    //         });

    //         if (Array.isArray(handledProp)) {
    //             for (let prop of handledProp) {
    //                 elementProps[prop.key] = typeof prop.value === 'function' ? prop.value({
    //                     context,
    //                     depth,
    //                     props: propsWithCustomProps,
    //                     theme
    //                 }) : prop.value;
    //             }
    //         } else if (handledProp.key && handledProp.value) {
    //             if (Array.isArray(handledProp.key)) {
    //                 for (let key of handledProp.key) {
    //                     elementProps[key] = typeof handledProp.value === 'function' ? handledProp.value({
    //                         context,
    //                         depth,
    //                         props: propsWithCustomProps,
    //                         theme
    //                     }) : handledProp.value;
    //                 }
    //             } else if (typeof handledProp.key === 'string') {
    //                 elementProps[handledProp.key] = typeof handledProp.value === 'function' ? handledProp.value({
    //                     context,
    //                     depth,
    //                     props: propsWithCustomProps,
    //                     theme
    //                 }) : handledProp.value;
    //             }
    //         } else if (handledProp.asArray) {
    //             cssAsArray.push(...handledProp.asArray);
    //         }
    //     } else if (key && !value) {
    //         if (typeof propsWithCustomProps[cssProp] === 'object') {
    //             const subKey = Object.keys(propsWithCustomProps[cssProp])[0];
    //             const newProps = {};

    //             newProps[`${cssProp}.${subKey}`] = propsWithCustomProps[cssProp][subKey];

    //             handledProps = handleProps({
    //                 context,
    //                 depth,
    //                 props: newProps,
    //                 theme
    //             });
    //         } else {
    //             elementProps[key] = props[cssProp];
    //         }
    //     }
    // }

    // for (let groupName in groups) {
    //     const { fn, key: parentKey } = allProps[groupName] || getPropByAlias(groupName) || {};
    //     const { childProps } = groups[groupName];
    //     const handledProp = fn({
    //         childProps,
    //         depth,
    //         context,
    //         key: parentKey,
    //         props: propsWithCustomProps,
    //         theme
    //     });

    //     if (Array.isArray(handledProp)) {
    //         for (let prop of handledProp) {
    //             elementProps[prop.key] = prop.value;
    //         }
    //     } else if (handledProp.key && handledProp.value) {
    //         if (Array.isArray(handledProp.key)) {
    //             for (let key of handledProp.key) {
    //                 elementProps[key] = handledProp.value;
    //             }
    //         } else if (typeof handledProp.key === 'string') {
    //             elementProps[handledProp.key] = handledProp.value;
    //         }
    //     }
    // }

    // for (let propName in elementProps) {
    //     cssAsArray.push(`${propName}: ${elementProps[propName]}`);
    // }

    // for (let state of cssStates) {
    //     const { fn, key, responsiveness } = allStates[state] || {};
    //     let _props = props;
    //     let _selector = `&${key}`;

    //     if (responsiveness) {
    //         const responsivenessProps = fn({
    //             key,
    //             props,
    //             theme
    //         });

    //         if (responsivenessProps) {
    //             for (let rp of responsivenessProps) {
    //                 const { asArray, breakpoint, context, elementProps, selector } = rp;

    //                 cssAsArray.push(`${selector} {`);
    //                 cssAsArray.push(...asArray);
    //                 cssAsArray.push('}');

    //                 if (!props[context]) {
    //                     props[context] = {};
    //                 }

    //                 props[context][breakpoint] = elementProps;
    //             }
    //         }
    //     } else if (key) {
    //         const customProps = getCustomProps({ props: _props, theme });
    //         const propsWithCustomProps = handleAllProps({
    //             depth,
    //             props: {
    //                 ..._props,
    //                 ...customProps
    //             },
    //             theme
    //         });
    //         const { asArray, elementProps: stateProps } = handleProps({
    //             context,
    //             depth,
    //             props: typeof propsWithCustomProps[state] === 'function' ? propsWithCustomProps[state]({
    //                 props: propsWithCustomProps,
    //                 theme
    //             }) : propsWithCustomProps[state],
    //             theme
    //         });

    //         props[state] = stateProps;

    //         cssAsArray.push(`${_selector} {`);
    //         cssAsArray.push(...asArray);
    //         cssAsArray.push('}');
    //     } else if (fn) {
    //         const { asArray } = fn({
    //             context,
    //             depth,
    //             key,
    //             props,
    //             theme
    //         });

    //         cssAsArray.push(...asArray);
    //     }
    // }

    // return {
    //     asArray: cssAsArray,
    //     asString: cssAsArray.join(';'),
    //     elementProps
    // }
}