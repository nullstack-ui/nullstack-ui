import Nullstack from 'nullstack';
import './Home.css';

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
      <div 
        bgColor="blue" 
        bold
        compact={true}
        flexRow
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
        }}>
        Test
      </div>
    )
  }

}

export default Home;