import { addToCache, cache } from './src';
import { handleProps } from './src/props';
import { ComponentStyle } from './src/components/Component/Component.style';

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

// TODO: maybe move some of these to specific test files

describe('misc props', () => {
    it('should return correct css props', () => {
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                children: [
                    {
                        attributes: {
                            _group: {
                                _hover: {
                                    bgColor: 'red'
                                }
                            }
                        }
                    }
                ],
                group: true,
            }
        });
        let cssAsArray = style.css.split('\n');

        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                children: [
                    {
                        attributes: {
                            _group: {
                                _hover: {
                                    bgColor: 'red'
                                }
                            }
                        }
                    }
                ],
                group: true,
            }
        });

        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                children: [
                    {
                        attributes: {
                            _group: {
                                _hover: {
                                    bgColor: 'red'
                                }
                            }
                        }
                    }
                ],
                group: true,
            }
        });

        // console.log(cssAsArray);
    })
});