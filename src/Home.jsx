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
            mt={1}
            size="lg">
            Button lg
          </Button>
        </Wrapper>

        <Wrapper
          _children={{
            _not: {
              _firstChild: {
                opacity: .5
              }
            }
          }}
          spX={.5}>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </Wrapper>

        <Wrapper
          alH="center"
          flex={{
            direction: 'column',
            value: true
          }}
          spY={2}>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </Wrapper>

        <Wrapper
          ellipsis={true}
          width={150}>
          This is a big text that will be cut by ellipsis prop
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
                  content: '":after"',
                  left: '50%',
                  rotate: 90,
                  scale: [1, 2],

                  // rotateZ: 180,
                  top: '50%',
                  translate: {
                    x: -100,
                    y: -200
                  }
                  // translate: {
                  //   x: '-50%',
                  //   y: '-50%'
                  // }
                  // transform: {
                  //   rotate: ['90deg'],
                  //   translate: ['-50%', '-50%']
                  // }
                }}
                _before={{
                  absolute: true,
                  content: '":before"',
                  left: 0,
                  top: 0
                }}
                _firstLetter={{
                  color: 'red',
                  p: 1
                }}
                _firstLine={{
                  color: 'green'
                }}
                _even={{
                  color: 'cyan',
                }}
                _firstChild={{
                  opacity: .5,
                }}
                _hover={{
                  scale: 1.5,
                  z: 1
                }}
                border={true}
                color="white"
                mb={1}
                p={4}
                relative={true}
                _selection={{
                  color: 'cyan'
                }}
                transition={true}
                _down={{
                  xs: {
                    color: 'blue'
                  },
                  sm: {
                    color: 'green'
                  },
                }}
                _up={{
                  sm: {
                    color: 'red'
                  }
                }}>
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
            size="xs"
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