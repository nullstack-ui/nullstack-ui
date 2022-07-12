import Color from 'color';

const defaultRatio = .5;

export const color = props => {
    if (props.darken) {
        return darkenColor(props);
    } else if (props.faded) {
        return fadedColor(props);
    } else if (props.lighten) {
        return lightenColor(props);
    } else {
        return props.value;
    }
}

export const darkenColor = props => {
    const { darken, value } = props;

    return Color(value).darken(!isNaN(parseInt(darken)) ? darken : defaultRatio);
}

export const fadedColor = props => {
    const { faded, value } = props;

    return Color(value).fade(!isNaN(parseInt(faded)) ? faded : defaultRatio);
}

export const lightenColor = props => {
    const { lighten, value } = props;

    return Color(value).lighten(!isNaN(parseInt(lighten)) ? lighten : defaultRatio);
}