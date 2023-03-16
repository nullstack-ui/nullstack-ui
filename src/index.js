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

const attributeHasChanged = ({
    context,
    current,
    currentNode,
    previous,
    previousNode,
    theme
}) => {
    if (typeof current !== typeof previous) {
        return true
    } else if (typeof current === 'string' && current !== previous) {
        return true
    } else if (typeof current === 'function') {
        const currentObj = current({ context, props: currentNode.attributes, theme })
        const previousObj = previous({ context, props: previousNode.attributes, theme })

        for (let attributeName in currentObj) {
            if (!previousObj[attributeName]) {
                return true
            }

            const hasChanged = attributeHasChanged({
                context,
                current: currentObj[attributeName],
                currentNode,
                previous: previousObj[attributeName],
                previousNode,
                theme
            })

            if (hasChanged) { return true; }
        }
    } else if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
            const hasChanged = attributeHasChanged({
                context,
                current: current[i],
                currentNode,
                previous: previous[i],
                previousNode,
                theme
            });

            if (hasChanged) { return true; }
        }
    } else if (typeof current === 'object') {
        for (let attributeName in current) {
            if (!previous[attributeName]) {
                return true
            }

            const hasChanged = attributeHasChanged({
                context,
                current: current[attributeName], 
                currentNode,
                previous: previous[attributeName],
                previousNode,
                theme
            })

            if (hasChanged) { return true; }
        }
    }

    return false
}


const attributesHaveChanged = ({ 
    context,
    current, 
    previous,
    theme
}) => {
    const prevNode = previous?.node

    if (!current?.attributes || !prevNode?.attributes) { return true }
    
    const { bind: currentBind, children: currentChildren, class: currentClass, 'data-id': currentDataID, __self: currentSelf, __source: currentSource, ...currentAttributes } = current.attributes;
    const { bind: prevBind, children: prevChildren, class: prevClass, 'data-id': prevDataID, __self: prevSelf, __source: prevSource, ...prevAttributes } = prevNode.attributes;

    for (const attributeName in currentAttributes) {
        if (typeof prevAttributes[attributeName] === 'function') {
            continue
        }

        if (prevAttributes[attributeName] == null && currentAttributes[attributeName] != null) {
            return true
        }

        const hasChanged = attributeHasChanged({
            context,
            current: currentAttributes[attributeName], 
            currentNode: current.attributes,
            previous: prevAttributes[attributeName],
            previousNode: prevNode.attributes,
            theme
        })

        if (hasChanged) {
            return true;
        }
    }

    return false
}

const storeChildIds = ({ node }) => {
    const groupChildren = node?.children

    for (let i = 0; i < groupChildren?.length; i++) {
        const child = groupChildren[i]
        const { key } = child.attributes?.__self || {}
        
        if (child.attributes?.['data-child-id']) { 
            console.log("WOT???")
            if (!nodes[key]) {
                nodes[key] = {}
            }

            nodes[key]['data-child-id'] = child.attributes['data-child-id']
        }
        
        if (child.children) {
            storeChildIds({ node: child })
        }
    }
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

        if (!match({ node })) { return false; };

        if (!nodes[identifier]) {
            nodes[identifier] = {}
        }

        const attributesChanged = nodes[identifier] ? attributesHaveChanged({ 
            context: this.context,
            current: {...node}, 
            previous: nodes[identifier],
            theme: this.theme
        }) : true;
        // const forceChange = !!node.attributes?._group || !!node.attributes?.group
        const forceChange = false

        if (typeof window !== 'undefined' && window.matchMedia) {
            this.context.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        if (attributesChanged || forceChange) {
            style = ComponentStyle({
                context: this.context,
                depth,
                props: node.attributes,
                theme: this.theme
            });
        } else {
            if (nodes[identifier]['data-child-id']) {
                node.attributes['data-child-id'] = nodes[identifier]['data-child-id']
            }

            style = nodes[identifier].style
        }

        if (node.attributes.group || node.attributes._group) {
            storeChildIds({ node })
        }

        if (nodes[identifier]) {
            nodes[identifier]['data-child-id'] = node.attributes?.['data-child-id']
            nodes[identifier].node = {...node}
            nodes[identifier].style = style
        }

        // if (!this.keepAttributes) {
        //     for (let attribute in node.attributes) {
        //         if (allProps[attribute] || allStates[attribute] || getPropByAlias(attribute)) {
        //             delete node.attributes[attribute];
        //         }
        //     }
        // }

        if (node.attributes && typeof window !== 'undefined' && window.matchMedia) {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', event => {
                    this.context.darkMode = event.matches;
                }); 
        }

        node.attributes.class = [node?.attributes?.class, style].join(' ');
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