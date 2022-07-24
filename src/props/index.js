import { css } from '@emotion/css';

// Props
import { border, borderColor, borderProps, borderRadius, borderStyle, borderWidth } from './border';
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
    ...borderProps,
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
    'py': {
        fn: padding,
        key: [
            'padding-bottom',
            'padding-top'
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
        } else if (fn && typeof fn === 'function' && props[cssProp] != null) {
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
    }

    for (let propName in elementProps) {
        cssAsArray.push(`${propName}: ${elementProps[propName]}`);
    }

    for (let state of cssStates) {
        const { key } = allStates[state] || {};

        if (key) {
            const { asArray, elementProps: stateProps } = handleProps({
                props: typeof props[state] === 'function' ? props[state]({
                    props,
                    theme
                }) : props[state],
                theme
            });

            props[state] = stateProps;
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