import { addToCache, cache } from '..';
import { handleProps } from '.';
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

describe('filter props', () => {
    it('should return correct css props', () => {
        // blur
        let props = handleProps({
            ...mockedProps,
            props: {
                blur: 25
            },
        });

        expect(props.filter.parent).toBeTruthy();
        expect(props.filter.blur).toBeTruthy();
        expect(props.filter.blur.cssProps[0].key).toBe('blur');
        expect(props.filter.blur.cssProps[0].value).toBe(25);
        expect(props.filter.blur.initialValue).toBe(25);
        expect(props.filter.blur.prop).toBe('blur');
    });
});