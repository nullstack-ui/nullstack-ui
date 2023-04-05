import { addToCache, cache } from '../';
import { handleProps } from '../props';
import { ComponentStyle } from '../components/Component/Component.style';

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

const checkState = (style, cssProps) => {
    let cssAsArray = style.css.split('\n');
    let n = 0;

    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');
    
    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (max-width: 576px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');
    
    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (max-width: 640px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (max-width: 768px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');
    
    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (max-width: 1024px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (max-width: 1280px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (min-width: 576px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (min-width: 640px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }
    
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (min-width: 768px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');

    expect(cssAsArray[n++].trim()).toBe('@media screen and (min-width: 1024px) {');

    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('@media screen and (min-width: 1280px) {');
    expect(cssAsArray[n++].trim()).toBe(':active {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':focus {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe(':hover {');

    for (let i = 0; i < cssProps.length; i++) {
        expect(cssAsArray[n++].trim()).toBe(cssProps[i]);
    }

    expect(cssAsArray[n++].trim()).toBe('}');
    expect(cssAsArray[n++].trim()).toBe('}');
}

// TODO: maybe move some of these to specific test files

describe('misc props', () => {
    it('should return correct css props', () => {
        // all
        let props = handleProps({
            ...mockedProps,
            props: {
                all: 'initial'
            },
        });

        expect(props.all).toBeTruthy();
        expect(props.all.cssProps[0].key).toBe('all');
        expect(props.all.cssProps[0].value).toBe('initial');
        expect(props.all.initialValue).toBe('initial');
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

        // appearance
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

        // block
        props = handleProps({
            ...mockedProps,
            props: {
                block: true
            },
        });

        expect(props.block).toBeTruthy();
        expect(props.block.cssProps[0].key).toBe('display');
        expect(props.block.cssProps[0].value).toBe('block');
        expect(props.block.initialValue).toBe(true);
        expect(props.block.prop).toBe('block');

        props = handleProps({
            ...mockedProps,
            props: {
                block: false
            },
        });

        expect(props.block).toBeTruthy();
        expect(props.block.cssProps.length).toBe(0);
        expect(props.block.initialValue).toBe(false);
        expect(props.block.prop).toBe('block');

        props = handleProps({
            ...mockedProps,
            props: {
                block: null
            },
        });

        expect(props.block).toBeTruthy();
        expect(props.block.cssProps.length).toBe(0);
        expect(props.block.initialValue).toBe(null);
        expect(props.block.prop).toBe('block');

        // boxSizing
        props = handleProps({
            ...mockedProps,
            props: {
                boxSizing: 'border-box'
            },
        });

        expect(props.boxSizing).toBeTruthy();
        expect(props.boxSizing.cssProps[0].key).toBe('box-sizing');
        expect(props.boxSizing.cssProps[0].value).toBe('border-box');
        expect(props.boxSizing.initialValue).toBe('border-box');
        expect(props.boxSizing.prop).toBe('boxSizing');

        props = handleProps({
            ...mockedProps,
            props: {
                boxSizing: false
            },
        });

        expect(props.boxSizing).toBeTruthy();
        expect(props.boxSizing.cssProps.length).toBe(0);
        expect(props.boxSizing.initialValue).toBe(false);
        expect(props.boxSizing.prop).toBe('boxSizing');

        props = handleProps({
            ...mockedProps,
            props: {
                boxSizing: null
            },
        });

        expect(props.boxSizing).toBeTruthy();
        expect(props.boxSizing.cssProps.length).toBe(0);
        expect(props.boxSizing.initialValue).toBe(null);
        expect(props.boxSizing.prop).toBe('boxSizing');

        // content
        props = handleProps({
            ...mockedProps,
            props: {
                content: '"content"'
            },
        });

        expect(props.content).toBeTruthy();
        expect(props.content.cssProps[0].key).toBe('content');
        expect(props.content.cssProps[0].value).toBe('"content"');
        expect(props.content.initialValue).toBe('"content"');
        expect(props.content.prop).toBe('content');

        props = handleProps({
            ...mockedProps,
            props: {
                content: false
            },
        });

        expect(props.content).toBeTruthy();
        expect(props.content.cssProps.length).toBe(0);
        expect(props.content.initialValue).toBe(false);
        expect(props.content.prop).toBe('content');

        props = handleProps({
            ...mockedProps,
            props: {
                content: null
            },
        });

        expect(props.content).toBeTruthy();
        expect(props.content.cssProps.length).toBe(0);
        expect(props.content.initialValue).toBe(null);
        expect(props.content.prop).toBe('content');

        // cursor
        props = handleProps({
            ...mockedProps,
            props: {
                cursor: 'pointer'
            },
        });

        expect(props.cursor).toBeTruthy();
        expect(props.cursor.cssProps[0].key).toBe('cursor');
        expect(props.cursor.cssProps[0].value).toBe('pointer');
        expect(props.cursor.initialValue).toBe('pointer');
        expect(props.cursor.prop).toBe('cursor');

        props = handleProps({
            ...mockedProps,
            props: {
                cursor: false
            },
        });

        expect(props.cursor).toBeTruthy();
        expect(props.cursor.cssProps.length).toBe(0);
        expect(props.cursor.initialValue).toBe(false);
        expect(props.cursor.prop).toBe('cursor');

        props = handleProps({
            ...mockedProps,
            props: {
                cursor: null
            },
        });

        expect(props.cursor).toBeTruthy();
        expect(props.cursor.cssProps.length).toBe(0);
        expect(props.cursor.initialValue).toBe(null);
        expect(props.cursor.prop).toBe('cursor');

        // display
        props = handleProps({
            ...mockedProps,
            props: {
                display: 'block'
            },
        });

        expect(props.display).toBeTruthy();
        expect(props.display.cssProps[0].key).toBe('display');
        expect(props.display.cssProps[0].value).toBe('block');
        expect(props.display.initialValue).toBe('block');
        expect(props.display.prop).toBe('display');

        props = handleProps({
            ...mockedProps,
            props: {
                display: false
            },
        });

        expect(props.display).toBeTruthy();
        expect(props.display.cssProps.length).toBe(0);
        expect(props.display.initialValue).toBe(false);
        expect(props.display.prop).toBe('display');

        props = handleProps({
            ...mockedProps,
            props: {
                display: null
            },
        });

        expect(props.display).toBeTruthy();
        expect(props.display.cssProps.length).toBe(0);
        expect(props.display.initialValue).toBe(null);
        expect(props.display.prop).toBe('display');

        // d
        props = handleProps({
            ...mockedProps,
            props: {
                d: 'none'
            },
        });

        expect(props.display).toBeTruthy();
        expect(props.display.cssProps[0].key).toBe('display');
        expect(props.display.cssProps[0].value).toBe('none');
        expect(props.display.initialValue).toBe('none');
        expect(props.display.prop).toBe('display');

        props = handleProps({
            ...mockedProps,
            props: {
                d: false
            },
        });

        expect(props.d).toBeTruthy();
        expect(props.d.cssProps.length).toBe(0);
        expect(props.d.initialValue).toBe(false);
        expect(props.d.prop).toBe('d');

        props = handleProps({
            ...mockedProps,
            props: {
                d: null
            },
        });

        expect(props.d).toBeTruthy();
        expect(props.d.cssProps.length).toBe(0);
        expect(props.d.initialValue).toBe(null);
        expect(props.d.prop).toBe('d');

        // opacity
        props = handleProps({
            ...mockedProps,
            props: {
                opacity: .5
            },
        });

        expect(props.opacity).toBeTruthy();
        expect(props.opacity.cssProps[0].key).toBe('opacity');
        expect(props.opacity.cssProps[0].value).toBe(.5);
        expect(props.opacity.initialValue).toBe(.5);
        expect(props.opacity.prop).toBe('opacity');

        props = handleProps({
            ...mockedProps,
            props: {
                opacity: false
            },
        });

        expect(props.opacity).toBeTruthy();
        expect(props.opacity.cssProps.length).toBe(0);
        expect(props.opacity.initialValue).toBe(false);
        expect(props.opacity.prop).toBe('opacity');

        props = handleProps({
            ...mockedProps,
            props: {
                opacity: null
            },
        });

        expect(props.opacity).toBeTruthy();
        expect(props.opacity.cssProps.length).toBe(0);
        expect(props.opacity.initialValue).toBe(null);
        expect(props.opacity.prop).toBe('opacity');

        // op
        props = handleProps({
            ...mockedProps,
            props: {
                op: .25
            },
        });

        expect(props.opacity).toBeTruthy();
        expect(props.opacity.cssProps[0].key).toBe('opacity');
        expect(props.opacity.cssProps[0].value).toBe(.25);
        expect(props.opacity.initialValue).toBe(.25);
        expect(props.opacity.prop).toBe('opacity');

        props = handleProps({
            ...mockedProps,
            props: {
                op: false
            },
        });

        expect(props.op).toBeTruthy();
        expect(props.op.cssProps.length).toBe(0);
        expect(props.op.initialValue).toBe(false);
        expect(props.op.prop).toBe('op');

        props = handleProps({
            ...mockedProps,
            props: {
                op: null
            },
        });

        expect(props.op).toBeTruthy();
        expect(props.op.cssProps.length).toBe(0);
        expect(props.op.initialValue).toBe(null);
        expect(props.op.prop).toBe('op');

        // reset
        props = handleProps({
            ...mockedProps,
            props: {
                reset: true
            },
        });

        expect(props.reset).toBeTruthy();
        expect(props.reset.cssProps[0].key).toBe('appearance');
        expect(props.reset.cssProps[0].value).toBe('none');
        expect(props.reset.cssProps[1].key).toBe('background');
        expect(props.reset.cssProps[1].value).toBe('none');
        expect(props.reset.cssProps[2].key).toBe('border');
        expect(props.reset.cssProps[2].value).toBe('none');
        expect(props.reset.initialValue).toBe(true);
        expect(props.reset.prop).toBe('reset');

        props = handleProps({
            ...mockedProps,
            props: {
                reset: false
            },
        });

        expect(props.reset).toBeTruthy();
        expect(props.reset.cssProps.length).toBe(0);
        expect(props.reset.initialValue).toBe(false);
        expect(props.reset.prop).toBe('reset');

        props = handleProps({
            ...mockedProps,
            props: {
                reset: null
            },
        });

        expect(props.reset).toBeTruthy();
        expect(props.reset.cssProps.length).toBe(0);
        expect(props.reset.initialValue).toBe(null);
        expect(props.reset.prop).toBe('reset');

        // resize
        props = handleProps({
            ...mockedProps,
            props: {
                resize: 'none'
            },
        });

        expect(props.resize).toBeTruthy();
        expect(props.resize.cssProps[0].key).toBe('resize');
        expect(props.resize.cssProps[0].value).toBe('none');
        expect(props.resize.initialValue).toBe('none');
        expect(props.resize.prop).toBe('resize');

        props = handleProps({
            ...mockedProps,
            props: {
                resize: false
            },
        });

        expect(props.resize).toBeTruthy();
        expect(props.resize.cssProps.length).toBe(0);
        expect(props.resize.initialValue).toBe(false);
        expect(props.resize.prop).toBe('resize');

        props = handleProps({
            ...mockedProps,
            props: {
                resize: null
            },
        });

        expect(props.resize).toBeTruthy();
        expect(props.resize.cssProps.length).toBe(0);
        expect(props.resize.initialValue).toBe(null);
        expect(props.resize.prop).toBe('resize');
    });

    it('should return cached props', () => {
        // all
        let props = handleProps({
            ...mockedProps,
            props: {
                all: 'inherit'
            },
        });

        expect(cache.all).toBeTruthy();
        expect(cache.all.inherit.cssProps[0].key).toBe('all');
        expect(cache.all.inherit.cssProps[0].value).toBe('inherit');
        expect(cache.all.inherit.initialValue).toBe('inherit');
        expect(cache.all.inherit.prop).toBe('all');
        expect(props.all).toBeTruthy();
        expect(props.all.cssProps[0].key).toBe('all');
        expect(props.all.cssProps[0].value).toBe('inherit');
        expect(props.all.initialValue).toBe('inherit');
        expect(props.all.prop).toBe('all');

        // appearance
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

        // block
        props = handleProps({
            ...mockedProps,
            props: {
                block: true
            },
        });

        expect(cache.block).toBeTruthy();
        expect(cache.block.true.cssProps[0].key).toBe('display');
        expect(cache.block.true.cssProps[0].value).toBe('block');
        expect(cache.block.true.initialValue).toBe(true);
        expect(cache.block.true.prop).toBe('block');
        expect(props.block).toBeTruthy();
        expect(props.block.cssProps[0].key).toBe('display');
        expect(props.block.cssProps[0].value).toBe('block');
        expect(props.block.initialValue).toBe(true);
        expect(props.block.prop).toBe('block');

        // boxSizing
        props = handleProps({
            ...mockedProps,
            props: {
                boxSizing: 'content-box'
            },
        });

        expect(cache.boxSizing).toBeTruthy();
        expect(cache.boxSizing['content-box'].cssProps[0].key).toBe('box-sizing');
        expect(cache.boxSizing['content-box'].cssProps[0].value).toBe('content-box');
        expect(cache.boxSizing['content-box'].initialValue).toBe('content-box');
        expect(cache.boxSizing['content-box'].prop).toBe('boxSizing');
        expect(props.boxSizing).toBeTruthy();
        expect(props.boxSizing.cssProps[0].key).toBe('box-sizing');
        expect(props.boxSizing.cssProps[0].value).toBe('content-box');
        expect(props.boxSizing.initialValue).toBe('content-box');
        expect(props.boxSizing.prop).toBe('boxSizing');

        // content
        props = handleProps({
            ...mockedProps,
            props: {
                content: '"content here"'
            },
        });

        expect(cache.content).toBeTruthy();
        expect(cache.content['"content here"'].cssProps[0].key).toBe('content');
        expect(cache.content['"content here"'].cssProps[0].value).toBe('"content here"');
        expect(cache.content['"content here"'].initialValue).toBe('"content here"');
        expect(cache.content['"content here"'].prop).toBe('content');
        expect(props.content).toBeTruthy();
        expect(props.content.cssProps[0].key).toBe('content');
        expect(props.content.cssProps[0].value).toBe('"content here"');
        expect(props.content.initialValue).toBe('"content here"');
        expect(props.content.prop).toBe('content');

        // cursor
        props = handleProps({
            ...mockedProps,
            props: {
                cursor: 'default'
            },
        });

        expect(cache.content).toBeTruthy();
        expect(cache.cursor.default.cssProps[0].key).toBe('cursor');
        expect(cache.cursor.default.cssProps[0].value).toBe('default');
        expect(cache.cursor.default.initialValue).toBe('default');
        expect(cache.cursor.default.prop).toBe('cursor');
        expect(props.cursor).toBeTruthy();
        expect(props.cursor.cssProps[0].key).toBe('cursor');
        expect(props.cursor.cssProps[0].value).toBe('default');
        expect(props.cursor.initialValue).toBe('default');
        expect(props.cursor.prop).toBe('cursor');

        // display
        props = handleProps({
            ...mockedProps,
            props: {
                display: 'block'
            },
        });

        expect(cache.display).toBeTruthy();
        expect(cache.display.block.cssProps[0].key).toBe('display');
        expect(cache.display.block.cssProps[0].value).toBe('block');
        expect(cache.display.block.initialValue).toBe('block');
        expect(cache.display.block.prop).toBe('display');
        expect(props.display).toBeTruthy();
        expect(props.display.cssProps[0].key).toBe('display');
        expect(props.display.cssProps[0].value).toBe('block');
        expect(props.display.initialValue).toBe('block');
        expect(props.display.prop).toBe('display');

        // d
        props = handleProps({
            ...mockedProps,
            props: {
                d: 'none'
            },
        });

        expect(cache.display).toBeTruthy();
        expect(cache.display.none.cssProps[0].key).toBe('display');
        expect(cache.display.none.cssProps[0].value).toBe('none');
        expect(cache.display.none.initialValue).toBe('none');
        expect(cache.display.none.prop).toBe('display');
        expect(props.display).toBeTruthy();
        expect(props.display.cssProps[0].key).toBe('display');
        expect(props.display.cssProps[0].value).toBe('none');
        expect(props.display.initialValue).toBe('none');
        expect(props.display.prop).toBe('display');

        // opacity
        props = handleProps({
            ...mockedProps,
            props: {
                opacity: .25
            },
        });

        expect(cache.opacity).toBeTruthy();
        expect(cache.opacity[.25].cssProps[0].key).toBe('opacity');
        expect(cache.opacity[.25].cssProps[0].value).toBe(.25);
        expect(cache.opacity[.25].initialValue).toBe(.25);
        expect(cache.opacity[.25].prop).toBe('opacity');
        expect(props.opacity).toBeTruthy();
        expect(props.opacity.cssProps[0].key).toBe('opacity');
        expect(props.opacity.cssProps[0].value).toBe(.25);
        expect(props.opacity.initialValue).toBe(.25);
        expect(props.opacity.prop).toBe('opacity');

        // op
        props = handleProps({
            ...mockedProps,
            props: {
                op: .75
            },
        });

        expect(cache.opacity).toBeTruthy();
        expect(cache.opacity[.75].cssProps[0].key).toBe('opacity');
        expect(cache.opacity[.75].cssProps[0].value).toBe(.75);
        expect(cache.opacity[.75].initialValue).toBe(.75);
        expect(cache.opacity[.75].prop).toBe('opacity');
        expect(props.opacity).toBeTruthy();
        expect(props.opacity.cssProps[0].key).toBe('opacity');
        expect(props.opacity.cssProps[0].value).toBe(.75);
        expect(props.opacity.initialValue).toBe(.75);
        expect(props.opacity.prop).toBe('opacity');

        // reset
        props = handleProps({
            ...mockedProps,
            props: {
                reset: true
            },
        });

        expect(cache.reset).toBeTruthy();
        expect(cache.reset.true.cssProps[0].key).toBe('appearance');
        expect(cache.reset.true.cssProps[0].value).toBe('none');
        expect(cache.reset.true.cssProps[1].key).toBe('background');
        expect(cache.reset.true.cssProps[1].value).toBe('none');
        expect(cache.reset.true.cssProps[2].key).toBe('border');
        expect(cache.reset.true.cssProps[2].value).toBe('none');
        expect(cache.reset.true.initialValue).toBe(true);
        expect(cache.reset.true.prop).toBe('reset');
        expect(props.reset).toBeTruthy();
        expect(props.reset.cssProps[0].key).toBe('appearance');
        expect(props.reset.cssProps[0].value).toBe('none');
        expect(props.reset.cssProps[1].key).toBe('background');
        expect(props.reset.cssProps[1].value).toBe('none');
        expect(props.reset.cssProps[2].key).toBe('border');
        expect(props.reset.cssProps[2].value).toBe('none');
        expect(props.reset.initialValue).toBe(true);
        expect(props.reset.prop).toBe('reset');

        // resize
        props = handleProps({
            ...mockedProps,
            props: {
                resize: 'both'
            },
        });

        expect(cache.resize).toBeTruthy();
        expect(cache.resize.both.cssProps[0].key).toBe('resize');
        expect(cache.resize.both.cssProps[0].value).toBe('both');
        expect(cache.resize.both.initialValue).toBe('both');
        expect(cache.resize.both.prop).toBe('resize');
        expect(props.resize).toBeTruthy();
        expect(props.resize.cssProps[0].key).toBe('resize');
        expect(props.resize.cssProps[0].value).toBe('both');
        expect(props.resize.initialValue).toBe('both');
        expect(props.resize.prop).toBe('resize');
    });

    it('should return structured css', () => {
        // all
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                all: 'initial'
            }
        });
        let cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('all: initial;');
        expect(cssAsArray[2].trim()).toBe('}');

        // appearance
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                appearance: 'none'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('appearance: none;');
        expect(cssAsArray[2].trim()).toBe('}');

        // block
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                block: true
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('display: block;');
        expect(cssAsArray[2].trim()).toBe('}');

        // boxSizing
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                boxSizing: 'border-box'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('box-sizing: border-box;');
        expect(cssAsArray[2].trim()).toBe('}');

        // content
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                content: '"content"'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('content: "content";');
        expect(cssAsArray[2].trim()).toBe('}');

        // cursor
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                cursor: 'pointer'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('cursor: pointer;');
        expect(cssAsArray[2].trim()).toBe('}');

        // display
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                display: 'block'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('display: block;');
        expect(cssAsArray[2].trim()).toBe('}');

        // d
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                d: 'none'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('display: none;');
        expect(cssAsArray[2].trim()).toBe('}');

        // opacity
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                opacity: .5
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('opacity: 0.5;');
        expect(cssAsArray[2].trim()).toBe('}');

        // op
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                opacity: .25
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('opacity: 0.25;');
        expect(cssAsArray[2].trim()).toBe('}');

        // reset
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                reset: true
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('appearance: none;');
        expect(cssAsArray[2].trim()).toBe('background: none;');
        expect(cssAsArray[3].trim()).toBe('border: none;');
        expect(cssAsArray[4].trim()).toBe('}');

        // resize
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                resize: 'none'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('resize: none;');
        expect(cssAsArray[2].trim()).toBe('}');
    });

    it('should return css with _active, _focus, _active', () => {
        // all
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    all: 'initial',
                },
                _focus: {
                    all: 'initial'
                },
                _hover: {
                    all: 'initial'
                },
                _down: {
                    xs: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    sm: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    md: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    lg: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    xl: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    }
                },
                _up: {
                    xs: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    sm: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    md: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    lg: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    },
                    xl: {
                        _active: { all: 'initial' },
                        _focus: { all: 'initial' },
                        _hover: { all: 'initial' }
                    }
                }
            }
        });
        let cssAsArray = style.css.split('\n');

        checkState(style, ['all: initial;']);
        
        // appearance
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    appearance: 'initial',
                },
                _focus: {
                    appearance: 'initial'
                },
                _hover: {
                    appearance: 'initial'
                },
                _down: {
                    xs: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    sm: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    md: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    lg: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    xl: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    }
                },
                _up: {
                    xs: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    sm: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    md: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    lg: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    },
                    xl: {
                        _active: { appearance: 'initial' },
                        _focus: { appearance: 'initial' },
                        _hover: { appearance: 'initial' }
                    }
                }
            }
        });
        checkState(style, ['appearance: initial;']);

        // block
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    block: true,
                },
                _focus: {
                    block: true
                },
                _hover: {
                    block: true
                },
                _down: {
                    xs: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    sm: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    md: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    lg: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    xl: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    }
                },
                _up: {
                    xs: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    sm: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    md: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    lg: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    },
                    xl: {
                        _active: { block: true },
                        _focus: { block: true },
                        _hover: { block: true }
                    }
                }
            }
        });
        checkState(style, ['display: block;']);
        
        // boxSizing
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    boxSizing: 'border-box',
                },
                _focus: {
                    boxSizing: 'border-box'
                },
                _hover: {
                    boxSizing: 'border-box'
                },
                _down: {
                    xs: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    sm: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    md: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    lg: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    xl: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    }
                },
                _up: {
                    xs: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    sm: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    md: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    lg: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    },
                    xl: {
                        _active: { boxSizing: 'border-box' },
                        _focus: { boxSizing: 'border-box' },
                        _hover: { boxSizing: 'border-box' }
                    }
                }
            }
        });
        checkState(style, ['box-sizing: border-box;']);

        // content
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    content: '"content"',
                },
                _focus: {
                    content: '"content"'
                },
                _hover: {
                    content: '"content"'
                },
                _down: {
                    xs: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    sm: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    md: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    lg: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    xl: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    }
                },
                _up: {
                    xs: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    sm: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    md: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    lg: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    },
                    xl: {
                        _active: { content: '"content"' },
                        _focus: { content: '"content"' },
                        _hover: { content: '"content"' }
                    }
                }
            }
        });
        checkState(style, ['content: "content";']);

        // cursor
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    cursor: 'pointer',
                },
                _focus: {
                    cursor: 'pointer'
                },
                _hover: {
                    cursor: 'pointer'
                },
                _down: {
                    xs: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    sm: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    md: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    lg: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    xl: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    }
                },
                _up: {
                    xs: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    sm: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    md: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    lg: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    },
                    xl: {
                        _active: { cursor: 'pointer' },
                        _focus: { cursor: 'pointer' },
                        _hover: { cursor: 'pointer' }
                    }
                }
            }
        });
        checkState(style, ['cursor: pointer;']);

        // display
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    display: 'block',
                },
                _focus: {
                    display: 'block'
                },
                _hover: {
                    display: 'block'
                },
                _down: {
                    xs: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    sm: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    md: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    lg: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    xl: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    }
                },
                _up: {
                    xs: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    sm: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    md: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    lg: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    },
                    xl: {
                        _active: { display: 'block' },
                        _focus: { display: 'block' },
                        _hover: { display: 'block' }
                    }
                }
            }
        });
        checkState(style, ['display: block;']);

        // d
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    d: 'block'
                },
                _focus: {
                    d: 'flex'
                },
                _hover: {
                    d: 'none'
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe(':active {');
        expect(cssAsArray[1].trim()).toBe('display: block;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe(':focus {');
        expect(cssAsArray[4].trim()).toBe('display: flex;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe(':hover {');
        expect(cssAsArray[7].trim()).toBe('display: none;');
        expect(cssAsArray[8].trim()).toBe('}');

        // opacity
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    opacity: .25
                },
                _focus: {
                    opacity: .5
                },
                _hover: {
                    opacity: .75
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe(':active {');
        expect(cssAsArray[1].trim()).toBe('opacity: 0.25;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe(':focus {');
        expect(cssAsArray[4].trim()).toBe('opacity: 0.5;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe(':hover {');
        expect(cssAsArray[7].trim()).toBe('opacity: 0.75;');
        expect(cssAsArray[8].trim()).toBe('}');

        // op
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    op: .25
                },
                _focus: {
                    op: .5
                },
                _hover: {
                    op: .75
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe(':active {');
        expect(cssAsArray[1].trim()).toBe('opacity: 0.25;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe(':focus {');
        expect(cssAsArray[4].trim()).toBe('opacity: 0.5;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe(':hover {');
        expect(cssAsArray[7].trim()).toBe('opacity: 0.75;');
        expect(cssAsArray[8].trim()).toBe('}');

        // reset
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    reset: true
                },
                _focus: {
                    reset: true
                },
                _hover: {
                    reset: true
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe(':active {');
        expect(cssAsArray[1].trim()).toBe('appearance: none;');
        expect(cssAsArray[2].trim()).toBe('background: none;');
        expect(cssAsArray[3].trim()).toBe('border: none;');
        expect(cssAsArray[4].trim()).toBe('}');
        expect(cssAsArray[5].trim()).toBe(':focus {');
        expect(cssAsArray[6].trim()).toBe('appearance: none;');
        expect(cssAsArray[7].trim()).toBe('background: none;');
        expect(cssAsArray[8].trim()).toBe('border: none;');
        expect(cssAsArray[9].trim()).toBe('}');
        expect(cssAsArray[10].trim()).toBe(':hover {');
        expect(cssAsArray[11].trim()).toBe('appearance: none;');
        expect(cssAsArray[12].trim()).toBe('background: none;');
        expect(cssAsArray[13].trim()).toBe('border: none;');
        expect(cssAsArray[14].trim()).toBe('}');

        // resize
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    resize: 'both'
                },
                _focus: {
                    resize: 'none'
                },
                _hover: {
                    resize: 'both'
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe(':active {');
        expect(cssAsArray[1].trim()).toBe('resize: both;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe(':focus {');
        expect(cssAsArray[4].trim()).toBe('resize: none;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe(':hover {');
        expect(cssAsArray[7].trim()).toBe('resize: both;');
        expect(cssAsArray[8].trim()).toBe('}');
    });

    it('should return css with responsive queries', () => {
        // all
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { all: 'initial' },
                    sm: { all: 'inherit' },
                    md: { all: 'initial' },
                    lg: { all: 'inherit' },
                    xl: { all: 'initial' }
                },
                _up: {
                    xs: { all: 'initial' },
                    sm: { all: 'inherit' },
                    md: { all: 'initial' },
                    lg: { all: 'inherit' },
                    xl: { all: 'initial' }
                }
            }
        });
        let cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('all: initial;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('all: inherit;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('all: initial;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('all: inherit;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('all: initial;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('all: initial;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('all: inherit;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('all: initial;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('all: inherit;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('all: initial;');
        expect(cssAsArray[29].trim()).toBe('}');

        // appearance
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { appearance: 'inherit' },
                    sm: { appearance: 'initial' },
                    md: { appearance: 'inherit' },
                    lg: { appearance: 'initial' },
                    xl: { appearance: 'inherit' }
                },
                _up: {
                    xs: { appearance: 'inherit' },
                    sm: { appearance: 'initial' },
                    md: { appearance: 'inherit' },
                    lg: { appearance: 'initial' },
                    xl: { appearance: 'inherit' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('appearance: inherit;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('appearance: initial;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('appearance: inherit;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('appearance: initial;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('appearance: inherit;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('appearance: inherit;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('appearance: initial;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('appearance: inherit;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('appearance: initial;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('appearance: inherit;');
        expect(cssAsArray[29].trim()).toBe('}');

        // block
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { block: true },
                    sm: { block: true },
                    md: { block: true },
                    lg: { block: true },
                    xl: { block: true }
                },
                _up: {
                    xs: { block: true },
                    sm: { block: true },
                    md: { block: true },
                    lg: { block: true },
                    xl: { block: true }
                },
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('display: block;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('display: block;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('display: block;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('display: block;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('display: block;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('display: block;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('display: block;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('display: block;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('display: block;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('display: block;');
        expect(cssAsArray[29].trim()).toBe('}');

        // boxSizing
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { boxSizing: 'border-box' },
                    sm: { boxSizing: 'content-box' },
                    md: { boxSizing: 'border-box' },
                    lg: { boxSizing: 'content-box' },
                    xl: { boxSizing: 'border-box' }
                },
                _up: {
                    xs: { boxSizing: 'border-box' },
                    sm: { boxSizing: 'content-box' },
                    md: { boxSizing: 'border-box' },
                    lg: { boxSizing: 'content-box' },
                    xl: { boxSizing: 'border-box' }
                },
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('box-sizing: border-box;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('box-sizing: content-box;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('box-sizing: border-box;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('box-sizing: content-box;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('box-sizing: border-box;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('box-sizing: border-box;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('box-sizing: content-box;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('box-sizing: border-box;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('box-sizing: content-box;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('box-sizing: border-box;');
        expect(cssAsArray[29].trim()).toBe('}');

        // content
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { content: '"xs"' },
                    sm: { content: '"sm"' },
                    md: { content: '"md"' },
                    lg: { content: '"lg"' },
                    xl: { content: '"xl"' }
                },
                _up: {
                    xs: { content: '"xs"' },
                    sm: { content: '"sm"' },
                    md: { content: '"md"' },
                    lg: { content: '"lg"' },
                    xl: { content: '"xl"' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('content: "xs";');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('content: "sm";');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('content: "md";');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('content: "lg";');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('content: "xl";');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('content: "xs";');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('content: "sm";');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('content: "md";');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('content: "lg";');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('content: "xl";');
        expect(cssAsArray[29].trim()).toBe('}');


        // cursor
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { cursor: 'default' },
                    sm: { cursor: 'pointer' },
                    md: { cursor: 'default' },
                    lg: { cursor: 'pointer' },
                    xl: { cursor: 'default' }
                },
                _up: {
                    xs: { cursor: 'default' },
                    sm: { cursor: 'pointer' },
                    md: { cursor: 'default' },
                    lg: { cursor: 'pointer' },
                    xl: { cursor: 'default' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('cursor: default;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('cursor: pointer;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('cursor: default;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('cursor: pointer;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('cursor: default;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('cursor: default;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('cursor: pointer;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('cursor: default;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('cursor: pointer;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('cursor: default;');
        expect(cssAsArray[29].trim()).toBe('}');

        // display
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { display: 'block' },
                    sm: { display: 'flex' },
                    md: { display: 'grid' },
                    lg: { display: 'inline-block' },
                    xl: { display: 'none' }
                },
                _up: {
                    xs: { display: 'block' },
                    sm: { display: 'flex' },
                    md: { display: 'grid' },
                    lg: { display: 'inline-block' },
                    xl: { display: 'none' }
                },
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('display: block;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('display: flex;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('display: grid;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('display: inline-block;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('display: none;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('display: block;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('display: flex;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('display: grid;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('display: inline-block;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('display: none;');
        expect(cssAsArray[29].trim()).toBe('}');

        // d
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { d: 'block' },
                    sm: { d: 'flex' },
                    md: { d: 'grid' },
                    lg: { d: 'inline-block' },
                    xl: { d: 'none' }
                },
                _up: {
                    xs: { d: 'block' },
                    sm: { d: 'flex' },
                    md: { d: 'grid' },
                    lg: { d: 'inline-block' },
                    xl: { d: 'none' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('display: block;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('display: flex;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('display: grid;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('display: inline-block;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('display: none;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('display: block;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('display: flex;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('display: grid;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('display: inline-block;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('display: none;');
        expect(cssAsArray[29].trim()).toBe('}');

        // opacity
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { opacity: 0 },
                    sm: { opacity: .25 },
                    md: { opacity: .5 },
                    lg: { opacity: .75 },
                    xl: { opacity: 1 }
                },
                _up: {
                    xs: { opacity: 0 },
                    sm: { opacity: .25 },
                    md: { opacity: .5 },
                    lg: { opacity: .75 },
                    xl: { opacity: 1 }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('opacity: 0;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('opacity: 0.25;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('opacity: 0.5;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('opacity: 0.75;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('opacity: 1;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('opacity: 0;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('opacity: 0.25;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('opacity: 0.5;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('opacity: 0.75;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('opacity: 1;');
        expect(cssAsArray[29].trim()).toBe('}');

        // op
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { op: 0 },
                    sm: { op: .25 },
                    md: { op: .5 },
                    lg: { op: .75 },
                    xl: { op: 1 }
                },
                _up: {
                    xs: { op: 0 },
                    sm: { op: .25 },
                    md: { op: .5 },
                    lg: { op: .75 },
                    xl: { op: 1 }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('opacity: 0;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('opacity: 0.25;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('opacity: 0.5;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('opacity: 0.75;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('opacity: 1;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('opacity: 0;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('opacity: 0.25;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('opacity: 0.5;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('opacity: 0.75;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('opacity: 1;');
        expect(cssAsArray[29].trim()).toBe('}');

        // reset
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { reset: true },
                    sm: { reset: true },
                    md: { reset: true },
                    lg: { reset: true },
                    xl: { reset: true }
                },
                _up: {
                    xs: { reset: true },
                    sm: { reset: true },
                    md: { reset: true },
                    lg: { reset: true },
                    xl: { reset: true }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('appearance: none;');
        expect(cssAsArray[2].trim()).toBe('background: none;');
        expect(cssAsArray[3].trim()).toBe('border: none;');
        expect(cssAsArray[4].trim()).toBe('}');
        expect(cssAsArray[5].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[6].trim()).toBe('appearance: none;');
        expect(cssAsArray[7].trim()).toBe('background: none;');
        expect(cssAsArray[8].trim()).toBe('border: none;');
        expect(cssAsArray[9].trim()).toBe('}');
        expect(cssAsArray[10].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[11].trim()).toBe('appearance: none;');
        expect(cssAsArray[12].trim()).toBe('background: none;');
        expect(cssAsArray[13].trim()).toBe('border: none;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[16].trim()).toBe('appearance: none;');
        expect(cssAsArray[17].trim()).toBe('background: none;');
        expect(cssAsArray[18].trim()).toBe('border: none;');
        expect(cssAsArray[19].trim()).toBe('}');
        expect(cssAsArray[20].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[21].trim()).toBe('appearance: none;');
        expect(cssAsArray[22].trim()).toBe('background: none;');
        expect(cssAsArray[23].trim()).toBe('border: none;');
        expect(cssAsArray[24].trim()).toBe('}');
        expect(cssAsArray[25].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[26].trim()).toBe('appearance: none;');
        expect(cssAsArray[27].trim()).toBe('background: none;');
        expect(cssAsArray[28].trim()).toBe('border: none;');
        expect(cssAsArray[29].trim()).toBe('}');
        expect(cssAsArray[30].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[31].trim()).toBe('appearance: none;');
        expect(cssAsArray[32].trim()).toBe('background: none;');
        expect(cssAsArray[33].trim()).toBe('border: none;');
        expect(cssAsArray[34].trim()).toBe('}');
        expect(cssAsArray[35].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[36].trim()).toBe('appearance: none;');
        expect(cssAsArray[37].trim()).toBe('background: none;');
        expect(cssAsArray[38].trim()).toBe('border: none;');
        expect(cssAsArray[39].trim()).toBe('}');
        expect(cssAsArray[40].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[41].trim()).toBe('appearance: none;');
        expect(cssAsArray[42].trim()).toBe('background: none;');
        expect(cssAsArray[43].trim()).toBe('border: none;');
        expect(cssAsArray[44].trim()).toBe('}');
        expect(cssAsArray[45].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[46].trim()).toBe('appearance: none;');
        expect(cssAsArray[47].trim()).toBe('background: none;');
        expect(cssAsArray[48].trim()).toBe('border: none;');
        expect(cssAsArray[49].trim()).toBe('}');

        // resize
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { resize: 'both' },
                    sm: { resize: 'horizontal' },
                    md: { resize: 'vertical' },
                    lg: { resize: 'horizontal' },
                    xl: { resize: 'both' }
                },
                _up: {
                    xs: { resize: 'both' },
                    sm: { resize: 'horizontal' },
                    md: { resize: 'vertical' },
                    lg: { resize: 'horizontal' },
                    xl: { resize: 'both' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('resize: both;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('resize: horizontal;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('resize: vertical;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('resize: horizontal;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('resize: both;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('resize: both;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('resize: horizontal;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('resize: vertical;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('resize: horizontal;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('resize: both;');
        expect(cssAsArray[29].trim()).toBe('}');
    });
});