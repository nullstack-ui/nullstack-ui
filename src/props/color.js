import Color from 'color';

const defaultRatio = .5;

export const getColor = props => {
    const { theme, value } = props;

    if (typeof value === 'string') {
        const themeColor = getThemeColor({
            ...props,
            value
        });

        if (themeColor && typeof themeColor === 'function') {
            return themeColor(props);
        } else if (themeColor && typeof themeColor === 'object') {
            return getColorIntensity(props);
        } else {
            return themeColor || value;
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
    let handledColor = props.value;

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

// Manipulations
export const bgColor = ({
    key = 'background-color',
    theme,
    value,
    ...rest
}) => {
    return {
        key,
        value: getColor({
            ...rest,
            theme,
            value
        })
    };
}

export const color = props => {
    const { value } = props;
    const bgColor = getColor(props);

    const textColor = Color(bgColor).isDark() ? lightenColor({
        ratio: value?.ratio || .9,
        value: bgColor
    }) : darkenColor({
        ratio: value?.ratio || .9,
        value: bgColor
    });

    return [
        {
            key: 'background-color',
            value: bgColor
        },
        {
            key: 'color',
            value: textColor
        }
    ]
}

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

    const getActiveColor = unhandledColor => {
        const color = getColor({
            ...rest,
            theme,
            value: unhandledColor
        });

        if (color && Color(color).isDark()) {
            return lightenColor(({ ratio: ratio ? 1 - ratio : .35, value: color }));
        } else if (color && Color(color).isLight()) {
            return darkenColor(({ ratio: ratio ? 1 - ratio : .35, value: color }));
        }
    }

    if (mixColors) {
        return {
            bgColor: getActiveColors(bgColor || props.bgColor),
            textColor: Color(textColor).mix(Color(getActiveColor(bgColor)), .2).hex()
        }
    } else {
        return {
            bgColor: getActiveColor(bgColor),
            color: getActiveColor(color),
            textColor: getActiveColor(textColor)
        }
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
    // console.log('intensity', value);
}

export const getHoverColors = params => {
    const { props, ratio, theme, ...rest } = params;
    const { bgColor, color, mixColors, textColor } = props;

    const getHoverColor = unhandledColor => {
        const color = getColor({
            ...rest,
            theme,
            value: unhandledColor
        });

        if (color && Color(color).isDark()) {
            return lightenColor(({ ratio: ratio ? 1 - ratio : .2, value: color }));
        } else if (color && Color(color).isLight()) {
            return darkenColor(({ ratio: ratio ? 1 - ratio : .2, value: color }));
        }
    }

    if (mixColors) {
        return {
            bgColor: getHoverColor(bgColor),
            textColor: Color(textColor).mix(Color(getHoverColor(bgColor)), .2).hex()
        }
    } else {
        return {
            bgColor: getHoverColor(bgColor),
            color: getHoverColor(color),
            textColor: getHoverColor(textColor)
        }
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
    theme,
    value,
    ...rest
}) => {
    return {
        key,
        value: getColor({
            ...rest,
            theme,
            value
        })
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
    'textColor': {
        fn: textColor
    },
}