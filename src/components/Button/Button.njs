import Nullstack from 'nullstack';
import { css } from '@emotion/css';

import { ButtonStyle } from './Button.style';

export default class Button extends Nullstack {
    render({
        children,
        project,
        ...props
    }) {
        console.log('project', project);

        return (
            <button class={ButtonStyle({ props, theme: project.theme })}>{children}</button>
        )
    }
}