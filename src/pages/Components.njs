import Nullstack from 'nullstack';

// Components
import Button from '../components/Button/Button.njs';

export default class Components extends Nullstack {
    render() {
        return (
            <>
                <div>
                    <Button
                        bgColor="cyan"
                        mixColors={true}
                        textColor="yellow"
                        wide={true}>
                        Button
                    </Button>
                    <Button
                        bgColor="pink"
                        mixColors={true}
                        textColor="white"
                        wide={true}>
                        Button
                    </Button>
                    <Button
                        color="#CC33AA"
                        wide={true}>
                        Button
                    </Button>
                </div>
                <div>
                    <Button
                        color="cyan"
                        variant="outline"
                        wide={true}>
                        Button
                    </Button>
                    <Button
                        color="pink"
                        variant="outline"
                        wide={true}>
                        Button
                    </Button>
                    <Button
                        color="#CC33AA"
                        variant="outline"
                        wide={true}>
                        Button
                    </Button>
                </div>
            </>
        )
    }
}