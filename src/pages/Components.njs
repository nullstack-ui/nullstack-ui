import Nullstack from 'nullstack';

// Components
import Button from '../components/Button/Button.njs';

export default class Components extends Nullstack {
    elements = [1, 2, 3, 4, 5, 6];
    isVisible = false;

    handleClick() {
        this.isVisible = !this.isVisible;
    }

    render() {
        return (
            <>
                <div
                    flex={true}
                    mb={1}
                    spX={.5}>
                    <Button
                        clown={true}
                        onclick={this.handleClick}>
                        {this.isVisible ? 'Hide' : 'Show'}
                    </Button>
                </div>

                <div
                    _empty={{
                        color: 'cyan'
                    }}
                    p={5}>
                    {this.isVisible ? <span>Teste</span> : ''}
                </div>
                
                <a
                    _link={{
                        color: 'black'
                    }}
                    href="#">Link</a>

                <input
                    _focus={{
                        color: 'green'
                    }}
                    _optional={{
                        color: 'pink'
                    }}
                    required />

                <div
                    alH="center"
                    color="orange"
                    flex={true}
                    if={this.isVisible}
                    mt={2}
                    p={10}
                    w="100%">
                    1. Should be visible now
                </div>

                <div
                    alH="center"
                    color="green"
                    flex={true}
                    mt={2}
                    // mt={2}
                    p={10}
                    w="100%"
                    else>
                    2. Should be visible now
                </div>
            </>
        )
    }
}