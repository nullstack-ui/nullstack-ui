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

// Utils
import { getSize } from '#utils/getSize';

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
    _focus: ({ props }) => {
        return {
            ring: {
                color: props.color,
                opacity: .4
            }
        }
    },
    _hover: ({ props, theme }) => {
        if (props) {
            const { color } = getHoverColors({
                props,
                theme
            });
            let output = {}

            // if (bgColor) {
            //     output.bgColor = bgColor
            // }

            if (color) {
                output.color = color
            }

            // if (textColor) {
            //     output.textColor = textColor
            // }

            return output;
        }
    },
    _active: ({ initialProps, theme }) => {
        if (initialProps) {
            const { color } = getActiveColors({
                props: initialProps,
                ratio: initialProps.ratio,
                theme
            });
            let output = {}

            // if (bgColor) {
            //     output.bgColor = bgColor
            // }

            if (color) {
                output.color = color
            }

            // if (textColor) {
            //     output.textColor = textColor
            // }

            return output;
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
                            if (props.color) {
                                return {
                                    color: props.color,
                                    style: 'solid',
                                    width: 1
                                };
                            }
                        },
                        textColor: ({
                            initialProps,
                            theme
                        }) => {
                            if (initialProps?.color) {
                                return initialProps.color
                            }
                        },
                        _hover: ({ initialProps, theme }) => {
                            if (initialProps?.color) {
                                const { color } = getHoverColors({
                                    props: initialProps,
                                    theme
                                });
                                const hoverProps = initialProps?._hover || {};
                    
                                return {
                                    border: {
                                        color,
                                        style: 'solid',
                                        width: 1
                                    },
                                    color,
                                    ...hoverProps
                                };
                            }
                        },
                        _active: ({ initialProps, theme }) => {
                            if (initialProps?.color) {
                                const {
                                    color
                                } = getActiveColors({
                                    props: initialProps,
                                    ratio: initialProps.ratio,
                                    theme
                                });
                                const activeProps = initialProps?._active || {};

                                return {
                                    border: {
                                        color,
                                        style: 'solid',
                                        width: 1
                                    },
                                    color,
                                    ...activeProps
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