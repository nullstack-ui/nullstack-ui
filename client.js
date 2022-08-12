import Nullstack, { } from 'nullstack';
import Application from './src/Application';
import { ComponentStyle } from './src/components/Component/Component.style';

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
  globals: {
    fontFamily: 'Inter',
    sizeMultipliers,
    sizeRatio
  }
}

function match(node) {
  const acceptableTypes = [
    'a',
    'Button',
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

function transform({ theme, node, router, params }) {
  // console.log('node', node);
  const style = ComponentStyle({
    props: {
      ...node.attributes
    },
    theme
  });

  if (node.attributes) {
    node.attributes.class = style;
  }
}

const NullstackUI = {
  match,
  transform: params => transform({ ...params }),
  client: true,
  server: true
}

Nullstack.use(NullstackUI, theme);

const context = Nullstack.start(Application);

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
}

export default context;