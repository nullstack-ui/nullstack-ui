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
      <>
        <Wrapper
          bgColor={{
            opacity: 1,
            value: 'yellow'
          }}
          border={{
            left: {
              style: 'solid',
              width: 2
            }
          }}
          // borderLeft={{
          //   style: 'solid',
          //   width: 2
          // }}
          // bdB={{
          //   color: 'green',
          //   style: 'dashed',
          //   width: 4
          // }}
          // bdRightColor={{
          //   lighten: .5,
          //   value: 'red'
          // }}
          // bdRightStyle="dotted"
          bdX="green"
          bdY="blue"
          borderRightWidth={16}
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
            },
            bdRightStyle: 'dashed'
          }}>
          <Wrapper
            border={{
              color: 'red',
              style: 'dashed',
              width: 2
            }}
            p={2}
            width="25%">Wrapper</Wrapper>
          <Button
            bgColor={{
              faded: true,
              value: 'red'
            }}
            cursor="pointer"
            flex={{
              align: 'center',
              value: true
            }}
            mt={1}>
            Button
          </Button>
        </Wrapper>

        <Wrapper
          border={{
            color: {
              lighten: .75,
              value: 'green'
            },
            style: 'solid'
          }}
          borderWidth={5}
          flex={{
            alH: 'center',
            value: true
          }}
          p={5}>
          <Button
            // color={{
            //   lighten: .5,
            //   value: 'blue'
            // }}
            color={{
              value: '#CCC'
            }}>
            Teste
          </Button>
        </Wrapper>
      </>
    )
  }

}

export default Home;