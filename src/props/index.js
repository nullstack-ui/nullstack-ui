import { css } from '@emotion/css';

// Props
import { border, borderColor, borderProps, borderRadius, borderStyle, borderWidth } from './border';
import { bgColor, color, textColor } from './color';
import { flexProps } from './flex';
import { marginProps } from './margin';
import { paddingProps } from './padding';
import { positionProps } from './position';
import { sizeProps } from './size';
import { transformProps } from './transform';
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
    'content': {
        key: 'content'
    },
    'cursor': {
        key: 'cursor'
    },
    'display': {
        key: 'display'
    },
    ...flexProps,
    ...marginProps,
    'opacity': {
        key: 'opacity'
    },
    ...paddingProps,
    ...positionProps,
    ...sizeProps,
    'textColor': {
        fn: textColor
    },
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
}

export const allStates = {
    '_hover': {
        // props: , 
        key: ':hover',
    },
    '_active': {
        key: ':active'
    },

    // Pseudo classes
    // Move this somewhere else later
    '_even': {
        key: ':nth-child(even)'
    },
    '_firstChild': {
        key: ':first-child'
    },

    // Pseudo elements
    // Move this somewhere else later
    '_after': {
        key: ':after'
    }
}

// Methods
export const getCustomProps = ({
    props,
}) => {
    let customProps = {};

    if (props.customProps) {
        for (let customProp of props.customProps) {
            const componentProp = props[customProp.name];

            if (componentProp) {
                if (customProp.values && Array.isArray(customProp.values)) {
                    const index = customProp.values.map(value => value.name).indexOf(componentProp);

                    if (index > -1) {
                        customProps = {
                            ...customProps,
                            ...customProp.values[index].props
                        }
                    }
                    console.log('componentProp', componentProp);
                } else {
                    customProps = {
                        ...customProps,
                        ...customProp.props
                    }
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

export const handleProps = ({
    props,
    theme
}) => {
    const customProps = getCustomProps({ props });
    const propsWithCustomProps = { ...props, ...customProps };
    const cssProps = Object.keys(propsWithCustomProps).filter(prop => prop.indexOf('_') !== 0);
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
        } else if (fn && typeof fn === 'function' && propsWithCustomProps[cssProp] != null) {
            const handledProp = fn({
                key,
                props: propsWithCustomProps,
                theme,
                value: propsWithCustomProps[cssProp]
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