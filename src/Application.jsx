import Nullstack from 'nullstack';
import Home from './Home';

// Pages
import BGPropPage from '#pages/props/bg/bg';
import BorderPropPage from '#pages/props/border/border';
import ColorPropPage from '#pages/props/color/color';
import Components from '#pages/Components';
import DimensionPropPage from '#pages/props/dimension/dimension';
import Grid from '#pages/Grid';
import HTMLELements from '#pages/HTMLElements';


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
    primary: '#000'
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
  globals: {
    fontFamily: 'Inter',
    sizeMultipliers,
    sizeRatio
  },
  test: 'Teste'
}

class Application extends Nullstack {

  initiate(context) {
    context.isDarkMode = true;
  }

  prepare(context) {
    context.page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <BGPropPage route="/props/bg" />
        <BorderPropPage route="/props/border" />
        <ColorPropPage route="/props/color" />
        <DimensionPropPage route="/props/dimension" />
        <Components route="/components" />
        <Grid route="/grid" />
        <HTMLELements route="/html" />
        <Home route="/" />
      </main>
    )
  }

}

export default Application;