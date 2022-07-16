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
          value: 'yellow'
        }}
        bdLeft={{
          style: 'solid',
          width: 2
        }}
        bdBottom={{
          style: 'dashed',
          width: 4
        }}
        flex={{
          alH: 'center',
          alV: 'center',
          dir: 'column',
          value: true
        }}
        h={500}
        p={1}
        transition={['background']}
        w="50%"
        _active={{
          bgColor: {
            darken: .5,
            value: 'blue'
          }
        }}>
        <Wrapper>Wrapper</Wrapper>
        <Button
          bgColor={{
            faded: true,
            value: 'red'
          }}
          flex={{
            align: 'center',
            value: true
          }}
          mt={1}>
          Button
        </Button>
      </Wrapper>
    )
  }

}

export default Home;