import Test from './components/Test/Test.njs';

// Props
import { allProps, allStates, getPropByAlias } from './props';

// Utils
import { getSize } from './utils/getSize';

// Styles
import { ComponentStyle } from './components/Component/Component.style';

// Nullstack UI
const acceptableTypes = [
    'a',
    'body',
    'button',
    'code',
    'div',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'i',
    'img',
    'input',
    'label',
    'p',
    'pre',
    'select',
    'span',
    'small',
    'strong',
    'textarea'
];
const depths = {}

let nodes = {}

const attributeHasChanged = (current, previous) => {
    if (typeof current !== typeof previous) {
        return true
    } else if (typeof current === 'string' && current !== previous) {
        return true
    } else if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
            const hasChanged = attributeHasChanged(current[i], previous[i]);

            if (!hasChanged) { return true; }
        }
    } else if (typeof current === 'object') {
        for (let attributeName in current) {
            if (!previous[attributeName]) {
                return true
            }

            const hasChanged = attributeHasChanged(current[attributeName], previous[attributeName])

            if (!hasChanged) { return true; }
        }
    }

    return false
}


const attributesHaveChanged = ({ current, previous }) => {
    const prevNode = previous?.node

    if (!current?.attributes || !prevNode?.attributes) { return true }
    
    const { bind: currentBind, children: currentChildren, class: currentClass, 'data-id': currentDataID, __self: currentSelf, __source: currentSource, ...currentAttributes } = current.attributes;
    const { bind: prevBind, children: prevChildren, class: prevClass, 'data-id': prevDataID, __self: prevSelf, __source: prevSource, ...prevAttributes } = prevNode.attributes;

    for (const attributeName in currentAttributes) {
        if (typeof prevAttributes[attributeName] === 'function') {
            continue
        }

        if (prevAttributes[attributeName] == null) {
            return true
        }

        const hasChanged = attributeHasChanged(currentAttributes[attributeName], prevAttributes[attributeName])

        if (hasChanged) {
            return true;
        }
    }

    return false
}

class NullstackUI {
    context;

    constructor({ keepAttributes, theme = {} }) {
        this.client = true;
        this.keepAttributes = keepAttributes;
        this.server = true;
        this.storedElements = [];
        this.theme = theme;
    }

    load(context) {
        this.context = context;
        this.storedElements = [];
    }

    transform(params) {
        if (!this.context) { return false }

        const { depth, node } = params;
        let style;

        if (!node) { return false; }

        const identifier = depth
        const { columnNumber, fileName, lineNumber } = node?.attributes?.__source || {}
        const tempIdentifier = fileName ? `${fileName}@${lineNumber}:${columnNumber}` : ''

        if (identifier && !nodes[identifier]) {
            if (!nodes[identifier]) {
                nodes[identifier] = {}
            }
        }

        if (!match({ node })) { return false; };

        const attributesChanged = nodes[identifier] ? attributesHaveChanged({ current: { ...node }, previous: nodes[identifier] }) : true;

        if (!attributesChanged) {
            console.log('no attributes changed', tempIdentifier)
            return false;
        }

        if (typeof window !== 'undefined' && window.matchMedia) {
            this.context.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        if (attributesChanged) {
            style = ComponentStyle({
                context: this.context,
                props: {
                    ...node.attributes
                },
                theme: this.theme
            });
        }

        if (nodes[identifier]) {
            nodes[identifier] = {
                node: { ...node },
                style
            }
        }

        depths[depth] = {
            node: { ...node },
            style
        };

        if (!this.keepAttributes) {
            for (let attribute in node.attributes) {
                if (allProps[attribute] || allStates[attribute] || getPropByAlias(attribute)) {
                    delete node.attributes[attribute];
                }
            }
        }
        

        if (node.attributes && typeof window !== 'undefined' && window.matchMedia) {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', event => {
                    this.context.darkMode = event.matches;
                });

            node.attributes.class = [node?.attributes?.class, style].join(' ');
        }
    }
}

function match({ node }) {
    if (node.attributes?.hasOwnProperty('bypass')) {
        if (node.attributes.bypass) {
            node.type = ({ children }) => {
                return children;
            }
        }
    }

    if (node.attributes?.hasOwnProperty('if')) {
        if (!node.attributes.if) {
            node.type = false;
            delete node.attributes;
            delete node.children;
        }
    }

    return (
        node &&
        acceptableTypes.indexOf(node.type) > -1
    )
}

export default NullstackUI
export {
    getSize,
    Test
}