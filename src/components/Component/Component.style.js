import { css } from '@emotion/css';
import { allProps, allStates, handleProps } from '../../props';
import { acceptableGroupStates } from '../../props/_group';

export const ComponentStyle = ({ addToCache, cache, context, darkMode, depth, props, theme }) => {
    const { __self, __source, ...componentProps } = props

    const allProps = handleProps({
        addToCache,
        cache,
        context,
        darkMode,
        depth,
        props: {
            ...componentProps,
            boxSizing: 'border-box'
        },
        theme
    });

    let allCSS = ''

    for (const propName in allProps) {
        const alias = allProps[propName]?.aliasFor;
        const prop = allProps[alias || propName] || {};
        const { breakpoint, breakpointSelector, cssProps, group, initialValue, selector, state } = prop;

        if (!Array.isArray(selector) && !cssProps && !group && !state) { continue; }

        if (breakpointSelector) {
            allCSS += `${breakpointSelector} {`;
        }

        if (group) {
            const { group, ...childrenProps } = prop;
            const groupState = acceptableGroupStates[propName];

            if (groupState) {
                allCSS += `${groupState} {`;

                for (const childPropName in childrenProps) {
                    const childProp = childrenProps[childPropName];

                    allCSS += `[data-group-child-id="${childPropName}"] {`;

                    for (const propName in childProp) {
                        const prop = childProp[propName];

                        if (prop.state) {
                            allCSS += getState({
                                stateProp: prop
                            })
                        } else {
                            allCSS += getStyle({
                                breakpoint,
                                breakpointSelector,
                                cssProps: prop.cssProps,
                                initialValue: prop.initialValue,
                                propName: prop.prop,
                            })
                        }
                    }

                    allCSS += '}';
                }

                allCSS += '}';
            }
            
        } else if (state) {
            allCSS += getState({
                stateProp: prop
            })
        } else if (Array.isArray(selector)) {
            for (let s of selector) {
                allCSS += `&${s.selector} {`;

                allCSS += getStyle({
                    breakpoint,
                    breakpointSelector,
                    cssProps: s.cssProps,
                    initialValue,
                    propName,
                })

                allCSS += '}';
            }
        } else {
            if (selector) {
                allCSS += `&${selector} {`;
            } else {
                allCSS += `& {`;
            }

            allCSS += getStyle({
                cssProps,
            })

            allCSS += '}';

            if (breakpointSelector) {
                allCSS += '}';
            }
        }
    }

    return css(allCSS)
    // return css(asString);
}

const getState = ({
    stateProp
}) => {
    const { state, ...stateProps } = stateProp;
    let allCSS = '';

    for (const prop in stateProps) {
        const stateProp = stateProps[prop];

        if (stateProp?.state) {
            allCSS += getState({
                stateProp
            })
        } else {
            if (stateProp.selector) {
                allCSS += `${stateProp.selector} {`;
            }

            if (Array.isArray(stateProps[prop])) {
                for (let s of stateProps[prop]) {
                    allCSS += `${s.key}: ${s.value};`
                }
            } else if (typeof stateProps[prop] === 'object' && stateProps[prop].cssProps) {
                allCSS += getStyle({
                    cssProps: stateProps[prop].cssProps
                })
            }

            if (stateProp.selector) {
                allCSS += '}';
            }
        }
    }

    return allCSS;
}

const getStyle = ({
    cssProps
}) => {
    let allCSS = '';

    for (let { key, value } of cssProps) {
        let cssLine = '';

        if (!key || value == null || value === false) { continue; }

        if (Array.isArray(key)) {
            for (let k of key) {
                cssLine += `${k}: ${value};`;
            }
        } else {
            cssLine = `${key}: ${value};`;
        }

        allCSS += cssLine;
    }

    return allCSS;
}