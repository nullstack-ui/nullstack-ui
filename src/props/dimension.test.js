import { addToCache, cache } from '../';
import { handleProps } from '../props';
import { ComponentStyle } from '../components/Component/Component.style';
import { checkState } from './misc.test';

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

describe('dimension props', () => {
    it('should return correct css props', () => {
        // h
        let props = handleProps({
            ...mockedProps,
            props: {
                h: 100
            },
        });

        expect(props.height).toBeTruthy();
        expect(props.height.cssProps[0].key).toBe('height');
        expect(props.height.cssProps[0].value).toBe('100px');
        expect(props.height.initialValue).toBe(100);
        expect(props.height.prop).toBe('height');

        // height
        props = handleProps({
            ...mockedProps,
            props: {
                height: 100
            },
        });

        expect(props.height).toBeTruthy();
        expect(props.height.cssProps[0].key).toBe('height');
        expect(props.height.cssProps[0].value).toBe('100px');
        expect(props.height.initialValue).toBe(100);
        expect(props.height.prop).toBe('height');

        // maxH
        props = handleProps({
            ...mockedProps,
            props: {
                maxH: 100
            }
        });

        expect(props.maxHeight).toBeTruthy();
        expect(props.maxHeight.cssProps[0].key).toBe('max-height');
        expect(props.maxHeight.cssProps[0].value).toBe('100px');
        expect(props.maxHeight.initialValue).toBe(100);
        expect(props.maxHeight.prop).toBe('maxHeight');

        // maxHeight
        props = handleProps({
            ...mockedProps,
            props: {
                maxHeight: 100
            }
        });

        expect(props.maxHeight).toBeTruthy();
        expect(props.maxHeight.cssProps[0].key).toBe('max-height');
        expect(props.maxHeight.cssProps[0].value).toBe('100px');
        expect(props.maxHeight.initialValue).toBe(100);
        expect(props.maxHeight.prop).toBe('maxHeight');

        // maxW
        props = handleProps({
            ...mockedProps,
            props: {
                maxW: 100
            }
        });

        expect(props.maxWidth).toBeTruthy();
        expect(props.maxWidth.cssProps[0].key).toBe('max-width');
        expect(props.maxWidth.cssProps[0].value).toBe('100px');
        expect(props.maxWidth.initialValue).toBe(100);
        expect(props.maxWidth.prop).toBe('maxWidth');

        // maxWidth
        props = handleProps({
            ...mockedProps,
            props: {
                maxWidth: 100
            }
        });

        expect(props.maxWidth).toBeTruthy();
        expect(props.maxWidth.cssProps[0].key).toBe('max-width');
        expect(props.maxWidth.cssProps[0].value).toBe('100px');
        expect(props.maxWidth.initialValue).toBe(100);
        expect(props.maxWidth.prop).toBe('maxWidth');

        // minH
        props = handleProps({
            ...mockedProps,
            props: {
                minH: 100
            }
        });

        expect(props.minHeight).toBeTruthy();
        expect(props.minHeight.cssProps[0].key).toBe('min-height');
        expect(props.minHeight.cssProps[0].value).toBe('100px');
        expect(props.minHeight.initialValue).toBe(100);
        expect(props.minHeight.prop).toBe('minHeight');

        // minHeight
        props = handleProps({
            ...mockedProps,
            props: {
                minHeight: 100
            }
        });

        expect(props.minHeight).toBeTruthy();
        expect(props.minHeight.cssProps[0].key).toBe('min-height');
        expect(props.minHeight.cssProps[0].value).toBe('100px');
        expect(props.minHeight.initialValue).toBe(100);
        expect(props.minHeight.prop).toBe('minHeight');

        // minW
        props = handleProps({
            ...mockedProps,
            props: {
                minW: 100
            }
        });

        expect(props.minWidth).toBeTruthy();
        expect(props.minWidth.cssProps[0].key).toBe('min-width');
        expect(props.minWidth.cssProps[0].value).toBe('100px');
        expect(props.minWidth.initialValue).toBe(100);
        expect(props.minWidth.prop).toBe('minWidth');

        // minWidth
        props = handleProps({
            ...mockedProps,
            props: {
                minWidth: 100
            }
        });

        expect(props.minWidth).toBeTruthy();
        expect(props.minWidth.cssProps[0].key).toBe('min-width');
        expect(props.minWidth.cssProps[0].value).toBe('100px');
        expect(props.minWidth.initialValue).toBe(100);
        expect(props.minWidth.prop).toBe('minWidth');

        // w
        props = handleProps({
            ...mockedProps,
            props: {
                w: 100
            }
        });

        expect(props.width).toBeTruthy();
        expect(props.width.cssProps[0].key).toBe('width');
        expect(props.width.cssProps[0].value).toBe('100px');
        expect(props.width.initialValue).toBe(100);
        expect(props.width.prop).toBe('width');

        // width
        props = handleProps({
            ...mockedProps,
            props: {
                width: 100
            }
        });

        expect(props.width).toBeTruthy();
        expect(props.width.cssProps[0].key).toBe('width');
        expect(props.width.cssProps[0].value).toBe('100px');
        expect(props.width.initialValue).toBe(100);
        expect(props.width.prop).toBe('width');
    });
});