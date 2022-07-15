import Nullstack from 'nullstack';
import Logo from 'nullstack/logo';
import './Home.css';
import Button from './components/Button/Button.njs';
import Wrapper from './components/Wrapper/Wrapper.njs';

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
      <Wrapper
        bgColor={{
          opacity: 1,
          value: 'blue'
        }}
        flex={{
          alH: 'center',
          alV: 'center',
          value: true
        }}
        h={500}
        p={1}
        w="50%"
        _hover={{
          w: '100%'
        }}
        _active={{
          bgColor: {
            darken: .5,
            value: 'blue'
          }
        }}>
        <Button
          bgColor={{
            faded: true,
            value: 'red'
          }}
          flex={{
            align: 'center',
            value: true
          }}
          ml={1}>
          Button
        </Button>
      </Wrapper>
    )
  }

}

export default Home;