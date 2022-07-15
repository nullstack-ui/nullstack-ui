import { css } from '@emotion/css';
import { bgColor } from './bg';

// Props
import { border } from './border';
import { flex, flexAlign, flexAlignContent, flexAlignH, flexAlignV } from './flex';
import { margin } from './margin';
import { padding } from './padding';
import { height, size, width } from './size';

// All props
export const allProps = {
    'appearance': {
        key: 'appearance'
    },
    'bgColor': {
        key: 'background-color',
        value: bgColor
    },
    'bd': {
        key: 'border',
        value: border
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
export const handleProps = ({
    props,
    theme
}) => {
    const cssProps = Object.keys(props).filter(prop => prop.indexOf('_') !== 0);
    const cssStates = Object.keys(props).filter(prop => prop.indexOf('_') === 0);
    const cssAsArray = [];
    let elementProps = {};

    for (let prop of cssProps) {
        const { key, value } = allProps[prop] || {};

        if (key) {
            const handledValue = typeof value === 'function' ? value({
                props,
                theme,
                value: props[prop]
            }) : props[prop];

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

            console.log('handled', handled)

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