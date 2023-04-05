import { addToCache, cache } from './src/index.js';
import { handleProps } from './src/props/index.js';
import { ComponentStyle } from './src/components/Component/Component.style.js';
import NullstackUI from './src/index.js';

const mockedProps = {
    addToCache,
    cache,
    context: {},
    depth: 'DEPTH_HERE',
    theme: {}
}

const mockedStyleProps = {
    addToCache,
    cache,
    context: {},
    darkMode: false,
    depth: 'DEPTH_HERE',
    theme: {}
}

const card = {
    node: {
        attributes: {
            bgColor: 'dark',
            children: [
                {
                    attributes: {
                        _group: {
                            _hover: {
                                bgColor: 'dark',
                                cursor: 'default',
                                textColor: 'white'
                            },
                            _active: {
                                bgColor: 'dark',
                                cursor: 'default',
                                textColor: 'white'
                            }
                        }
                    },
                    type: 'div'
                }
            ],
            cursor: 'pointer',
            'data-name': 'card',
            flex: [true, { dir: 'column' }],
            fontFamily: 'body',
            group: true,
            h: 240,
            ov: 'hidden',
            p: 1.5,
            relative: true,
            rounded: '.8em',
            shadow: 'xl',
            textColor: 'white',
            _down: {
                xl: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    'data-name': 'card',
                    flex: [true, { dir: 'column' }],
                    fontFamily: 'body',
                    group: true,
                    h: 240,
                    ov: 'hidden',
                    p: 1.5,
                    relative: true,
                    rounded: '.8em',
                    shadow: 'xl',
                    textColor: 'white',
                },
                sm: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    'data-name': 'card',
                    flex: [true, { dir: 'column' }],
                    fontFamily: 'body',
                    group: true,
                    h: 240,
                    ov: 'hidden',
                    p: 1.5,
                    relative: true,
                    rounded: '.8em',
                    shadow: 'xl',
                    textColor: 'white',
                },
                md: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    'data-name': 'card',
                    flex: [true, { dir: 'column' }],
                    fontFamily: 'body',
                    group: true,
                    h: 240,
                    ov: 'hidden',
                    p: 1.5,
                    relative: true,
                    rounded: '.8em',
                    shadow: 'xl',
                    textColor: 'white',
                },
                lg: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    'data-name': 'card',
                    flex: [true, { dir: 'column' }],
                    fontFamily: 'body',
                    group: true,
                    h: 240,
                    ov: 'hidden',
                    p: 1.5,
                    relative: true,
                    rounded: '.8em',
                    shadow: 'xl',
                    textColor: 'white',
                },
                xl: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    'data-name': 'card',
                    flex: [true, { dir: 'column' }],
                    fontFamily: 'body',
                    group: true,
                    h: 240,
                    ov: 'hidden',
                    p: 1.5,
                    relative: true,
                    rounded: '.8em',
                    shadow: 'xl',
                    textColor: 'white',
                },
            }
        },
        type: 'div'
    },
}

const button = {
    node: {
        attributes: {
            bgColor: 'dark',
            children: [
                {

                }
            ],
            cursor: 'pointer',
            'data-name': 'button',
            fontFamily: 'body',
            h: 40,
            px: 1.5,
            rounded: '.8em',
            shadow: 'sm',
            textColor: 'white',
            _hover: {
                bgColor: ['dark', 100],
                shadow: 'lg',
                textColor: 'white'
            },
            _active: {
                bgColor: ['dark', 200],
                shadow: 'lg',
                textColor: 'white'
            },
            _down: {
                xs: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                sm: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                md: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                lg: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                xl: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                }
            },
            _up: {
                xs: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                sm: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                md: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                lg: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                xl: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                }
            }
        },
        type: 'button'
    }
}

const anchor = {
    node: {
        attributes: {
            bgColor: 'dark',
            children: [
                {
                    node: {
                        attributes: {
                            bgColor: 'dark',
                            cursor: 'default',
                            ml: .5,
                            textColor: 'white',
                            textShadow: 'md'
                        },
                        type: 'span'
                    }
                }
            ],
            href: '#',
            target: '_self',
            _hover: {
                bgColor: 'primary',
                mx: .5,
                opacity: .5,
                textColor: 'white',
                underline: true
            },
            _down: {
                xs: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                sm: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                md: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                lg: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                xl: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
            },
            _up: {
                xs: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                sm: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                md: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                lg: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
                xl: {
                    bgColor: 'dark',
                    cursor: 'pointer',
                    fontFamily: 'body',
                    h: 40,
                    px: 1.5,
                    rounded: '.8em',
                    shadow: 'sm',
                    textColor: 'white',
                },
            }
        }
    },
    type: 'a'
};

const totalElements = 100;

const nullstackUI = new NullstackUI({});

nullstackUI.load({});

console.time('Benchmarking');

for (let i = 0; i < totalElements; i++) {
    nullstackUI.transform(anchor);
    nullstackUI.transform(button);
    nullstackUI.transform(card);
}

console.timeEnd('Benchmarking');