import { css } from '@emotion/css';
import { allStates, handleProps } from '../../props';

export const ComponentStyle = ({ addToCache, cache, context, darkMode, depth, name, props, theme }) => {
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
        const prop = allProps[propName] || {};
        const { breakpoint, breakpointSelector, cssProps, initialValue, selector, state } = prop;

        if (!Array.isArray(selector) && !cssProps && !state) { continue; }

        if (breakpointSelector) {
            allCSS += `${breakpointSelector} {`;
        }

        if (state) {
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
        if (allStates[prop]) {
            const { selector } = stateProps[prop] || {};

            allCSS += `& ${selector} {`;

            allCSS += getState({
                stateProp: stateProps[prop]
            })

            allCSS += '}';
        } else {
            if (Array.isArray(stateProps[prop])) {
                for (let s of stateProps[prop]) {
                    allCSS += `${s.key}: ${s.value};`
                }
            } else if (typeof stateProps[prop] === 'object' && stateProps[prop].cssProps) {
                allCSS += getStyle({
                    cssProps: stateProps[prop].cssProps
                })
            }
        }
    }

    // console.log('allCSS', allCSS)

    return allCSS;
}

const getStyle = ({
    cssProps
}) => {
    let allCSS = '';

    for (let { key, value } of cssProps) {
        let cssLine = '';

        if (!key || value == null || value == false) { continue; }

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