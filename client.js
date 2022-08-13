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

function match(node) {
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
    this.theme = theme;
  }

  transform({ node }) {
    if (!match(node)) { return false; };
    
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