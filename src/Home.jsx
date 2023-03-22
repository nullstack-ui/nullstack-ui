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
          bgColor="blue"
          bold
          compact={true}
          flexRow
          font="body"
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
        <input bgColor="#CCC" bind={this.test} placeholder="Enter text" />
      </>
    )
  }

}

export default Home;