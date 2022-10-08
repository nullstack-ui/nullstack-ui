import Nullstack from 'nullstack';

// Components
import Button from '../components/Button/Button.njs';

export default class Components extends Nullstack {
    elements = [1, 2, 3, 4, 5, 6];
    isVisible = false;

    initiate(context) {
        context.darkMode = true;

        setTimeout(() => {
            context.darkMode = false;
        }, 5000);
    }

    handleClick() {
        this.isVisible = !this.isVisible;
    }

    // render() {
    //     return (
    //         <FormField>
    //             <span>Form Field</span>
    //         </FormField>
    //     )
    // }

    render() {
        return (
            <>
                <Button color={{ faded: true, value: 'red' }}>Button</Button>
                <Button color="black" faded={true}>Button</Button>
                <Button color={{ faded: true, value: 'black' }}>Button</Button>
                <div>
                    <Button color="#000">Button</Button>
                    <Button color="#333">Button</Button>
                    <Button color="#666">Button</Button>
                    <Button color="#999">Button</Button>
                    <Button color="#CCC">Button</Button>
                    <Button color="#FFF">Button</Button>
                </div>

                <div>
                    <Button color="#000" darken={true}>Button</Button>
                    <Button color="#333" darken={true}>Button</Button>
                    <Button color="#666" darken={true}>Button</Button>
                    <Button color="#999" darken={true}>Button</Button>
                    <Button color="#CCC" darken={true}>Button</Button>
                    <Button color="#FFF" darken={true}>Button</Button>
                </div>

                <div>
                    <Button color="#000" lighten={true}>Button</Button>
                    <Button color="#333" lighten={true}>Button</Button>
                    <Button color="#666" lighten={true}>Button</Button>
                    <Button color="#999" lighten={true}>Button</Button>
                    <Button color="#CCC" lighten={true}>Button</Button>
                    <Button color="#FFF" lighten={true}>Button</Button>
                </div>
            </>
        )
    }
}