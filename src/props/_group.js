import { handleProps } from '.';

export const acceptableGroupStates = {
    '_active': ':active',
    '_hover': ':hover',
    '_focus': ':focus',
};

const group = params => {
    const { depth, props } = params;
    const { children, group } = props;
    const groupId = depth;
    const handledProps = {};

    if (group) {
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const { _group } = child.attributes || {};
            const childId = `${groupId}${i}`

            child.attributes['data-group-child-id'] = childId;
    
            if (_group) {
                for (let state of Object.keys(acceptableGroupStates)) {
                    const stateProps = _group[state];
    
                    if (stateProps) {
                        const handledStateProps = handleProps({
                            ...params,
                            props: stateProps,
                        })

                        if (!handledProps[state]) {
                            handledProps[state] = {
                                group: true
                            };
                        }

                        handledProps[state][childId] = handledStateProps;
                        // child.attributes[state] = stateProps;
                    }
                }
                // child.attributes['data-group-child-id'] = childId;
            }
        }
        // const handledChildren = handleChildren({ 
        //     children, 
        //     groupId: depth,
        // })
        // for (let state of states) {
        //     array.push(`&:${state} {`);

        //     const childrenCSS = getChildren({ children, groupKey: key, state, theme });

        //     array.push(...childrenCSS);

        //     array.push(`}`);
        // }
    }

    return handledProps
}

const handleChildren = ({ children, groupId }) => {
    

    

    console.log('children', children)
}

const groupChild = params => {
    const { props } = params;
    const handledProps = handleProps({
        ...params,
        props: props._group
    });

    for (const propName in handledProps) {
        const prop = handledProps[propName];

        prop.groupChild = true;
    }

    return handledProps;
}

export const groupProps = {
    'group': {
        fn: group
    },
    // '_group': {
    //     fn: groupChild
    // }
}