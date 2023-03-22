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
        aliases: ['d'],
        key: 'display'
    },
    ...filterProps,
    ...flexProps,
    ...fontProps,
    ...gridProps,
    ...groupProps,
    ...marginProps,
    'opacity': {
        aliases: ['op'],
        key: 'opacity'
    },
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

export const getPropByAlias = alias => {
    for (let key in allProps) {
        const prop = allProps[key];

        if (prop.aliases?.indexOf(alias) > -1) {
            return prop;
        }
    }
}

const handleAllProps = ({
    depth,
    props,
    theme
}) => {
    const handledProps = {
        depth: props.depth
    };

    for (let key in props) {
        const value = props?.[key] != null ? props?.[key] : null;
        let handledValue;

        if (
            !getPropByAlias(key) &&
            Object.keys(allProps).indexOf(key) === -1 &&
            Object.keys(allStates).indexOf(key) === -1
        ) {
            continue;
        }

        if (typeof value === 'function') {
            handledValue = value({
                depth,
                props,
                theme
            });
        } else {
            handledValue = value;
        }

        if (handledValue != null) {
            handledProps[key] = handledValue;
        }
    }

    return props;
}

export const handleProps = ({
    cache,
    context,
    depth,
    props,
    theme
}) => {
    const customProps = getCustomProps({ props, theme });
    // const propsWithCustomProps = handleAllProps({
    //     depth,
    //     props: {
    //         ...props,
    //         ...customProps
    //     },
    //     theme
    // });
    const propsWithCustomProps = {
        depth,
        ...props,
        ...customProps
    }

    const cssProps = Object.keys(propsWithCustomProps).filter(prop => prop.indexOf('_') !== 0);
    const cssStates = props ? Object.keys(props).filter(prop => prop.indexOf('_') === 0 && !['__self', '__source'].includes(prop)) : [];
    const cssAsArray = [];
    const groups = {};
    const output = {};

    let elementProps = {};

    // New loop
    for (let prop of Object.keys(propsWithCustomProps)) {
        const isState = allStates[prop];

        if (allProps[prop]) {
            const initialValue = typeof propsWithCustomProps[prop] === 'function' ? propsWithCustomProps[prop]({
                props: propsWithCustomProps,
                theme
            }) : propsWithCustomProps[prop];

            if (cache?.[prop]?.[initialValue]) {
                console.log('cache detected, bypassing prop', prop)
                output[prop] = {
                    initialValue,
                    style: cache[prop][initialValue]
                };

                continue;
            }

            const alias = allProps[prop].aliasFor;
            const {
                fn,
                key,
                transform,
                value: unhandledValue
            } = alias ? allProps[alias] : allProps[prop]
            const fnProps = {
                context,
                depth,
                theme
            }

            let result;

            output[prop] = {};

            if (transform) {
                const transformProps = typeof transform === 'function' ? transform({
                    ...fnProps,
                    props: propsWithCustomProps,
                    value: initialValue
                }) : transform;

                if (transformProps == null || typeof transformProps !== 'object' || !transformProps.props) {
                    continue;
                }

                result = handleProps({ context, depth, props: transformProps.props, theme });
            } else if (fn && typeof fn === 'function') {
                result = fn({
                    ...fnProps,
                    props: propsWithCustomProps,
                    value: initialValue
                });
            } else if (unhandledValue != null) {
                result = typeof unhandledValue === 'function' ? unhandledValue({ context, props: propsWithCustomProps, theme }) : unhandledValue;
            } else {
                result = {
                    key,
                    value: propsWithCustomProps[prop]
                };
            }

            if (transform) {
                output[prop] = {
                    initialValue: propsWithCustomProps[prop],
                    style: Object.values(result).map(res => ({
                        key: res.style[0].key,
                        value: res.style[0].value
                    }))
                }
            } else {
                output[prop] = {
                    initialValue: propsWithCustomProps[prop],
                    style: Array.isArray(result) ? result : [result]
                }
            }

        } else if (allStates[prop]) {
            const alias = allStates[prop].aliasFor;
            const {
                key,
                responsiveness
            } = alias ? allStates[alias] : allStates[prop];

            // output[prop] = {
            //     selector: key
            // };

            if (responsiveness) {
                // const responsivenessProps = fn({
                //     key,
                //     props,
                //     theme
                // });

                // if (responsivenessProps) {
                //     for (let rp of responsivenessProps) {
                //         const { asArray, breakpoint, context, elementProps, selector } = rp;

                //         cssAsArray.push(`${selector} {`);
                //         cssAsArray.push(...asArray);
                //         cssAsArray.push('}');

                //         if (!props[context]) {
                //             props[context] = {};
                //         }

                //         props[context][breakpoint] = elementProps;
                //     }
                // }
            } else {
                const stateProps = handleProps({ context, depth, props: propsWithCustomProps[prop], theme });

                output[prop] = {
                    initialValue: propsWithCustomProps[prop],
                    selector: key,
                    style: Object.values(stateProps).map(res => ({
                        key: res.style[0]?.key,
                        value: res.style[0]?.value
                    }))
                }
            }
            // console.log('is state', prop)
        } else {
            // console.log('is not prop or state', prop)
        }
    }

    // for (let prop in output) {
    //     console.log('prop', output[prop])
    //     // cssAsArray.push(`${propName}: ${elementProps[propName]}`);
    // }

    return output

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