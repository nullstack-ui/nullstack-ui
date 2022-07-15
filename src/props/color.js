import Color from 'color';

const defaultRatio = .5;

export const color = props => {
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

export const darkenColor = props => {
    const { darken, ratio, value } = props;

    return Color(value).darken(!isNaN(parseInt(darken)) ? darken : (ratio || defaultRatio));
}

export const lightenColor = props => {
    const { lighten, ratio, value } = props;

    return Color(value).lighten(!isNaN(parseInt(lighten)) ? lighten : (ratio || defaultRatio));
}

export const opaqueColor = props => {
    const { opacity, ratio, value } = props;

    return Color(value).alpha(!isNaN(parseInt(opacity)) ? opacity : (ratio || defaultRatio));
}