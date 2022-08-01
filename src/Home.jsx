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
          h={120}
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
          <Wrapper>
            {Array(10).fill({}).map(() => (
              <Wrapper
                _after={{
                  absolute: true,
                  content: '"Teste"',
                  left: '-50%',
                  top: '-50%',
                  transform: {
                    translate: ['-50%', '-50%']
                  }
                }}
                _even={{
                  color: 'cyan'
                }}
                _firstChild={{
                  opacity: .2
                }}
                border={true}
                mb={1}
                p={4}
                relative={true}>
                Wrapper
              </Wrapper>
            ))}
          </Wrapper>
          <Button
            fixed={true}
            left={0}
            radius={0}
            right={0}
            bottom={0}
            clown={true}
            compact={true}
            rounded={true}
            variant="success"
          // color={{
          //   lighten: .5,
          //   value: 'blue'
          // }}
          // ml={15}
          // margin={{
          //   top: 15
          // }}
          >
            Teste
          </Button>
        </Wrapper>
      </>
    )
  }

}

export default Home;