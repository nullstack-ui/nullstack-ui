import Nullstack from 'nullstack';
import { css } from '@emotion/css';

import { ButtonStyle } from './Button.style';
import { darkenColor, lightenColor } from '../../props/color';

const componentProps = {
    appearance: 'none',
    bd: {
        color: 'red',
        style: 'dashed',
        width: 1
    },
    cursor: 'pointer',
    px: 1,
    // States
    // _hover: ({ bgColor }) => {
    //     return {
    //         bgColor: lightenColor({ lighten: .9, value: bgColor }).hex()
    //     }
    // },
    // _active: ({ }) => {
    //     return {
    //         bgColor: 'yellow'
    //     }
    // },
};

export default class Button extends Nullstack {
    render({
        children,
        project,
        ...props
    }) {
        return (
            <button
                class={ButtonStyle({
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