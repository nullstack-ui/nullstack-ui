import Nullstack from 'nullstack';

// Components
import Button from '../components/Button/Button.njs';

export default class Components extends Nullstack {
    render() {
        return (
            <Button
                color="cyan"
                variant="outline"
                wide={true}>
                Button
            </Button>
        )
    }
}