import { allStates, handleProps } from '.';

const children = ({
    props,
    theme
}) => {
    const { _children } = props;
    const array = [];

    for (let _c in _children) {
        const { asArray } = handleProps({ props: _children, theme });
        const { key } = allStates[_c] || {};

        if (key) {
            array.push(`& > * {`);

            for (let line of asArray) {
                if (
                    !line.endsWith('}') &&
                    !line.startsWith('&')
                ) {
                    array.push(line);
                }
            }

            array.push('}');
        }
    }

    return {
        asArray: array
    };
}

export const not = ({
    props,
    theme
}) => {
    const { _not } = props;
    const array = [];

    for (let _n in _not) {
        const { asArray } = handleProps({ props: _not, theme });
        const { key } = allStates[_n] || {};

        if (key) {
            array.push(`&:not(${key}) {`);

            for (let line of asArray) {
                if (
                    !line.endsWith('}') &&
                    !line.startsWith('&')
                ) {
                    array.push(line);
                }
            }

            array.push('}');
        }
    }

    return {
        asArray: array
    };
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
        fn: not
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
    '_only-child': {
        key: ':only-child'
    },
}