import { addToCache, cache } from '../src';
import { handleProps } from '../src/props';

const mockedProps = {
    addToCache,
    cache,
    context: {},
    depth: 'DEPTH_HERE',
    theme: {}
}

describe('Should return correct prop values', () => {
    it('should return correct css props', () => {
        // All
        let props = handleProps({
            ...mockedProps,
            props: {
                all: true
            },
        });

        expect(props.all).toBeTruthy();
        expect(props.all.cssProps[0].key).toBe('all');
        expect(props.all.cssProps[0].value).toBe(true);
        expect(props.all.initialValue).toBe(true);
        expect(props.all.prop).toBe('all');

        props = handleProps({
            ...mockedProps,
            props: {
                all: false
            },
        });

        expect(props.all).toBeTruthy();
        expect(props.all.cssProps.length).toBe(0);
        expect(props.all.initialValue).toBe(false);
        expect(props.all.prop).toBe('all');

        props = handleProps({
            ...mockedProps,
            props: {
                all: null
            },
        });

        expect(props.all).toBeTruthy();
        expect(props.all.cssProps.length).toBe(0);
        expect(props.all.initialValue).toBe(null);
        expect(props.all.prop).toBe('all');

        // Appearance
        props = handleProps({
            ...mockedProps,
            props: {
                appearance: 'none'
            },
        });

        expect(props.appearance).toBeTruthy();
        expect(props.appearance.cssProps[0].key).toBe('appearance');
        expect(props.appearance.cssProps[0].value).toBe('none');
        expect(props.appearance.initialValue).toBe('none');
        expect(props.appearance.prop).toBe('appearance');

        props = handleProps({
            ...mockedProps,
            props: {
                appearance: false
            },
        });

        expect(props.appearance).toBeTruthy();
        expect(props.appearance.cssProps.length).toBe(0);
        expect(props.appearance.initialValue).toBe(false);
        expect(props.appearance.prop).toBe('appearance');

        props = handleProps({
            ...mockedProps,
            props: {
                appearance: null
            },
        });

        expect(props.appearance).toBeTruthy();
        expect(props.appearance.cssProps.length).toBe(0);
        expect(props.appearance.initialValue).toBe(null);
        expect(props.appearance.prop).toBe('appearance');

        // Background
        props = handleProps({
            ...mockedProps,
            props: {
                bg: 'none'
            },
        });

        expect(props.bg).toBeTruthy();
        expect(props.bg.cssProps[0].key).toBe('background');
        expect(props.bg.cssProps[0].value).toBe('none');
        expect(props.bg.initialValue).toBe('none');
        expect(props.bg.prop).toBe('bg');

        props = handleProps({
            ...mockedProps,
            props: {
                bg: {
                    attachment: 'fixed',
                    blend: 'multiply',
                    clip: 'text',
                    color: 'red',
                }
            },
        });

        expect(props.bgAttachment).toBeTruthy();
        expect(props.bgAttachment.cssProps[0].key).toBe('background-attachment');
        expect(props.bgAttachment.cssProps[0].value).toBe('fixed');
        expect(props.bgAttachment.initialValue).toBe('fixed');
        expect(props.bgAttachment.prop).toBe('bgAttachment');

        expect(props.bgBlend).toBeTruthy();
        expect(props.bgBlend.cssProps[0].key).toBe('background-blend-mode');
        expect(props.bgBlend.cssProps[0].value).toBe('multiply');
        expect(props.bgBlend.initialValue).toBe('multiply');
        expect(props.bgBlend.prop).toBe('bgBlend');

        expect(props.bgClip).toBeTruthy();
        expect(props.bgClip.cssProps[0].key).toBe('background-clip');
        expect(props.bgClip.cssProps[0].value).toBe('text');

        expect(props.bgColor).toBeTruthy();
        expect(props.bgColor.cssProps[0].key).toBe('background-color');
        expect(props.bgColor.cssProps[0].value).toBe('red');

        // expect(props.bg).toBeTruthy();
        // expect(props.bg.cssProps[0].key).toBe('background');
        // expect(props.bg.cssProps[0].value).toBe('none');
    });

    it('should return cached props', () => {
        // All
        let props = handleProps({
            ...mockedProps,
            props: {
                all: true
            },
        });

        expect(cache.all).toBeTruthy();
        expect(cache.all.true.cssProps[0].key).toBe('all');
        expect(cache.all.true.cssProps[0].value).toBe(true);
        expect(cache.all.true.initialValue).toBe(true);
        expect(cache.all.true.prop).toBe('all');
        expect(props.all).toBeTruthy();
        expect(props.all.cssProps[0].key).toBe('all');
        expect(props.all.cssProps[0].value).toBe(true);
        expect(props.all.initialValue).toBe(true);
        expect(props.all.prop).toBe('all');

        // Appearance
        props = handleProps({
            ...mockedProps,
            props: {
                appearance: 'none'
            },
        });

        expect(cache.appearance).toBeTruthy();
        expect(cache.appearance.none.cssProps[0].key).toBe('appearance');
        expect(cache.appearance.none.cssProps[0].value).toBe('none');
        expect(cache.appearance.none.initialValue).toBe('none');
        expect(cache.appearance.none.prop).toBe('appearance');
        expect(props.appearance).toBeTruthy();
        expect(props.appearance.cssProps[0].key).toBe('appearance');
        expect(props.appearance.cssProps[0].value).toBe('none');
        expect(props.appearance.initialValue).toBe('none');
        expect(props.appearance.prop).toBe('appearance');

        // BG (string)
        props = handleProps({
            ...mockedProps,
            props: {
                bg: 'none'
            },
        });

        expect(cache.bg).toBeTruthy();
        expect(cache.bg.none.cssProps[0].key).toBe('background');
        expect(cache.bg.none.cssProps[0].value).toBe('none');
        expect(cache.bg.none.initialValue).toBe('none');
        expect(cache.bg.none.prop).toBe('bg');
        expect(props.bg).toBeTruthy();
        expect(props.bg.cssProps[0].key).toBe('background');
        expect(props.bg.cssProps[0].value).toBe('none');
        expect(props.bg.initialValue).toBe('none');
        expect(props.bg.prop).toBe('bg');

        // BG (object)
        props = handleProps({
            ...mockedProps,
            props: {
                bg: {
                    attachment: 'fixed',
                    blend: 'multiply',
                    clip: 'text',
                    color: 'red',
                }
            },
        });

        // BG attachment
        expect(cache.bgAttachment).toBeTruthy();
        expect(cache.bgAttachment.fixed.cssProps[0].key).toBe('background-attachment');
        expect(cache.bgAttachment.fixed.cssProps[0].value).toBe('fixed');
        expect(cache.bgAttachment.fixed.initialValue).toBe('fixed');
        expect(cache.bgAttachment.fixed.prop).toBe('bgAttachment');
        expect(props.bgAttachment).toBeTruthy();
        expect(props.bgAttachment.cssProps[0].key).toBe('background-attachment');
        expect(props.bgAttachment.cssProps[0].value).toBe('fixed');
        expect(props.bgAttachment.initialValue).toBe('fixed');
        expect(props.bgAttachment.prop).toBe('bgAttachment');
    });
});