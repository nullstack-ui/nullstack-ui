import Color from 'color';

import { getValue } from '../utils/getValue';

const defaultRatio = .5;

export const getColor = props => {
    const { theme, value } = props;

    if (typeof value === 'string') {
        const themeColor = getThemeColor({
            ...props,
            value
        });

        if (themeColor && typeof themeColor === 'function') {
            return handleColor({
                ...props,
                theme,
                value: themeColor(props)
            });

            // return themeColor(props);
        } else if (themeColor && typeof themeColor === 'object') {
            return handleColor({
                ...props,
                theme,
                value: getColorIntensity(props)
            });
        } else {
            return handleColor({
                ...props,
                theme,
                value: themeColor || value
            });
        }
    } else if (
        Array.isArray(value) &&
        typeof value[0] === 'string' &&
        typeof value[1] === 'object'
    ) {
        const themeColor = getThemeColor({
            ...props,
            value: value[0]
        });
        const handledValue = typeof themeColor === 'function' ? themeColor(props) : value[0];

        return handleColor({
            theme,
            ...value[1],
            value: handledValue
        });
    } else if (
        Array.isArray(value) &&
        typeof value[0] === 'string' &&
        !isNaN(value[1])
    ) {
        const themeColor = getThemeColor({
            ...props,
            value: value[0]
        });
        const handledValue = typeof themeColor === 'function' ? themeColor(props) : value[0];

        return handleColor({
            theme,
            intensity: value[1],
            value: handledValue
        });
    } else if (typeof value === 'object') {
        const themeColor = getThemeColor({
            ...props,
            value: value.value
        });

        if (typeof themeColor === 'function') {
            return handleColor({
                theme,
                ...value,
                value: themeColor(props) || value[value.value]
            })
        } else {
            return handleColor({
                theme,
                ...value,
                value: themeColor || value.value
            });
        }
    } else if (typeof value === 'function') {
        // return handleColor({
        //     theme,
        //     value: value({ })
        // });
    }
}

const getThemeColor = props => {
    const { context, theme, value } = props;
    const { darkMode } = context || {};

    if (!theme?.colors) {
        return '';
    } else if (darkMode && theme.colors['_dark']?.[value]) {
        return theme.colors['_dark']?.[value];
    } else if (!darkMode && theme.colors['_light']?.[value]) {
        return theme.colors['_light']?.[value];
    } else {
        return theme.colors?.[value];
    }
}

// Handle color
export const handleColor = props => {
    let handledColor = (typeof props.value === 'object' && props.value.DEFAULT) ? props.value.DEFAULT : props.value;

    if (props.darken) {
        handledColor = darkenColor(props);
    }

    if (props.faded) {
        handledColor = fadedColor(props);
    }

    if (props.intensity) {
        handledColor = getColorIntensity(props);
    }

    if (props.opacity) {
        handledColor = opaqueColor({
            ...props,
            value: handledColor
        });
    }

    if (props.lighten) {
        handledColor = lightenColor({
            ...props,
            value: handledColor
        });
    }

    return handledColor
}


// Props
export const bgColor = ({
    key = 'background-color',
    props,
    theme,
    value,
    ...rest
}) => {
    const bgColor = getColor({
        ...rest,
        theme,
        value
    });
    const handledBgColor = handleColor({
        ...props,
        value: bgColor
    })

    return {
        key,
        value: handledBgColor
    };
}

export const color = params => {
    const { props, value } = params;
    const bgColor = getColor(params);
    const handledBgColor = handleColor({
        ...props,
        value: bgColor
    })
    const textColor = Color(handledBgColor).lightness() < 60 ? lightenColor({
        ratio: value?.ratio || .9,
        value: handledBgColor
    }) : darkenColor({
        ratio: value?.ratio || .9,
        value: handledBgColor
    });

    return [
        {
            key: 'background-color',
            value: handledBgColor
        },
        {
            key: 'color',
            value: textColor
        }
    ]
}

export const gradient = ({ value, ...rest }) => {
    const colorStops = [];
    const direction = value?.to || 'bottom';
    let type = value?.type || 'linear';

    for (let color of value.colors) {
        const handledColor = getColor({
            ...rest,
            value: color
        });

        if (typeof color === 'object' && color.percentage) {
            colorStops.push(`${handledColor} ${getValue({ unit: '%', value: color.percentage })}`);
        } else {
            colorStops.push(handledColor);
        }
    }

    if (type !== 'radial' && value?.repeat) {
        type = 'repeating-linear';
    }

    return {
        key: 'background-image',
        value: `${type}-gradient(${type !== 'radial' ? `to ${direction}, ` : ''}${colorStops.join(', ')})`
    }
}

// Manipulations
export const darkenColor = props => {
    const { darken, ratio, value } = props;
    const lightness = Color(value).lightness();
    const finalRatio = !isNaN(parseInt(darken)) ? darken : (ratio || defaultRatio);

    return Color(value).lightness(lightness - lightness * finalRatio).hex();
}

export const fadedColor = props => {
    const { faded, ratio, value } = props;
    const finalRatio = !isNaN(parseInt(faded)) ? faded : (ratio || defaultRatio);

    return Color(value).mix(Color('#FFF'), finalRatio).hex();
}

export const getActiveColors = params => {
    const { props, ratio, theme, ...rest } = params;
    const hoverProps = typeof props?._hover === 'function' ? props._hover(params) : props;
    const { bgColor, color, mixColors, textColor } = hoverProps || {};
    const handledBgColor = bgColor ? handleColor({
        ...props,
        value: bgColor
    }) : null
    const handledColor = color ? handleColor({
        ...props,
        value: color
    }) : null
    const handledTextColor = textColor ? handleColor({
        ...props,
        value: textColor
    }) : null
    let output = {};

    const getActiveColor = unhandledColor => {
        const color = getColor({
            ...rest,
            theme,
            value: unhandledColor
        });
        const lightness = Color(color).lightness();

        if (lightness < 10) {
            return lightenColor(({ ratio: ratio ? 1 - ratio : .1, value: color }));
        } else {
            return darkenColor(({ ratio: ratio ? 1 - ratio : .1, value: color }));
        }
    }

    if (mixColors) {
        return {
            bgColor: getActiveColors(handledBgColor || props.bgColor),
            textColor: Color(handledTextColor).mix(Color(getActiveColor(handledBgColor)), .2).hex()
        }
    } else {
        return {
            bgColor: handledBgColor ? getActiveColor(handledBgColor) : '',
            color: handledColor ? getActiveColor(handledColor) : '',
            textColor: handledTextColor ? getActiveColor(handledTextColor) : ''
        }

        if (handledBgColor) {
            output.bgColor = getActiveColor(handledBgColor)
        }

        if (handledColor) {
            output.color = getActiveColor(handledColor)
        }

        if (handledTextColor) {
            output.textColor = getActiveColor(handledTextColor)
        }
        
        return output
    }
}

const getColorIntensity = props => {
    const { intensity, theme, value } = props;
    const themeColor = theme?.colors?.[value];
    const defaultColor = theme?.colors?.[value]?.DEFAULT;
    const intensityColor = theme?.colors?.[value]?.[intensity];
    let index;
    let mixIntensity;
    let next;
    let nextColor;
    let nextIntensity;
    let previous;
    let previousColor;
    let previousIntensity;

    if (!themeColor) {
        return value
    } else if (intensityColor && typeof intensityColor === 'function') {
        return intensityColor(props);
    } else if (intensityColor && typeof intensityColor === 'string') {
        return intensityColor
    } else if (!intensity) {
        return defaultColor;
    } else if (!intensityColor) {
        themeColor[intensity] = null;

        index = Object.keys(themeColor).indexOf(`${intensity}`);
        next = Object.keys(themeColor)[index + 1];
        previous = Object.keys(themeColor)[index - 1];
        mixIntensity = intensity / (+next + +previous);

        nextIntensity = theme?.colors?.[value]?.[next];
        previousIntensity = theme?.colors?.[value]?.[previous];

        if (typeof nextIntensity === 'function') {
            nextColor = nextIntensity(props);
        } else if (typeof nextIntensity === 'string') {
            nextColor = nextIntensity;
        }

        if (typeof previousIntensity === 'function') {
            previousColor = previousIntensity(props);
        } else if (typeof nextIntensity === 'string') {
            previousColor = previousIntensity;
        }

        delete themeColor[intensity];

        return Color(previousColor).mix(Color(nextColor), mixIntensity).hex();
    }
}

export const getHoverColors = params => {
    const { props, ratio, theme, ...rest } = params;
    const { bgColor, color, mixColors, textColor } = props;
    const handledBgColor = bgColor ? handleColor({
        ...props,
        value: bgColor
    }) : null;
    const handledColor = color ? handleColor({
        ...props,
        value: color
    }) : null;
    const handledTextColor = textColor ? handleColor({
        ...props,
        value: textColor
    }) : null
    let output = {};
    
    const getHoverColor = unhandledColor => {
        const color = getColor({
            ...rest,
            theme,
            value: unhandledColor
        });
        const lightness = Color(color).lightness();

        if (lightness < 50) {
            return lightenColor(({ ratio: ratio ? 1 - ratio : .2, value: color }));
        } else { 
            return darkenColor(({ ratio: ratio ? 1 - ratio : .2, value: color }));
        }
    }

    if (mixColors) {
        return {
            bgColor: getHoverColor(handledBgColor),
            textColor: Color(handledTextColor).mix(Color(getHoverColor(handledBgColor)), .2).hex()
        }
    } else {
        return {
            bgColor: handledBgColor ? getHoverColor(handledBgColor) : '',
            color: handledColor ? getHoverColor(handledColor) : '',
            textColor: handledTextColor ? getHoverColor(handledTextColor) : ''
        }

        if (handledBgColor) {
            output.bgColor = getHoverColor(handledBgColor)
        }

        if (handledColor) {
            output.color = getHoverColor(handledColor)
        }

        if (handledTextColor) {
            output.textColor = getHoverColor(handledTextColor)
        }
        
        return output
    }
}

export const lightenColor = props => {
    const { lighten, ratio, value } = props;
    const lightness = Color(value).lightness();
    const finalRatio = !isNaN(parseInt(lighten)) ? lighten : (ratio || defaultRatio);

    return Color(value).lightness(lightness + (100 - lightness) * finalRatio).hex()
}

export const opaqueColor = props => {
    const { opacity, ratio } = props;
    const handledValue = getColor(props);

    return Color(handledValue).alpha(!isNaN(parseInt(opacity)) ? opacity : (ratio || defaultRatio)).hexa();
}

export const textColor = ({
    key = 'color',
    props,
    theme,
    value,
    ...rest
}) => {
    const textColor = getColor({
        ...rest,
        theme,
        value
    });
    const handledTextColor = handleColor({
        ...props,
        value: textColor
    })

    return {
        key,
        value: handledTextColor
    };
}

// Color props
export const colorProps = {
    'bgColor': {
        aliases: [
            'bg.color',
            'background.color',
            'backgroundColor'
        ],
        fn: bgColor,
        key: 'background-color',
    },
    'color': {
        fn: color
    },
    'gradient': {
        aliases: [
            'bg.gradient',
            'gradient'
        ],
        fn: gradient
    },
    'text.color': {
        aliases: ['textColor'],
        fn: textColor,
        key: 'color'
    },
}