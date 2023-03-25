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

    if (group) {
        return handleChildren({ children, params, parentId: groupId });
    }
}

const handleChildren = ({ children, params, parentId }) => {
    let handledProps = {};

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const { _group } = child.attributes || {};
        const childId = `${parentId}${i}`

        if (typeof child !== 'object' && !child.attributes) { continue; }

        child.attributes['data-group-child-id'] = childId;

        if (child.children) {
            const handledChildren = handleChildren({
                children: child.children,
                params,
                parentId: childId
            });

            handledProps = {
                ...handledProps,
                ...handledChildren
            }

            // if (!handledProps[state]) {
            //     handledProps[state] = {
            //         group: true
            //     };
            // }

            // handledProps[state][childId] = handledChildren;
        }

        if (_group) {
            for (let state of Object.keys(acceptableGroupStates)) {
                const stateProps = _group[state];

                if (stateProps) {
                    const handledStateProps = handleProps({
                        ...params,
                        props: stateProps,
                    })

                    if (!handledProps[childId]) {
                        handledProps[childId] = {
                            group: true
                        };
                    }

                    handledProps[childId][state] = handledStateProps;
                }
            }
        }
    }

    return handledProps;
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