import Nullstack from 'nullstack';

// Components
import Button from '../components/Button/Button.njs';

export default class Components extends Nullstack {
    elements = [1, 2, 3, 4, 5, 6];
    isVisible = false;

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
                    bg={{
                        attachment: 'fixed',
                        color: 'cyan',
                        size: 'cover'
                    }}>Test</div>
                <div
                    alH="center"
                    _hover={{
                        color: {
                            ratio: .8,
                            value: 'blue'
                        }
                    }}
                    _down={{
                        sm: {
                            _hover: {
                                color: 'pink'
                            },
                            color: 'red'
                        }
                    }}
                    flex={true}
                    if={this.isVisible}
                    p={10}>
                    This is an example
                </div>

                <div else>
                    This should show
                </div>
                <div
                    alH="center"
                    // brightness={1}
                    blur={10}
                    color="green"
                    contrast={1}
                    group
                    flex={true}
                    invert={0}
                    // hueRotate={90}
                    p={10}
                    transition={true}
                    _hover={{
                        blur: 0,
                        // brightness: 1.5,
                        contrast: 5,
                        invert: 1,
                        // saturate: .5
                    }}>
                    <button
                        _group={{
                            _hover: {
                                opacity: .2
                            }
                        }}>
                        Test
                    </button>
                    <div
                        _group={{
                            _active: {
                                color: 'purple',
                                _down: {
                                    md: {
                                        color: 'white'
                                    }
                                }
                            }
                        }}>
                        Wot?
                    </div>
                </div>
                <div
                    _children={{
                        _nthChild: [1, {
                            opacity: .2
                        }],
                        _nthLastChild: [1, {
                            color: 'blue'
                        }]
                    }}
                    flex={{
                        value: true
                    }}
                    reverse={true}
                    spX={2}>
                    <button>Button 1</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                </div>
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

                <div invisible={true}>Visible</div>

                <div
                    ellipsis={true}
                    w="half">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus, ante eget bibendum malesuada, justo dui eleifend metus, a tempor tortor neque et odio. Ut dictum ex leo, ac pharetra turpis finibus non. Mauris blandit vitae odio sed laoreet. Nunc dignissim sed tellus et malesuada. Curabitur in dui massa. Nunc accumsan justo at massa feugiat, quis viverra orci suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis suscipit tempus tortor ut pharetra.
                </div>

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

const FormField = ({ children }) => {
    return (
        <div bypass={true} color="blue">
            {children}
        </div>
    )
}