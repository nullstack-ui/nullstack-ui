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
    // it('should return correct css props', () => {
    //     let props = handleProps({
    //         ...mockedProps,
    //         props: {
    //             bg: {
    //                 blend: 'multiply'
    //             }
    //         }
    //     })

    //     props = handleProps({
    //         ...mockedProps,
    //         props: {
    //             bgBlend: 'multiply'
    //         }
    //     })

    //     props = handleProps({
    //         ...mockedProps,
    //         props: {
    //             bgBlend: 'screen'
    //         }
    //     })

    //     // console.log(cssAsArray);
    // })

    it('should return correct css props', () => {
        // console.log(cache)
    });
});