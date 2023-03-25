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

        <div
          bgColor="yellow"
          p={2}
          group>

          <div
            scale={.75}
            _group={{
              _hover: {
                scale: 1,
              }
            }}>
            Teste
          </div>
        </div>

        <div translateX="-20px">Teste</div>


        {/* <div group>
          <div _group={{ _hover: { bgColor: 'red' }}}>Test</div>
        </div> */}

        {/* <div bgColor="yellow" group p={5}>
          <div _group={{ _hover: { bgColor: 'red' }}}>Test</div>
          <div>
            <div _group={{ _hover: { bgColor: 'blue' }}}>
              Test 2
            </div>
          </div>
        </div> */}

        {/* <div translateX="-10px">Transform</div> */}
        <input bind={this.test} placeholder="Test" />

        {/* <div>
          <div font={{ family: 'body', weight: 600 }} spY={3}>
            {Array(3).fill(0).map((_, index) => (<div bd _nthChild={[1, { bgColor: 'blue' }]}>{index}</div>))}
          </div>

          <div bold mx={5}>Teste</div>
          <input bind={this.test} placeholder="Test" />
        </div> */}
      </>
    )
  }

}

export default Home;