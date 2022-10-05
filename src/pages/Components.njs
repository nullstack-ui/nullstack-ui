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
                <Button color="yellow">Button</Button>
            </>
        )
    }
}