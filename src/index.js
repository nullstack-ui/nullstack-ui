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

export let cache = {};
export const addToCache = ({
    cachedProps,
    initialValue,
    propName,
}) => {
    if (!cache[propName]) {
        cache[propName] = {};
    }

    cache[propName][initialValue] = cachedProps;
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

        if (!node || !match({ node })) { return false; };

        if (typeof window !== 'undefined' && window.matchMedia) {
            this.context.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        
        if (node.attributes?.group) {
            node.attributes['data-group-id'] = depth;
        }

        const { className } = ComponentStyle({
            addToCache,
            cache,
            context: this.context,
            depth,
            props: node.attributes,
            theme: this.theme
        });

        if (node.attributes && typeof window !== 'undefined' && window.matchMedia) {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', event => {
                    this.context.darkMode = event.matches;
                }); 
        }

        node.attributes.class = [node?.attributes?.class, className].filter(className => className).join(' ');
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
}