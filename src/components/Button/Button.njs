import Nullstack from 'nullstack';
import { css } from '@emotion/css';
import Color from 'color';

import { ButtonStyle } from './Button.style';
import {
    darkenColor,
    getActiveColors,
    getHoverColors,
    lightenColor
} from '../../props/color';
import { ComponentStyle } from '../Component/Component.style';

// Utils
import { getSize } from '../../utils/getSize';

const componentProps = {
    appearance: 'none',
    bd: 'none',
    cursor: 'pointer',
    fontFamily: ({ theme }) => {
        const { globals } = theme;

        return globals.fontFamily;
    },
    fontWeight: 600,
    height: ({ props, theme }) => {
        return getSize({
            baseSize: '40px',
            props,
            theme
        });
    },
    px: '1.5em',
    radius: '.5em',
    // py: '.5em',
    // rounded: true,
    // States
    _hover: ({ props, theme }) => {
        if (props) {
            const { bgColor, color, textColor } = getHoverColors({
                props,
                theme
            });

            return {
                bgColor,
                color,
                textColor
            };
        }
    },
    _active: ({ initialProps, theme }) => {
        if (initialProps) {
            const { bgColor, color, textColor } = getActiveColors({
                props: initialProps,
                ratio: initialProps.ratio,
                theme
            });

            return {
                bgColor,
                color,
                textColor
            };
        }
    },

    // Custom props
    customProps: [
        {
            name: 'compact',
            props: {
                px: 1
            }
        },
        {
            name: 'variant',
            values: [
                {
                    name: 'outline',
                    props: {
                        bg: 'none',
                        bgColor: 'transparent',
                        border: ({ props }) => {
                            return props.color;
                        },
                        textColor: ({
                            initialProps,
                            theme
                        }) => {
                            if (initialProps) {
                                return initialProps.color
                            }
                        },
                        _hover: ({ initialProps }) => {
                            if (initialProps) {
                                const { bgColor, color, textColor } = initialProps;

                                return {
                                    bgColor,
                                    color,
                                    textColor
                                }
                            }
                        },
                        _active: ({ initialProps, theme }) => {
                            if (initialProps) {
                                const {
                                    bgColor,
                                    color,
                                    textColor
                                } = getActiveColors({
                                    props: initialProps,
                                    ratio: initialProps.ratio,
                                    theme
                                });

                                return {
                                    bgColor,
                                    border: bgColor || color,
                                    color,
                                    textColor
                                }
                            }

                        }
                    }
                },
            ]
        },
        {
            name: 'wide',
            props: {
                px: 4
            }
        }
    ]
};

export default class Button extends Nullstack {
    render({ children, ...props }) {
        return (
            <button
                {...componentProps}
                {...props}>
                {children}
            </button>
        )
    }
}