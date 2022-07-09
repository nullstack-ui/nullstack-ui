import Nullstack from 'nullstack';

export default class NullstackProvider extends Nullstack {
    theme = {};

    initiate(context) {
        if (context.theme) {
            context.project.theme = context.theme;
        }
        // context.theme = theme;
        // console.log('theme', theme);
    }

    render({ children }) {
        return (
            <Wrapper key="nullstackUIWrapper">
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