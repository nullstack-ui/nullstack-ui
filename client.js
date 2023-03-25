import Nullstack from 'nullstack';
import NullstackUI from './src';
import Application from './src/Application';

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
    _dark: {
      primary: 'black'
    },
    _light: {

    },
    primary: ({ context }) => {
      return context.isDarkMode ? 'red' : 'blue'
    },
    secondary: {
      DEFAULT: 'green',
      500: 'yellow',
      100: 'pink',
    }
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
      name: 'fat',
      props: {
        h: 'full',
        w: 'full'
      }
    },
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
  globals: {
    fonts: {
      DEFAULT: 'Inter',
      body: 'Roboto',
      fallback: ['Arial', 'Tahoma']
    },
    // fontFamily: 'Inter',
    sizeMultipliers: new sizeMultipliers,
    sizeRatio
  }
}

Nullstack.use(new NullstackUI({ theme }));

const context = Nullstack.start(Application);

context.start = async function start() {
  // https://nullstack.app/pt-br/inicializacao-da-aplicacao
}

export default context;