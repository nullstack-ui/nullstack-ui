import { v4 as uuidv4 } from 'uuid';
import { handleProps } from '.';

const group = ({ props, theme }) => {
    const { children, group, __self = {} } = props;
    const array = [];
    const states = ['hover', 'active', 'focus'];
    const { key } = __self;

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

        if (_group) {
            if (_group[`_${state}`]) {
                const { asArray } = handleProps({
                    props: _group[`_${state}`],
                    theme
                });

                child.attributes['data-child-id'] = `${groupKey}${i}`;

                array.push(`[data-child-id="${groupKey}${i}"] {`);
                array.push(...asArray);
                array.push('}');
            }
        }

        if (child?.children) {
            const childrenCSS = getChildren({ children: child?.children, state, theme });

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