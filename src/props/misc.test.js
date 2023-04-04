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
    });
});