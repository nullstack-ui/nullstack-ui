import { allStates, handleProps } from '.';

export const not = ({
    cache,
    context,
    props,
    theme
}) => {
    const { _not } = props;
    const array = [];
    const selectors = [];

    for (let _n in _not) {
        const handledProps = handleProps({ cache, context, props: _not, theme });
        const { key } = allStates[_n] || {};

        if (key) {
            selectors.push({
                selector: `:not(${key})`,
                style: Object.values(handledProps).map(res => ({
                    key: res.style[0]?.key,
                    value: res.style[0]?.value
                }))
            });
        }

        // if (key) {
        //     array.push(`&:not(${key}) {`);

        //     for (let line of styleAsArray) {
        //         if (
        //             !line.endsWith('}') &&
        //             !line.startsWith('&')
        //         ) {
        //             array.push(line);
        //         }
        //     }

        //     array.push('}');
        // }
    }

    return {
        selector: selectors,
    }
}

const nthChild = ({
    key,
    propKey,
    props,
    theme
}) => {
    const array = [];
    let childProps;
    let index;

    if (Array.isArray(props[propKey])) {
        childProps = props[propKey][1];
        index = props[propKey][0];
    } else if (typeof props[propKey] === 'object') {
        childProps = props[propKey].props;
        index = props[propKey].index;
    }

    if (index != null && Object.values(childProps).length) {
        array.push(`&${key}(${index}) {`);

        for (let c in childProps) {
            const { asArray } = handleProps({ props: childProps, theme });

            array.push(...asArray);
        }

        array.push('}');
    }

    return {
        asArray: array
    };
}

export const pseudoClasses = {
    '_children': {
        key: '> *'
    },
    '_even': {
        key: ':nth-child(even)'
    },
    '_firstChild': {
        key: ':first-child'
    },
    '_firstOfType': {
        key: ':first-of-type'
    },
    '_lastChild': {
        key: ':last-child'
    },
    '_lastOfType': {
        key: ':last-of-type'
    },
    '_not': {
        fn: not,
    },
    '_nthChild': {
        fn: params => nthChild({
            ...params,
            key: ':nth-child',
            propKey: '_nthChild',
        }),
    },
    '_nthLastChild': {
        fn: params => nthChild({
            ...params,
            key: ':nth-last-child',
            propKey: '_nthLastChild',
        }),
    },
    '_nthLastOfType': {
        fn: params => nthChild({
            ...params,
            key: ':nth-last-of-type',
            propKey: '_nthLastOfType',
        }),
    },
    '_nthOfType': {
        fn: params => nthChild({
            ...params,
            key: ':nth-of-type',
            propKey: '_nthOfType',
        }),
    },
    '_odd': {
        key: ':nth-child(odd)'
    },
    '_onlyChild': {
        key: ':only-child'
    },
}