import Nullstack from 'nullstack';
import './Home.css';

class Home extends Nullstack {
  test = ''

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
        <div _children={{ _hover: { bgColor: 'red' }}}>
          {Array(10).fill(0).map((_, index) => (<div _not={{ _firstChild: { bgColor: 'green' }}}>{index}</div>))}
        </div>
        {/* <div bgColor="blue" bold flexCol spY={3}>
          {Array(3).fill(0).map((_, index) => (<div>{index}</div>))}
        </div> */}
        {/* <div bgColor="red" _children={{ bgColor: 'green', _odd: { bgColor: 'red' } }} _hover={{ bgColor: 'yellow' }}>
          <div bgColor="blue">-1</div>
          {Array(10).fill(0).map((_, index) => (<div>{index}</div>))}
        </div> */}

        <input bind={this.test} placeholder="Test" />
        {/* <div spY={2} _hover={{bgColor: 'blue'}}>Test</div> */}
        {/* <div bgColor="blue" p={3} spY={2} _hover={{ bgColor: 'red', textColor: 'white' }}>
          {Array(10).fill(0).map((_, index) => (<div bgColor="green">{index}</div>))}
        </div> */}
        {/* <div flex>
          <div
            bgColor="blue"
            bold
            compact={true}
            flexRow
            font="body"
            mr={2}
            p={2}
            rounded="full"
            customProps={[
              {
                name: 'compact',
                props: {
                  w: '50%'
                }
              }
            ]}
            _hover={{
              bgColor: 'green',
              textColor: 'white'
            }}
            _down={{
              md: {
                bgColor: 'red',
                textColor: 'yellow'
              }
            }}>
            Test
          </div>
          <input
            bgColor="#CCC"
            bind={this.test}
            placeholder="Enter text"
            _focus={{
              bgColor: 'red'
            }} />
        </div>
        <div flex={[true, { dir: 'column' }]} spY={2}>
          {Array(10).fill(0).map((_, index) => (<div bgColor="#EEE">{index}</div>))}
        </div> */}
      </>
    )
  }

}

export default Home;