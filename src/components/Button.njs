import Nullstack from 'nullstack';

export default class Button extends Nullstack {
    render({ project }) {
        console.log('project', project);

        return (
            <button style={`background: ${project.theme?.color}`}>Button</button>
        )
    }
}