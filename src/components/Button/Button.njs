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

const componentProps = {
    appearance: 'none',
    bd: 'none',
    cursor: 'pointer',
    px: '1em',
    py: '.5em',
    rounded: true,
    // States
    _hover: params => {
        const { bgColor, color, textColor } = getHoverColors(params);

        return {
            bgColor,
            border: {
                color: 'red',
                style: 'dashed',
                width: 3
            },
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
                px: 2
            }
        },
        {
            name: 'wide',
            props: {
                px: 10
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