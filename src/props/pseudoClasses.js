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
    '_not': {
        fn: not
    },
}