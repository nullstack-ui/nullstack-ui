import Nullstack from 'nullstack';

export default class HTMLELements extends Nullstack {
    render() {
        return (
            <>
                <div
                    bgColor="cyan"
                    class="test"
                    flex={{
                        alH: 'center',
                        value: true
                    }}
                    mb={5}
                    px={4}
                    py={10}
                    _down={{
                        md: {
                            bgColor: 'red'
                        }
                    }}>
                    Test
                </div>

                <div
                    border={true}
                    clown={true}
                    p={3}
                    wayDown={true}
                    _hover={{
                        color: {
                            lighten: true,
                            value: 'green'
                        },
                    }}
                    _active={{
                        bgColor: {
                            lighten: .9,
                            value: 'purple'
                        },
                        mixColors: true,
                        textColor: {
                            darken: .5,
                            value: 'purple'
                        }
                    }}>
                    Element with custom props (check client.js)
                </div>
            </>
        )
    }
}