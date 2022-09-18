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
    {
        alias: 'md',
        value: [
            {
                blur: 3,
                color: 'rgba(0,0,0,.07)',
                h: 0,
                spread: 0,
                v: 4,
            },
            {
                blur: 2,
                color: 'rgba(0,0,0,.06)',
                h: 0,
                spread: 0,
                v: 2,
            }
        ]
    },
    {
        alias: 'lg',
        value: [
            {
                blur: 8,
                color: 'rgba(0,0,0,.04)',
                h: 0,
                spread: 0,
                v: 10,
            },
            {
                blur: 4,
                color: 'rgba(0,0,0,.01)',
                h: 0,
                spread: 0,
                v: 3,
            }
        ]
    },
    {
        alias: 'xl',
        value: [
            {
                blur: 13,
                color: 'rgba(0,0,0,.03)',
                h: 0,
                spread: 0,
                v: 20,
            },
            {
                blur: 5,
                color: 'rgba(0,0,0,.08)',
                h: 0,
                spread: 0,
                v: 8,
            }
        ]
    },
]

const getShadow = ({ theme, value, ...rest }) => {
    const defaultProps = {
        blur: '6px',
        color: 'rgba(0,0,0,.1)',
        h: 0,
        inset: false,
        spread: '-1px',
        v: '4px'
    };
    const shadowArr = [];
    let finalProps;

    if (Array.isArray(value)) {
        for (let v of value) {
            const finalProps = {
                ...defaultProps,
                ...v
            }

            shadowArr.push({
                blur: getValue({
                    unit: 'px',
                    value: finalProps.blur
                }),
                color: getColor({
                    ...rest,
                    theme,
                    value: finalProps.color
                }),
                h: getValue({
                    unit: 'px',
                    value: finalProps.h
                }),
                inset: finalProps.inset ? 'inset' : '',
                spread: getValue({
                    unit: 'px',
                    value: finalProps.spread
                }),
                v: getValue({
                    unit: 'px',
                    value: finalProps.v
                }),
            });
        }

        return shadowArr;
    } else {
        finalProps = {
            ...defaultProps,
            ...value
        }

        return {
            blur: getValue({
                unit: 'px',
                value: finalProps.blur
            }),
            color: getColor({
                ...rest,
                theme,
                value: finalProps.color
            }),
            h: getValue({
                unit: 'px',
                value: finalProps.h
            }),
            inset: finalProps.inset ? 'inset' : '',
            spread: getValue({
                unit: 'px',
                value: finalProps.spread
            }),
            v: getValue({
                unit: 'px',
                value: finalProps.v
            }),
        }
    }
}

const shadow = ({
    key = 'box-shadow',
    theme,
    value,
    ...rest
}) => {
    const alias = typeof value === 'string' ? aliases.find(({ alias }) => alias === value) : null;
    let color;
    let handledValue;

    if (!alias && typeof value === 'boolean') {
        handledValue = getShadow({
            ...rest,
            theme,
            value: {}
        });
    } else if (!alias && typeof value === 'string') {
        color = getColor({
            ...rest,
            theme,
            value
        });

        handledValue = getShadow({
            ...rest,
            theme,
            value: {
                color
            },
        });
    } else if (Array.isArray(alias.value) || Array.isArray(value)) {
        handledValue = getShadow({
            ...rest,
            theme,
            value: alias.value || value
        });
    } else if (alias || typeof value === 'object') {
        handledValue = getShadow({
            ...rest,
            theme,
            value: alias.value || value
        });
    }

    if (Array.isArray(handledValue)) {
        return {
            key,
            value: handledValue.map(v => [
                v.inset,
                v.h,
                v.v,
                v.blur,
                v.spread,
                v.color
            ].join(' ').trim()).join(', ').trim()
        }
    } else {
        return {
            key,
            value: [
                handledValue.inset,
                handledValue.h,
                handledValue.v,
                handledValue.blur,
                handledValue.spread,
                handledValue.color
            ].join(' ').trim()
        }
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