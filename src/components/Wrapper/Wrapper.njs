import Nullstack from 'nullstack';

import { ComponentStyle } from '../Component/Component.style';

export default class Button extends Nullstack {
    render({
        children,
        project,
        ...props
    }) {
        return (
            <div
                class={ComponentStyle({
                    props: {
                        ...props
                    },
                    theme: project.theme
                })}>
                {children}
            </div>
        )
    }
}