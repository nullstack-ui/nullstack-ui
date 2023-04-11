import { addToCache, cache } from './src';
import { handleProps } from './src/props';
import { ComponentStyle } from './src/components/Component/Component.style';

const mockedProps = {
    addToCache,
    cache,
    context: {},
    depth: 'DEPTH_HERE',
    theme: {
        colors: {
            dark: {
                400: 'red'
            }
        }
    }
}

const mockedStyleProps = {
    addToCache,
    cache,
    context: {},
    darkMode: false,
    depth: 'DEPTH_HERE',
    theme: {
        colors: {
            dark: {
                400: 'red'
            }
        }
    }
}

// TODO: maybe move some of these to specific test files

describe('misc props', () => {
    it('should return correct css props', () => {
        let props = handleProps({
            ...mockedProps,
            props: {
                _not: {
                    _firstChild: {
                        bdTop: {
                            color: ['dark', 400],
                            style: 'solid',
                            width: 1,
                        },
                    },
                }
            }
        });
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _not: {
                    _firstChild: {
                        bdTop: {
                            color: ['dark', 400],
                            style: 'solid',
                            width: 1,
                        },
                    },
                }
            }
        });
        let cssAsArray = style.css.split('\n');
    })

    it('should return correct css props', () => {
        // console.log(cache)
    });
});