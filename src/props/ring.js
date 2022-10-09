import Color from 'color';

import { darkenColor, getColor } from './color';
import { getValue } from '../utils/getValue';

const ring = ({
    key = 'box-shadow',
    theme,
    value,
    ...rest
}) => {
    let blur = 0;
    let color = 'rgba(0,0,0,.1)';
    let inset = '';
    let width = '2px';

    if (value === 'none') {
        return {
            key,
            value: 'none'
        }
    } else if (value === true) {
        // color = darkenColor({

        // })
    } else if (typeof value === 'string') {
        color = getColor({
            ...rest,
            theme,
            value
        });
    } else if (typeof value === 'object') {
        if (value.blur != null) {
            blur = getValue({
                unit: 'px',
                value: value.blur
            });
        }

        if (value.color) {
            color = getColor({
                ...rest,
                theme,
                value: value.color
            });
        }
        
        if (value.opacity != null) {
            color = Color(color).fade(1 - value.opacity)
        }

        if (value.inset) {
            inset = 'inset';
        }

        if (value.width != null) {
            width = getValue({
                unit: 'px',
                value: value.width
            });
        }
    }

    return {
        key,
        value: [inset, 0, 0, blur, width, color].join(' ').trim()
    }
}

export const ringProps = {
    'ring': {
        fn: ring
    }
}