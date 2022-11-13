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
    'button',
    'div',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'i',
    'input',
    'p',
    'select',
    'span',
    'strong',
    'textarea'
];

class NullstackUI {
    context;

    constructor({ theme = {} }) {
        this.client = true;
        this.server = true;
        this.storedElements = [];
        this.theme = theme;
    }

    load(context) {
        this.context = context;
        this.storedElements = [];
    }

    transform(params) {
        const { node } = params;
        let style;

        if (acceptableTypes.indexOf(node.type) > -1) {
            this.storedElements.push(typeof node === 'object' ? {
                ...node
            } : node);
        }

        if (!match({
            elements: this.storedElements,
            node
        })) { return false; };

        this.context.darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        style = ComponentStyle({
            context: this.context,
            props: {
                ...node.attributes
            },
            theme: this.theme
        });

        for (let attribute in node.attributes) {
            if (allProps[attribute] || allStates[attribute] || getPropByAlias(attribute)) {
                delete node.attributes[attribute];
            }
        }

        if (node.attributes) {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', event => {
                    context.darkMode = event.matches;
                });

            node.attributes.class = [node?.attributes?.class, style].join(' ');
        }
    }
}

function match({ elements, node }) {
    const key = node?.attributes?.__self?.key;

    if (node.attributes && key) {
        node.attributes['data-id'] = key;
    }

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

    if (node.attributes?.hasOwnProperty('else')) {
        const previousElement = elements[elements.length - 2];

        if (previousElement?.attributes?.if) {
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