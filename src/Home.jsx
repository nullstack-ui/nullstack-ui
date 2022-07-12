import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
import './Home.css';
import Button from './components/Button/Button.njs';

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`;
    page.description = `${project.name} foi feito com Nullstack`;
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project }) {
    return (
      <Button
        bgColor={{
          faded: true,
          value: 'red'
        }}
        ml={1}>
        Button
      </Button>
    )
  }

}

export default Home;