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

    console.log('ALLPROPS', allProps)

    let allCSS = ''

    for (const prop in allProps) {
        const { breakpoint, breakpointSelector, initialValue, selector, style } = allProps[prop] || {};

        if (!Array.isArray(selector) && !style) { continue; }

        if (breakpointSelector) {
            allCSS += `${breakpointSelector} {`;
        }

        if (selector) {
            allCSS += `&${selector} {`;
        } else {
            allCSS += `& {`;
        }

        allCSS += getStyle({
            addToCache,
            breakpoint,
            breakpointSelector,
            initialValue,
            prop,
            style
        })

        allCSS += '}';

        if (breakpointSelector) {
            allCSS += '}';
        }
    }

    return css(allCSS)
    // return css(asString);
}

const getStyle = ({
    addToCache,
    breakpoint,
    breakpointSelector,
    initialValue,
    prop,
    style
}) => {
    let allCSS = '';

    for (let { key, value } of style) {
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

    return allCSS;
}