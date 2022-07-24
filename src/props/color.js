import Color from 'color';

const defaultRatio = .5;

export const getColor = props => {
    const { theme, value } = props;

    if (typeof value === 'string') {
        return theme?.colors?.[value] || value;
    } else if (
        Array.isArray(value) &&
        typeof value[0] === 'string' &&
        typeof value[1] === 'object'
    ) {
        return handleColor({
            ...value[1],
            value: theme?.colors?.[value[0]] || value[0]
        })
    } else if (typeof value === 'object') {
        return handleColor({
            ...value,
            value: theme?.colors?.[value.value] || value.value
        });
    }
}

// Handle color
export const handleColor = props => {
    let handledColor = props.value;

    if (props.darken) {
        handledColor = darkenColor(props);
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
    value
}) => {
    return {
        key,
        value: getColor({
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

export const getActiveColors = params => {
    const { props, theme } = params;
    const { bgColor, color, textColor } = props._hover || props;

    const getActiveColor = unhandledColor => {
        const color = getColor({
            theme,
            value: unhandledColor
        });

        if (color && Color(color).isDark()) {
            return lightenColor(({ ratio: .35, value: color }));
        } else if (color && Color(color).isLight()) {
            return darkenColor(({ ratio: .35, value: color }));
        }
    }

    return {
        bgColor: getActiveColor(bgColor),
        color: getActiveColor(color),
        textColor: getActiveColor(textColor)
    }
}

export const getHoverColors = params => {
    const { props, theme } = params;
    const { bgColor, color, textColor } = props;

    const getHoverColor = unhandledColor => {
        const color = getColor({
            theme,
            value: unhandledColor
        });

        if (color && Color(color).isDark()) {
            return lightenColor(({ ratio: .2, value: color }));
        } else if (color && Color(color).isLight()) {
            return darkenColor(({ ratio: .2, value: color }));
        }
    }

    return {
        bgColor: getHoverColor(bgColor),
        color: getHoverColor(color),
        textColor: getHoverColor(textColor)
    }
}

export const lightenColor = props => {
    const { lighten, ratio, value } = props;
    const lightness = Color(value).lightness();
    const finalRatio = !isNaN(parseInt(lighten)) ? lighten : (ratio || defaultRatio);

    return Color(value).lightness(lightness + (100 - lightness) * finalRatio).hex()
}

export const opaqueColor = props => {
    const { opacity, ratio, value } = props;

    return Color(value).alpha(!isNaN(parseInt(opacity)) ? opacity : (ratio || defaultRatio)).hex();
}

export const textColor = ({
    key = 'color',
    theme,
    value
}) => {
    return {
        key,
        value: getColor({
            theme,
            value
        })
    };
}