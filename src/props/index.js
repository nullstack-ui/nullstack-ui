import { css } from '@emotion/css';

// Props
import { border, borderColor, borderStyle, borderWidth } from './border';
import { bgColor, color, textColor } from './color';
import { flex, flexAlign, flexAlignContent, flexAlignH, flexAlignV, flexDirection } from './flex';
import { margin } from './margin';
import { padding } from './padding';
import { height, size, width } from './size';
import { transition, transitionDelay, transitionDuration, transitionProperty, transitionTimingFunction } from './transition';

// All props
export const allProps = {
    'appearance': {
        key: 'appearance'
    },
    'backgroundColor': {
        aliases: ['bgColor'],
        key: 'background-color',
        fn: bgColor
    },
    'border': {
        aliases: ['bd'],
        fn: border,
        key: 'border',
    },
    'border.color': {
        aliases: ['bd.color'],
        fn: borderColor,
        key: 'border-color'
    },
    'border.style': {
        aliases: ['bd.style'],
        fn: borderStyle,
        key: 'border-style',
    },
    'borderWidth': {
        aliases: [
            'border.width',
            'bd.width'
        ],
        fn: borderWidth,
        key: 'border-width',
    },
    'borderBottom': {
        aliases: ['bdBottom'],
        fn: params => border({
            ...params,
            key: 'border-bottom'
        })
    },
    'border-bottom.color': {
        aliases: [
            'bdBottomColor',
            'borderBottomColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-bottom-color'
        })
    },
    'border-bottom.style': {
        aliases: [
            'bdBottomStyle',
            'borderBottomStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-bottom-style'
        })
    },
    'border-bottom.width': {
        aliases: [
            'bdBW',
            'bdBottomWidth',
            'borderBottomWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-bottom-width'
        })
    },
    'borderLeft': {
        aliases: ['bdLeft'],
        fn: params => border({
            ...params,
            key: 'border-left'
        })
    },
    'border-left.color': {
        aliases: [
            'bdLeftColor',
            'borderLeftColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-left-color'
        })
    },
    'border-left.style': {
        aliases: [
            'bdLeftStyle',
            'borderLeftStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-left-style'
        })
    },
    'border-left.width': {
        aliases: [
            'bdLWidth',
            'bdLeftWidth',
            'borderLeftmWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-left-width'
        })
    },
    'borderRight': {
        aliases: ['bdRight'],
        fn: params => border({
            ...params,
            key: 'border-right'
        })
    },
    'border-right.color': {
        aliases: [
            'bdRightColor',
            'borderRightColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-right-color'
        })
    },
    'border-right.style': {
        aliases: [
            'bdRightStyle',
            'borderRightStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-right-style'
        })
    },
    'border-right.width': {
        aliases: [
            'bdRWidth',
            'bdRightWidth',
            'borderRightWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-right-width'
        })
    },
    'borderTop': {
        aliases: ['bdTop'],
        fn: params => border({
            ...params,
            key: 'border-top'
        })
    },
    'border-top.color': {
        aliases: [
            'bdTopColor',
            'borderTopColor'
        ],
        fn: params => borderColor({
            ...params,
            key: 'border-top-color'
        })
    },
    'border-top.style': {
        aliases: [
            'bdTopStyle',
            'borderTopStyle'
        ],
        fn: params => borderStyle({
            ...params,
            key: 'border-top-style'
        })
    },
    'border-top.width': {
        aliases: [
            'bdTWidth',
            'bdTopWidth',
            'borderTopWidth'
        ],
        fn: params => borderWidth({
            ...params,
            key: 'border-top-width'
        })
    },
    'borderX': {
        aliases: ['bdX'],
        fn: border,
        key: ['border-left', 'border-right']
    },
    'boxSizing': {
        key: 'box-sizing'
    },
    'color': {
        fn: color
    },
    'cursor': {
        key: 'cursor'
    },
    'flex': {
        fn: flex
    },
    'flex.align': {
        fn: flexAlign
    },
    'flex.alContent': {
        fn: flexAlignContent
    },
    'flex.alignContent': {
        fn: flexAlignContent
    },
    'flex.alH': {
        fn: flexAlignH
    },
    'flex.alV': {
        fn: flexAlignV
    },
    'flex.dir': {
        fn: flexDirection
    },
    'flex.direction': {
        fn: flexDirection
    },
    'height': {
        aliases: ['h'],
        fn: height
    },
    'marginLeft': {
        aliases: [
            'marginL',
            'ml'
        ],
        fn: margin,
        key: 'margin-left'
    },
    'p': {
        fn: padding,
        key: 'padding'
    },
    'px': {
        fn: padding,
        key: [
            'padding-left',
            'padding-right'
        ],
    },
    'size': {
        fn: size
    },
    'textColor': {
        fn: textColor
    },
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
    'width': {
        aliases: ['w'],
        fn: width,
        key: 'width'
    }
}

export const allStates = {
    '_hover': {
        // props: , 
        key: ':hover',
    },
    '_active': {
        key: ':active'
    }
}

// Methods
export const getPropByAlias = alias => {
    for (let key in allProps) {
        const prop = allProps[key];

        if (prop.aliases?.indexOf(alias) > -1) {
            return prop;
        }
    }
}
export const handleProps = ({
    props,
    theme
}) => {
    const cssProps = Object.keys(props).filter(prop => prop.indexOf('_') !== 0);
    const cssStates = Object.keys(props).filter(prop => prop.indexOf('_') === 0);
    const cssAsArray = [];
    let elementProps = {};

    for (let cssProp of cssProps) {
        const {
            fn,
            key,
            value
        } = allProps[cssProp] || getPropByAlias(cssProp) || {};

        if (key && value) {
            elementProps[key] = value;
        } else if (fn && typeof fn === 'function') {
            const handledProp = fn({
                key,
                props,
                theme,
                value: props[cssProp]
            });

            if (Array.isArray(handledProp)) {
                for (let prop of handledProp) {
                    elementProps[prop.key] = prop.value;
                }
            } else if (handledProp.key && handledProp.value) {
                if (Array.isArray(handledProp.key)) {
                    for (let key of handledProp.key) {
                        elementProps[key] = handledProp.value;
                    }
                } else if (typeof handledProp.key === 'string') {
                    elementProps[handledProp.key] = handledProp.value;
                }
            }
        } else if (key && !value) {
            elementProps[key] = props[cssProp];
        }

        // if (key) {
        //     const handledValue = typeof value === 'function' ? value({
        //         props,
        //         theme,
        //         value: props[prop]
        //     }) : props[prop];

        //     if (Array.isArray(key)) {
        //         for (let k of key) {
        //             cssAsArray.push(`${k}: ${handledValue}`);
        //         }
        //     } else {
        //         cssAsArray.push(`${key}: ${handledValue}`);
        //     }

        //     elementProps[prop] = handledValue;
        // } else {
        //     const handled = typeof value === 'function' ? value({
        //         props,
        //         theme,
        //         value: props[prop]
        //     }) : props[prop];

        //     if (Array.isArray(handled)) {
        //         for (let i = 0; i < handled.length; i++) {
        //             const { key, value } = handled[i];

        //             cssAsArray.push(`${key}: ${value}`);
        //             elementProps[key] = value;
        //         }
        //     } else if (handled?.key && handled.value) {
        //         cssAsArray.push(`${handled.key}: ${handled.value}`);
        //         elementProps[handled.key] = handled.value;
        //     } else if (handled?.elementProps && handled?.asArray) {
        //         cssAsArray.push(...handled.asArray)
        //         elementProps = {
        //             ...elementProps,
        //             ...handled.elementProps
        //         }
        //     }
        // }
    }

    for (let propName in elementProps) {
        cssAsArray.push(`${propName}: ${elementProps[propName]}`);
    }

    for (let state of cssStates) {
        const { key } = allStates[state] || {};

        if (key) {
            const { asArray } = handleProps({
                props: typeof props[state] === 'function' ? props[state](elementProps) : props[state],
                theme
            });
            cssAsArray.push(`&${key} {`);
            cssAsArray.push(...asArray);
            cssAsArray.push('}');
        }
    }

    return {
        asArray: cssAsArray,
        asString: cssAsArray.join(';'),
        elementProps
    }
}