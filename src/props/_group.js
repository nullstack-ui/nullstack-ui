import { v4 as uuidv4 } from 'uuid';
import { handleProps } from '.';

const group = ({ props, theme }) => {
    const { children, group } = props;
    const array = [];
    const states = ['hover', 'active', 'focus'];

    if (group) {
        for (let state of states) {
            array.push(`&:${state} {`);
    
            for (let child of children) {
                const { _group } = child.attributes;
    
                if (_group) {
                    if (_group[`_${state}`]) {
                        const { asArray } = handleProps({
                            props: _group[`_${state}`],
                            theme
                        });
                        const id = uuidv4();
    
                        child.attributes['data-child-id'] = id;
    
                        array.push(`[data-child-id="${id}"] {`);
                        array.push(...asArray);
                        array.push('}');
                    }
                }
            }
    
            array.push(`}`);
        }
    }

    return {
        asArray: array
    }
}

export const groupProps = {
    'group': {
        fn: group
    }
}