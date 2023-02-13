import { handleProps } from '.';
import { getValue } from '../utils/getValue';

const aliases = [
    {
        alias: 'auto',
        value: 'auto'
    },
    {
        alias: 'full',
        value: '1 / -1'
    }
]

const autoAliases = [
    {
        alias: 'auto',
        value: 'auto'
    },
    {
        alias: 'fr',
        value: 'minmax(0, 1fr)'
    },
    {
        alias: 'max',
        value: 'max-content'
    },
    {
        alias: 'min',
        value: 'min-content'
    }
]

// Base
export const grid = ({ theme, value }) => {
    if (value === true) {
        return {
            key: 'display',
            value: 'grid'
        }
    } else if (Array.isArray(value)) {
        if (value[0] === true && typeof value[1] === 'object') {
            const handled = {};
            let handledProps;
    
            for (let key in value[1]) {
                handled[`grid.${key}`] = value[1][key];
            }
    
            handled.grid = true;
    
            handledProps = handleProps({ props: handled, theme });
    
            return Object.keys(handledProps.elementProps).map(propName => ({
                key: propName,
                value: handledProps.elementProps[propName]
            }));
        } else {
            return {}
        }
    } else if (typeof value === 'object') {
        const handled = {};
        let handledProps;

        for (let key in value) {
            handled[`grid.${key}`] = value[key];
        }

        if (value.value) {
            handled.grid = value.value;
        }

        handledProps = handleProps({ props: handled, theme });

        return Object.keys(handledProps.elementProps).map(propName => ({
            key: propName,
            value: handledProps.elementProps[propName]
        }));
    }
}

// Properties
const auto = ({
    key,
    value
}) => {
    const alias = typeof value === 'string' ? autoAliases.find(({ alias }) => alias === value) : null;
    let handledValue = alias?.value || value;

    if (!isNaN(handledValue)) {
        handledValue = getValue({ unit: 'px', value: handledValue });
    }

    return {
        key,
        value: handledValue
    }
}

const cell = ({ 
    key,
    subject,
    value
}) => {
    const alias = typeof value === 'string' ? aliases.find(({ alias }) => alias === value) : null;
    let handledValue = 'auto';

    if (alias?.value) {
        handledValue = alias.value;
    } else if (!isNaN(value)) {
        if (key === `grid-${subject}`) {
            handledValue = `span ${value} / span ${value}`;
        } else {
            handledValue = value;
        }
    }

    return {
        key,
        value: handledValue
    }
}

const columns = ({ value }) => {
    return {
        key: 'grid-template-columns',
        value: !isNaN(value) ? `repeat(${value}, minmax(0, 1fr))` : value
    }
}

const gap = ({ value }) => {
    return {
        key: 'gap',
        value: getValue({
            unit: 'px',
            value
        })
    }
}

const rows = ({ value }) => {
    return {
        key: 'grid-template-rows',
        value: `repeat(${value}, minmax(0, 1fr))`
    }
}

export const gridProps = {
    'grid': {
        fn: grid
    },
    'grid.autoColumns': {
        aliases: [
            'autoCols',
            'autoColumns',
            'grid.autoCols',
        ],
        fn: auto,
        key: 'grid-auto-columns'
    },
    'grid.autoFlow': {
        aliases: [
            'autoFlow'
        ],
        key: 'grid-auto-flow'
    },
    'grid.autoRows': {
        aliases: [
            'autoRows',
            'autoRows',
            'grid.autoRows',
        ],
        fn: auto,
        key: 'grid-auto-rows'
    },
    'grid.columns': {
        aliases: [
            'gridCols',
            'grid.cols',
            'grid.templateCols',
            'grid.templateColumns',
            'templateCols'
        ],
        fn: columns
    },
    'grid.columnEnd': {
        aliases: [
            'colEnd',
            'columnEnd',
            'grid.colEnd'
        ],
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-column-end'
    },
    'grid.columnSpan': {
        aliases: [
            'colSpan',
            'columnSpan',
            'grid.colSpan'
        ],
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-column'
    },
    'grid.columnStart': {
        aliases: [
            'colStart',
            'columnStart',
            'grid.colStart'
        ],
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-column-start'
    },
    'grid.flow': {
        key: 'grid-auto-flow'
    },
    'grid.gap': {
        aliases: ['gap'],
        fn: gap
    },
    'grid.rows': {
        aliases: [
            'grid.templateRows'
        ],
        fn: rows
    },
    'grid.rowEnd': {
        aliases: [
            'rowEnd'
        ],
        fn: params => cell({
            ...params,
            subject: 'row'
        }),
        key: 'grid-row-end'
    },
    'grid.rowSpan': {
        aliases: [
            'rowSpan',
        ],
        fn: params => cell({
            ...params,
            subject: 'row'
        }),
        key: 'grid-row'
    },
    'grid.rowStart': {
        aliases: [
            'rowStart'
        ],
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-row-start'
    },
}