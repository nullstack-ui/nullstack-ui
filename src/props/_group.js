import { handleProps } from '.';

const group = ({ depth, props, theme }) => {
    const { children, group, __self = {} } = props;
    const array = [];
    const states = ['hover', 'active', 'focus'];
    let key = depth;

    if (group) {
        for (let state of states) {
            array.push(`&:${state} {`);

            const childrenCSS = getChildren({ children, groupKey: key, state, theme });

            array.push(...childrenCSS);

            array.push(`}`);
        }
    }

    return {
        asArray: array
    }
}

const elements = {};

const getChildren = ({ children, groupKey, state, theme }) => {
    const array = []

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const { _group } = child.attributes || {};

        const childKey = `${groupKey}${i}`

        if (_group) {
            if (_group[`_${state}`]) {
                const handledProps = handleProps({
                    props: _group[`_${state}`],
                    theme
                });
                
                child.attributes['data-child-id'] = `${childKey}`;

                array.push(`[data-child-id="${childKey}"] {`);
                // array.push(...asArray);
                array.push('}');
            }
        }

        if (child?.children?.length) {
            const childrenCSS = getChildren({ children: child?.children, groupKey: childKey, state, theme });

            array.push(...childrenCSS);
        }
    }

    return array
}

export const groupProps = {
    'group': {
        fn: group
    }
}