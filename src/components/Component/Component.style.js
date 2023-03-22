import { css } from '@emotion/css';
import { handleProps } from '../../props';

export const ComponentStyle = ({ addToCache, cache, context, darkMode, depth, name, props, theme }) => {
    const { __self, __source, ...componentProps } = props

    const allProps = handleProps({
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

    for (const prop in allProps) {
        const { breakpoint, breakpointSelector, initialValue, selector, style } = allProps[prop] || {};

        if (!style) { continue; }

        for (let { key, value } of style) {
            if (!key || value == null) { continue; }

            const cssLine = `${key}: ${value};`;

            if (breakpointSelector) {
                allCSS += `${breakpointSelector} {`;
            }

            if (selector) {
                allCSS += `&${selector} {`;
            }

            allCSS += cssLine;

            if (selector) {
                allCSS += '}';
            }

            if (breakpointSelector) {
                allCSS += '}';
            }

            if (typeof initialValue === 'object') {
                const handledValue = breakpointSelector ? initialValue[breakpoint] : initialValue;

                for (let i = 0; i < Object.keys(handledValue).length; i++) {
                    const propToCache = Object.keys(handledValue)[i];
                    const styleToCache = style[i];
                    const valueToCache = Object.values(handledValue)[i];

                    addToCache({
                        initialValue: valueToCache,
                        prop: propToCache,
                        style: Array.isArray(styleToCache) ? styleToCache : [styleToCache]
                    });
                }
            } else {
                addToCache({
                    initialValue,
                    prop,
                    style,
                })
            }
        }
    }

    return css(allCSS)
    // return css(asString);
}