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

    return Color(value).lightness(lightness - lightness * finalRatio);
}

export const lightenColor = props => {
    const { lighten, ratio, value } = props;
    const lightness = Color(value).lightness();
    const finalRatio = !isNaN(parseInt(lighten)) ? lighten : (ratio || defaultRatio);

    return Color(value).lightness(lightness + (100 - lightness) * finalRatio)
}

export const opaqueColor = props => {
    const { opacity, ratio, value } = props;

    return Color(value).alpha(!isNaN(parseInt(opacity)) ? opacity : (ratio || defaultRatio));
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

function lightenBy(color, ratio) {
    const lightness = color.lightness();
    return color.lightness(lightness + (100 - lightness) * ratio);
}

function darkenBy(color, ratio) {
    const lightness = color.lightness();
    return color.lightness(lightness - lightness * ratio);
}