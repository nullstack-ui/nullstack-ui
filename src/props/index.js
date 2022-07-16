import { css } from '@emotion/css';
import { bgColor } from './bg';

// Props
import { border, borderColor, borderStyle, borderWidth } from './border';
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
    'bgColor': {
        key: 'background-color',
        value: bgColor
    },
    'border': {
        aliases: ['bd'],
        value: border
    },
    'border.color': {
        aliases: ['bd.color'],
        key: 'border-color',
        value: borderColor
    },
    'border.style': {
        aliases: ['bd.style'],
        key: 'border-style',
        value: borderStyle
    },
    'border.width': {
        aliases: ['bd.width'],
        key: 'border-width',
        value: borderWidth
    },
    'borderBottom': {
        aliases: ['bdBottom'],
        value: params => border({
            ...params,
            key: 'border-bottom'
        })
    },
    'border-bottom.style': {
        aliases: [
            'bdBottomStyle',
            'borderBottomStyle'
        ],
        value: params => borderStyle({
            ...params,
            key: 'border-bottom'
        })
    },
    'border-bottom.width': {
        aliases: [
            'bdBW',
            'bdBottomWidth',
            'borderBottomWidth'
        ],
        value: params => borderWidth({
            ...params,
            key: 'border-bottom'
        })
    },
    'borderLeft': {
        aliases: ['bdLeft'],
        value: params => border({
            ...params,
            key: 'border-left'
        })
    },
    'border-left.style': {
        aliases: [
            'bdLeftStyle',
            'borderLeftStyle'
        ],
        value: params => borderStyle({
            ...params,
            key: 'border-left'
        })
    },
    'border-left.width': {
        aliases: [
            'bdLWidth',
            'bdLeftWidth',
            'borderLeftmWidth'
        ],
        value: params => borderWidth({
            ...params,
            key: 'border-left'
        })
    },
    'boxSizing': {
        key: 'box-sizing'
    },
    'cursor': {
        key: 'cursor'
    },
    'flex': {
        value: flex
    },
    'flex.align': {
        value: flexAlign
    },
    'flex.alContent': {
        value: flexAlignContent
    },
    'flex.alignContent': {
        value: flexAlignContent
    },
    'flex.alH': {
        value: flexAlignH
    },
    'flex.alV': {
        value: flexAlignV
    },
    'flex.dir': {
        value: flexDirection
    },
    'flex.direction': {
        value: flexDirection
    },
    'h': {
        value: height
    },
    'height': {
        value: height
    },
    'marginLeft': {
        key: 'margin-left',
        value: margin
    },
    'marginL': {
        key: 'margin-left',
        value: margin
    },
    'ml': {
        key: 'margin-left',
        value: margin
    },
    'p': {
        key: 'padding',
        value: padding
    },
    'px': {
        key: [
            'padding-left',
            'padding-right'
        ],
        value: padding
    },
    'size': {
        value: size
    },
    'transition': {
        value: transition
    },
    'transition.delay': {
        value: transitionDelay
    },
    'transition.duration': {
        value: transitionDuration
    },
    'transition.property': {
        value: transitionProperty
    },
    'transition.timingFunciton': {
        value: transitionTimingFunction
    },
    'w': {
        value: width
    },
    'width': {
        value: width
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

    for (let prop of cssProps) {
        const targetProp = allProps[prop] || getPropByAlias(prop) || {};
        const { key, value } = targetProp;

        if (key) {
            const handledValue = typeof value === 'function' ? value({
                props,
                theme,
                value: props[prop]
            }) : props[prop];

            if (prop === 'bdBottom') {
                console.log('value', value);
            }
            
            if (Array.isArray(key)) {
                for (let k of key) {
                    cssAsArray.push(`${k}: ${handledValue}`);
                }
            } else {
                cssAsArray.push(`${key}: ${handledValue}`);
            }

            elementProps[prop] = handledValue;
        } else {
            const handled = typeof value === 'function' ? value({
                props,
                theme,
                value: props[prop]
            }) : props[prop];

            if (Array.isArray(handled)) {
                for (let i = 0; i < handled.length; i++) {
                    const { key, value } = handled[i];

                    cssAsArray.push(`${key}: ${value}`);
                    elementProps[key] = value;
                }
            } else if (handled?.key && handled.value) {
                cssAsArray.push(`${handled.key}: ${handled.value}`);
                elementProps[handled.key] = handled.value;
            } else if (handled?.elementProps && handled?.asArray) {
                cssAsArray.push(...handled.asArray)
                elementProps = {
                    ...elementProps,
                    ...handled.elementProps
                }
            }
        }
    }

    for (let state of cssStates) {
        const { key } = allStates[state] || {};

        if (key) {
            const { asArray } = handleProps({
                props: typeof props[state] === 'function' ? props[state](elementProps) : props[state],
                theme
            })
            cssAsArray.push(`&${key} {`);
            cssAsArray.push(...asArray);
            cssAsArray.push('}');
        }
    }

    return {
        asArray: cssAsArray,
        asString: cssAsArray.join(';'),
        elementProps
    };
}