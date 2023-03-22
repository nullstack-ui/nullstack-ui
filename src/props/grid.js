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

        return Object.values(handledProps).map(prop => ({
            key: prop.style[0].key,
            value: prop.style[0].value
        }))
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
        fn: auto,
        key: 'grid-auto-columns'
    },
    'autoCols': { aliasFor: 'grid.autoColumns' },
    'autoColumns': { aliasFor: 'grid.autoColumns' },
    'grid.autoCols': { aliasFor: 'grid.autoColumns' },

    'grid.autoFlow': {
        key: 'grid-auto-flow'
    },
    'autoFlow': { aliasFor: 'grid.autoFlow' },

    'grid.autoRows': {
        fn: auto,
        key: 'grid-auto-rows'
    },
    'autoRows': { aliasFor: 'grid.autoRows' },
    'grid.autoRows': { aliasFor: 'grid.autoRows' },

    'grid.columns': {
        fn: columns
    },
    'gridCols': { aliasFor: 'grid.columns' },
    'grid.cols': { aliasFor: 'grid.columns' },
    'grid.templateCols': { aliasFor: 'grid.columns' },
    'grid.templateColumns': { aliasFor: 'grid.columns' },
    'templateCols': { aliasFor: 'grid.columns' },

    'grid.columnEnd': {
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-column-end'
    },
    'colEnd': { aliasFor: 'grid.columnEnd' },
    'columnEnd': { aliasFor: 'grid.columnEnd' },
    'grid.colEnd': { aliasFor: 'grid.columnEnd' },

    'grid.columnSpan': {
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-column'
    },
    'colSpan': { aliasFor: 'grid.columnSpan' },
    'columnSpan': { aliasFor: 'grid.columnSpan' },
    'grid.colSpan': { aliasFor: 'grid.columnSpan' },

    'grid.columnStart': {
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-column-start'
    },
    'colStart': { aliasFor: 'grid.columnStart' },
    'columnStart': { aliasFor: 'grid.columnStart' },
    'grid.colStart': { aliasFor: 'grid.columnStart' },

    'grid.flow': {
        key: 'grid-auto-flow'
    },
    'grid.gap': {
        fn: gap
    },
    'grid.gap': { aliasFor: 'grid.gap' },

    'grid.rows': {
        fn: rows
    },
    'grid.templateRows': { aliasFor: 'grid.rows' },

    'grid.rowEnd': {
        fn: params => cell({
            ...params,
            subject: 'row'
        }),
        key: 'grid-row-end'
    },
    'rowEnd': { aliasFor: 'grid.rowEnd' },

    'grid.rowSpan': {
        fn: params => cell({
            ...params,
            subject: 'row'
        }),
        key: 'grid-row'
    },
    'rowSpan': { aliasFor: 'grid.rowSpan' },

    'grid.rowStart': {
        fn: params => cell({
            ...params,
            subject: 'column'
        }),
        key: 'grid-row-start'
    },
    'rowStart': { aliasFor: 'grid.rowStart' },
}