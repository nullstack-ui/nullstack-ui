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
    _hover: props => {
        const { bgColor, color, textColor } = getHoverColors(props);

        return {
            bgColor,
            color,
            textColor
        };
    },
    _active: props => {
        const { bgColor, color, textColor } = getActiveColors(props);

        return {
            bgColor,
            color,
            textColor
        };
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
                        border: 'red'
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
    render({
        children,
        project,
        ...props
    }) {
        return (
            <button
                class={ComponentStyle({
                    name: 'button',
                    props: {
                        ...componentProps,
                        ...props
                    },
                    theme: project.theme
                })}>
                {children}
            </button>
        )
    }
}