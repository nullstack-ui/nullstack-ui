import Nullstack from 'nullstack';

export default class NullstackProvider extends Nullstack {
    theme = {};

    prepare(context) {
        if (context.theme) {
            // context.project.theme = context.theme;
        }
    }

    render({ children }) {
        return (
            <Wrapper key="nullstackUI">
                {children}
            </Wrapper>
        )
    }
}

class Wrapper extends Nullstack {
    render({ children }) {
        return children
    }
}