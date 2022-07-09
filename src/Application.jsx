import Nullstack from 'nullstack';
import './Application.css';
import Button from './components/Button.njs';
import Home from './Home';
import NullstackProvider from './providers/NullstackProvider.njs';

const theme = {
  color: 'blue'
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
          <Home route="/" />
        </main>
      </NullstackProvider>
    )
  }

}

export default Application;