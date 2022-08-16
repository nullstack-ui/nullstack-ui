import Nullstack, { } from 'nullstack';
import Application from './src/Application';
import { ComponentStyle } from './src/components/Component/Component.style';
import { allProps, allStates, getPropByAlias } from './src/props';

const sizeRatio = 1.1;

class sizeMultipliers {
  lg;
  md = 1;
  sm;
  xl;
  xs;

  constructor() {
    this.lg = this.md * sizeRatio;
    this.sm = this.md / sizeRatio;
    this.xl = this.lg * sizeRatio;
    this.xs = this.sm / sizeRatio;
  }
}

const theme = {
  colors: {
    primary: '#00CCDD'
  },
  components: {
    button: {
      customProps: [
        {
          name: 'clown',
          props: {
            bgColor: 'yellow'
          }
        },
        {
          name: 'wayUpHigh',
          props: {
            mt: 100
          }
        }
      ]
    }
  },
  customProps: [
    {
      name: 'testing',
      props: {
        bgColor: 'blue'
      }
    },
    {
      name: 'clown',
      props: {
        bgColor: 'yellow'
      }
    },
    {
      name: 'wayDown',
      props: {
        mt: 100
      }
    }
  ],
  test: 'test',
  globals: {
    fontFamily: 'Inter',
    sizeMultipliers,
    sizeRatio
  }
}

const acceptableTypes = [
  'a',
  'button',
  'div',
  'input',
  'select',
  'span',
  'textarea',
  'Wrapper'
];

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

// const NullstackUI = {
//   transform,
//   client: true,
//   server: true
// }

class NullstackUI {
  constructor() {
    this.client = true;
    this.server = true;
    this.storedElements = [];
    this.theme = theme;
  }

  load() {
    this.storedElements = [];
  }

  transform(params) {
    const { node } = params;

    console.log('node', node)

    if (acceptableTypes.indexOf(node.type) > -1) {
      this.storedElements.push(typeof node === 'object' ? {
        ...node
      } : node);
    }

    // node.attributes.variables = 1;

    if (!match({
      elements: this.storedElements,
      node
    })) { return false; };

    const style = ComponentStyle({
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
      node.attributes.class = style;
    }
  }
}

Nullstack.use(new NullstackUI);

const context = Nullstack.start(Application);

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
}

export default context;