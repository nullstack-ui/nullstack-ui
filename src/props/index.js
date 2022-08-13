import { css } from '@emotion/css';
import { bgProps } from './bg';

// Props
import { border, borderColor, borderProps, borderRadius, borderStyle, borderWidth } from './border';
import { bgColor, color, textColor } from './color';
import { dimensionProps } from './dimension';
import { flexProps } from './flex';
import { fontProps } from './font';
import { marginProps } from './margin';
import { overflowProps } from './overflow';
import { paddingProps } from './padding';
import { positionProps } from './position';
import { pseudoClasses } from './pseudoClasses';
import { pseudoElements } from './pseudoElements';
import { sizeProps } from './size';
import { spacingProps } from './spacing';
import { transformProps } from './transform';
import { transition, transitionDelay, transitionDuration, transitionProperty, transitionTimingFunction } from './transition';
import { responsiveness } from './_responsiveness';

// All props
export const allProps = {
    'appearance': {
        key: 'appearance'
    },
    ...bgProps,
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
    ...dimensionProps,
    'display': {
        key: 'display'
    },
    ...flexProps,
    ...fontProps,
    ...marginProps,
    'opacity': {
        key: 'opacity'
    },
    ...overflowProps,
    ...paddingProps,
    ...positionProps,
    ...sizeProps,
    ...spacingProps,
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
        allProps.push(...props?.customProps)
    }

    for (let customProp of allProps) {
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
            } else {
                customProps = {
                    ...customProps,
                    ...customProp.props
                }
            }
        }

        if (componentProp === 'outline') {
            // console.log('!!!', customProps);
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

const handleAllProps = ({ initialProps, props, theme }) => {
    const handledProps = {};

    for (let key in props) {
        const value = props?.[key] != null ? props?.[key] : null;
        let handledValue;

        if (
            Object.keys(allProps).indexOf(key) === -1 &&
            Object.keys(allStates).indexOf(key) === -1
        ) {
            continue;
        }

        if (typeof value === 'function') {
            handledValue = value({
                initialProps,
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
    props,
    theme
}) => {
    const customProps = getCustomProps({ props, theme });
    const propsWithCustomProps = handleAllProps({
        initialProps: props,
        props: {
            ...props,
            ...customProps
        },
        theme
    });
    const cssProps = Object.keys(propsWithCustomProps).filter(prop => prop.indexOf('_') !== 0);
    const cssStates = props ? Object.keys(props).filter(prop => prop.indexOf('_') === 0) : [];
    const cssAsArray = [];
    const groups = {};

    let elementProps = {};

    for (let cssProp of cssProps) {
        const {
            fn,
            key,
            parent,
            transform,
            value
        } = allProps[cssProp] || getPropByAlias(cssProp) || {};

        if (parent) {
            if (!groups[parent]) {
                groups[parent] = {
                    childProps: [],
                    key: parent
                };
            }

            groups[parent].childProps.push({
                fn,
                propName: key,
                value: props[key]
            })
        }

        if (transform) {
            const { props: transformProps, value: transformValue } = transform;
            const stringifiedProps = transformValue ? JSON.stringify(transformProps).replace(/value/g, transformValue(propsWithCustomProps[cssProp])) : '';
            const { asArray } = handleProps({
                props: transformValue ? JSON.parse(stringifiedProps) : transformProps,
                theme
            });

            if (transformValue || propsWithCustomProps[cssProp]) {
                cssAsArray.push(...asArray);
            }
        } else if (key && value) {
            elementProps[key] = typeof value === 'function' ? value({
                initialProps: props,
                props: propsWithCustomProps,
                theme
            }) : value;
        } else if (fn && typeof fn === 'function' && propsWithCustomProps[cssProp] != null) {
            const handledProp = fn({
                key,
                props: propsWithCustomProps,
                theme,
                value: typeof propsWithCustomProps[cssProp] === 'function' ? propsWithCustomProps[cssProp]({
                    initialProps: props,
                    props: propsWithCustomProps,
                    theme
                }) : propsWithCustomProps[cssProp]
            });

            if (Array.isArray(handledProp)) {
                for (let prop of handledProp) {
                    elementProps[prop.key] = typeof prop.value === 'function' ? prop.value({
                        initialProps: props,
                        props: propsWithCustomProps,
                        theme
                    }) : prop.value;
                }
            } else if (handledProp.key && handledProp.value) {
                if (Array.isArray(handledProp.key)) {
                    for (let key of handledProp.key) {
                        elementProps[key] = typeof handledProp.value === 'function' ? handledProp.value({
                            initialProps: props,
                            props: propsWithCustomProps,
                            theme
                        }) : handledProp.value;
                    }
                } else if (typeof handledProp.key === 'string') {
                    elementProps[handledProp.key] = typeof handledProp.value === 'function' ? handledProp.value({
                        initialProps: props,
                        props: propsWithCustomProps,
                        theme
                    }) : handledProp.value;
                }
            }
        } else if (key && !value) {
            if (typeof propsWithCustomProps[cssProp] === 'object') {
                const subKey = Object.keys(propsWithCustomProps[cssProp])[0];
                const newProps = {};
                let handledProps;

                newProps[`${cssProp}.${subKey}`] = propsWithCustomProps[cssProp][subKey];

                handledProps = handleProps({
                    props: newProps,
                    theme
                });
            } else {
                elementProps[key] = props[cssProp];
            }
        }
    }

    for (let groupName in groups) {
        const { fn, key: parentKey } = allProps[groupName] || getPropByAlias(groupName) || {};
        const { childProps } = groups[groupName];
        const handledProp = fn({
            childProps,
            key: parentKey,
            props: propsWithCustomProps,
            theme
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
    }

    for (let propName in elementProps) {
        cssAsArray.push(`${propName}: ${elementProps[propName]}`);
    }

    for (let state of cssStates) {
        const { fn, key, responsiveness } = allStates[state] || {};
        let _props = props;
        let _selector = `&${key}`;

        if (responsiveness) {
            const responsivenessProps = fn({
                props,
                theme
            });

            if (responsivenessProps) {
                for (let rp of responsivenessProps) {
                    const { asArray, breakpoint, context, elementProps, selector } = rp;

                    cssAsArray.push(`${selector} {`);
                    cssAsArray.push(...asArray);
                    cssAsArray.push('}');

                    if (!props[context]) {
                        props[context] = {};
                    }

                    props[context][breakpoint] = elementProps;
                }
            }
        } else if (key) {
            const customProps = getCustomProps({ props: _props, theme });
            const propsWithCustomProps = handleAllProps({
                props: {
                    ..._props,
                    ...customProps
                },
                theme
            });
            const { asArray, elementProps: stateProps } = handleProps({
                props: typeof propsWithCustomProps[state] === 'function' ? propsWithCustomProps[state]({
                    initialProps: props,
                    props: propsWithCustomProps,
                    theme
                }) : propsWithCustomProps[state],
                theme
            });

            props[state] = stateProps;

            cssAsArray.push(`${_selector} {`);
            cssAsArray.push(...asArray);
            cssAsArray.push('}');
        } else if (fn) {
            const { asArray } = fn({
                props,
                theme
            });

            cssAsArray.push(...asArray);
        }
    }

    return {
        asArray: cssAsArray,
        asString: cssAsArray.join(';'),
        elementProps
    }
}