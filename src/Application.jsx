import Nullstack from 'nullstack';
import Home from './Home';
import Components from './pages/Components.njs';
import NullstackProvider from './providers/NullstackProvider.njs';

const sizeRatio = 1.1;
const sizeMultipliers = {
    md: 1,

    get xl() {
        return this.lg * sizeRatio
    },
    get lg() {
        return this.md * sizeRatio
    },
    get sm() {
        return this.md / sizeRatio
    },
    get xs() {
        return this.sm / sizeRatio
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
        },
        // {
        //   name: 'variant',
        //   values: [
        //     {
        //       name: 'danger',
        //       props: {
        //         color: 'red'
        //       }
        //     },
        //     {
        //       name: 'success',
        //       props: {
        //         color: 'green'
        //       }
        //     }
        //   ]
        // }
      ]
    }
  },
  globals: {
    sizeMultipliers,
    sizeRatio
  }
}

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <NullstackProvider theme={theme}>
        <main>
          <Head />
          <Components route="/components" />
          <Home route="/" />
        </main>
      </NullstackProvider>
    )
  }

}

export default Application;