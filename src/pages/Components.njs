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
                <div
                    ratio="1:1"
                    relative={true}
                    w={320}>
                    <div
                        absolute={true}
                        bgBlur={5}
                        inset={0} />
                    <div
                        bgImage="url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80)"
                        ratio="1:1"
                        w={320}>

                    </div>
                </div>
                <div
                    color="cyan"
                    ratio="5:6"
                    width={250}>
                    Test
                </div>
                <input caretColor="red" />
                <div
                    bd="#ccc"
                    antialiased={true}
                    p={3}
                    radius={.75}
                    shadow={true}>
                    Card
                </div>
                <div p={5}>
                    <button
                        color={['secondary', 100]}>
                        Button
                    </button>

                    <button color="primary">
                        Primary button
                    </button>
                </div>

                <div
                    ellipsis={true}
                    font={{
                        family: 'body'
                    }}
                    fontSize={3}
                    noWrap={true}
                    w="half">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at maximus lacus. Curabitur sit amet cursus purus. Pellentesque ac sem non mauris efficitur sodales et at lorem. Morbi sed accumsan neque, nec condimentum nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pulvinar sed urna et fermentum. Nam felis quam, congue vitae vulputate ultrices, molestie a dolor. Praesent posuere faucibus nibh quis fermentum. Nullam lectus nunc, sollicitudin non lorem vitae, vestibulum pellentesque nulla. In lorem nisl, gravida ut justo vel, ultrices tempor massa. Proin commodo neque ac nunc dignissim pellentesque. Integer posuere, mi sit amet dictum dapibus, nulla urna rutrum purus, faucibus viverra ex urna ut lacus.

                    Sed ultricies arcu vel tristique cursus. Nunc quis dolor id lectus pharetra accumsan. Fusce dictum nunc id mollis fringilla. Mauris nibh est, vulputate ut suscipit vitae, hendrerit vitae quam. Fusce luctus augue vitae ipsum dictum, vitae consectetur nulla hendrerit. Vivamus venenatis enim in metus aliquam scelerisque in eget libero. Sed in purus eget erat dictum fringilla eget vel erat. Phasellus tellus leo, bibendum at elementum venenatis, tempus auctor dui. Nulla sagittis viverra efficitur. Sed congue mauris eget neque rhoncus mattis. Nunc accumsan vulputate libero, et dictum augue tempor at. Vivamus at velit lectus.</div>

                <h2
                    font={{ family: 'body' }}
                    fontSize={2}
                    tracking="tighter"
                    semibold={true}>Test</h2>

                <div
                    indent={-5}
                    textAlign="center"
                    textDecoration="underline"
                    textDecorationColor="red"
                    textDecorationLine="overline"
                    textDecorationStyle="wavy"
                    textDecorationWidth={2}>
                    Teste
                </div>

                <p
                    capitalize={true}
                    clamp={3}
                    leading="tight"
                    ov="hidden"
                    size="2xl"
                    textColor="red">lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at maximus lacus. Curabitur sit amet cursus purus. Pellentesque ac sem non mauris efficitur sodales et at lorem. Morbi sed accumsan neque, nec condimentum nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pulvinar sed urna et fermentum. Nam felis quam, congue vitae vulputate ultrices, molestie a dolor. Praesent posuere faucibus nibh quis fermentum. Nullam lectus nunc, sollicitudin non lorem vitae, vestibulum pellentesque nulla. In lorem nisl, gravida ut justo vel, ultrices tempor massa. Proin commodo neque ac nunc dignissim pellentesque. Integer posuere, mi sit amet dictum dapibus, nulla urna rutrum purus, faucibus viverra ex urna ut lacus.
                </p>
            </>
            // <div
            //     alH="center"
            //     color="cyan"
            //     fat={true}
            //     flex={true}
            //     p={1}
            //     _hover={({ props }) => ({
            //         color: {
            //             darken: true,
            //             value: props.color
            //         }
            //     })}
            //     _down={{
            //         sm: {
            //             _hover: {
            //                 color: 'green'
            //             }
            //         }
            //     }}>
            //     Component
            // </div>
        )
    }
}

const FormField = ({ children }) => {
    return (
        <div bypass={true} color="blue">
            {children}
        </div>
    )
}