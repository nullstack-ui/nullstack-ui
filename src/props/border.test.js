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

describe('border props', () => {
    it('should return correct css props', () => {
        // border (boolean)
        let props = handleProps({
            ...mockedProps,
            props: {
                border: true
            },
        });

        expect(props.border).toBeTruthy();
        expect(props.border.cssProps[0].key).toBe('border');
        expect(props.border.cssProps[0].value).toBe('solid 1px #000');
        expect(props.border.initialValue).toBe(true);
        expect(props.border.prop).toBe('border');

        // border (none)
        props = handleProps({
            ...mockedProps,
            props: {
                border: 'none'
            },
        });

        expect(props.border).toBeTruthy();
        expect(props.border.cssProps[0].key).toBe('border');
        expect(props.border.cssProps[0].value).toBe('none');
        expect(props.border.initialValue).toBe('none');
        expect(props.border.prop).toBe('border');

        // border (string)
        props = handleProps({
            ...mockedProps,
            props: {
                border: 'blue'
            },
        });

        expect(props.border).toBeTruthy();
        expect(props.border.cssProps[0].key).toBe('border');
        expect(props.border.cssProps[0].value).toBe('solid 1px blue');
        expect(props.border.initialValue).toBe('blue');
        expect(props.border.prop).toBe('border');

        // border (object)
        props = handleProps({
            ...mockedProps,
            props: {
                border: {
                    color: 'red',
                    style: 'dashed',
                    width: 2,
                }
            }
        });

        expect(props.borderColor).toBeTruthy();
        expect(props.borderColor.cssProps[0].key).toBe('border-color');
        expect(props.borderColor.cssProps[0].value).toBe('red');
        expect(props.borderColor.initialValue).toBe('red');
        expect(props.borderColor.prop).toBe('borderColor');
    });
});