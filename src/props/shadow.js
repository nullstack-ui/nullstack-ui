import { getColor } from './color';
import { getValue } from '../utils/getValue';

const aliases = [
    {
        alias: 'sm',
        value: {
            blur: 2,
            color: 'rgba(0,0,0,.1)',
            h: 0,
            spread: 0,
            v: 1,
        }
    },
]

const shadow = ({
    key = 'box-shadow',
    theme,
    value,
    ...rest
}) => {
    const alias = typeof value === 'string' ? aliases.find(({ alias }) => alias === value) : null;
    let blur = '6px';
    let color = 'rgba(0,0,0,.1)';
    let h = 0;
    let handledValue;
    let inset = value.inset ? 'inset' : '';
    let spread = '-1px';
    let v = '4px';

    if (!alias && typeof value === 'string') {
        color = getColor({
            ...rest,
            theme,
            value
        });
    } else if (alias || typeof value === 'object') {
        handledValue = alias.value || value;

        if (handledValue.blur != null) {
            blur = getValue({
                unit: 'px',
                value: handledValue.blur
            });
        }

        if (handledValue.color) {
            color = getColor({
                ...rest,
                theme,
                value: handledValue.color
            });
        }

        if (handledValue.h != null) {
            h = getValue({
                unit: 'px',
                value: handledValue.h
            });
        }

        if (handledValue.inset) {
            inset = 'inset';
        }

        if (handledValue.spread != null) {
            spread = getValue({
                unit: 'px',
                value: handledValue.spread
            });
        }

        if (handledValue.v != null) {
            v = getValue({
                unit: 'px',
                value: handledValue.v
            });
        }

    }

    return {
        key,
        value: [inset, h, v, blur, spread, color].join(' ').trim()
    }
}

export const shadowProps = {
    'boxShadow': {
        aliases: ['shadow'],
        fn: shadow,
        key: 'box-shadow'
    },
    'textShadow': {
        fn: shadow,
        key: 'text-shadow'
    }
}