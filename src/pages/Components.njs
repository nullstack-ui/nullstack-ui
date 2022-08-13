import Nullstack from 'nullstack';

// Components
import Button from '../components/Button/Button.njs';

export default class Components extends Nullstack {
    isVisible = false;

    // update() {
    //     console.log('this.isVisible', this.isVisible);
    // }

    handleClick() {
        this.isVisible = !this.isVisible;
    }

    render() {
        return (
            <>
                <div flex={true} mb={1} spX={.5}>
                    {/* <Button
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

                <div flex={true} spX={.5}>
                    <Button
                        color="cyan"
                        variant="outline"
                        compact={true}>
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
                    </Button> */}

                    <Button
                        clown={true}
                        onclick={this.handleClick}>
                        {this.isVisible ? 'Hide' : 'Show'}
                    </Button>
                </div>

                <div
                    alH="center"
                    color="orange"
                    flex={true}
                    if={this.isVisible}
                    mt={2}
                    p={10}
                    w="100%">
                    Should be visible now
                </div>
            </>
        )
    }
}