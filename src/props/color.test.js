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

describe('color props', () => {
    it('should return correct css props', () => {
        // accentColor
        let props = handleProps({
            ...mockedProps,
            props: {
                accentColor: 'red'
            },
        });

        expect(props.accentColor).toBeTruthy();
        expect(props.accentColor.cssProps[0].key).toBe('accent-color');
        expect(props.accentColor.cssProps[0].value).toBe('red');
        expect(props.accentColor.initialValue).toBe('red');
        expect(props.accentColor.prop).toBe('accentColor');

        // bgColor
        props = handleProps({
            ...mockedProps,
            props: {
                bgColor: 'red'
            },
        });

        expect(props.bgColor).toBeTruthy();
        expect(props.bgColor.cssProps[0].key).toBe('background-color');
        expect(props.bgColor.cssProps[0].value).toBe('red');
        expect(props.bgColor.initialValue).toBe('red');
        expect(props.bgColor.prop).toBe('bgColor');

        // bg.color
        props = handleProps({
            ...mockedProps,
            props: {
                bg: {
                    color: 'red'
                }
            },
        });

        expect(props.bgColor).toBeTruthy();
        expect(props.bgColor.cssProps[0].key).toBe('background-color');
        expect(props.bgColor.cssProps[0].value).toBe('red');
        expect(props.bgColor.initialValue).toBe('red');
        expect(props.bgColor.prop).toBe('bgColor');

        // caretColor
        props = handleProps({
            ...mockedProps,
            props: {
                caretColor: 'red'
            },
        });

        expect(props.caretColor).toBeTruthy();
        expect(props.caretColor.cssProps[0].key).toBe('caret-color');
        expect(props.caretColor.cssProps[0].value).toBe('red');
        expect(props.caretColor.initialValue).toBe('red');
        expect(props.caretColor.prop).toBe('caretColor');

        // color
        props = handleProps({
            ...mockedProps,
            props: {
                color: 'red'
            },
        });

        expect(props.color).toBeTruthy();
        expect(props.color.cssProps[0].key).toBe('background-color');
        expect(props.color.cssProps[0].value).toBe('red');
        expect(props.color.cssProps[1].key).toBe('color');
        expect(props.color.cssProps[1].value).toBe('#FFE5E5');
        expect(props.color.initialValue).toBe('red');
        expect(props.color.prop).toBe('color');

        // gradient
        props = handleProps({
            ...mockedProps,
            props: {
                gradient: {
                    colors: ['red', 'blue'],
                    to: 'right'
                }
            }
        });

        expect(props.gradient).toBeTruthy();
        expect(props.gradient.cssProps[0].key).toBe('background-image');
        expect(props.gradient.cssProps[0].value).toBe('linear-gradient(to right, red, blue)');
        expect(props.gradient.initialValue.colors[0]).toBe('red');
        expect(props.gradient.initialValue.colors[1]).toBe('blue');
        expect(props.gradient.initialValue.to).toBe('right');
        expect(props.gradient.prop).toBe('gradient');

        // bg.gradient
        props = handleProps({
            ...mockedProps,
            props: {
                bg: {
                    gradient: {
                        colors: ['red', 'blue'],
                        to: 'right'
                    }
                }
            }
        });

        expect(props.gradient).toBeTruthy();
        expect(props.gradient.cssProps[0].key).toBe('background-image');
        expect(props.gradient.cssProps[0].value).toBe('linear-gradient(to right, red, blue)');
        expect(props.gradient.initialValue.colors[0]).toBe('red');
        expect(props.gradient.initialValue.colors[1]).toBe('blue');
        expect(props.gradient.initialValue.to).toBe('right');
        expect(props.gradient.prop).toBe('gradient');

        // textColor
        props = handleProps({
            ...mockedProps,
            props: {
                textColor: 'red'
            },
        });

        expect(props.textColor).toBeTruthy();
        expect(props.textColor.cssProps[0].key).toBe('color');
        expect(props.textColor.cssProps[0].value).toBe('red');
        expect(props.textColor.initialValue).toBe('red');
        expect(props.textColor.prop).toBe('textColor');

        // text.color
        props = handleProps({
            ...mockedProps,
            props: {
                text: {
                    color: 'red'
                }
            }
        });

        expect(props.textColor).toBeTruthy();
        expect(props.textColor.cssProps[0].key).toBe('color');
        expect(props.textColor.cssProps[0].value).toBe('red');
        expect(props.textColor.initialValue).toBe('red');
        expect(props.textColor.prop).toBe('textColor');
    });
});