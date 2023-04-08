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

describe('bg props', () => {
    it('should return correct css props', () => {
        // bg (string)
        let props = handleProps({
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

        // bg (object)
        props = handleProps({
            ...mockedProps,
            props: {
                bg: {
                    attachment: 'fixed',
                    blend: 'multiply',
                    clip: 'text',
                    color: 'red',
                    image: 'url(image.png)',
                    origin: 'content',
                    position: 'center center',
                    repeat: 'no-repeat',
                    size: 'cover',
                    url: 'image.png'
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
        expect(props.bgClip.initialValue).toBe('text');
        expect(props.bgClip.prop).toBe('bgClip');

        expect(props.bgColor).toBeTruthy();
        expect(props.bgColor.cssProps[0].key).toBe('background-color');
        expect(props.bgColor.cssProps[0].value).toBe('red');
        expect(props.bgColor.initialValue).toBe('red');
        expect(props.bgColor.prop).toBe('bgColor');

        expect(props.bgImage).toBeTruthy();
        expect(props.bgImage.cssProps[0].key).toBe('background-image');
        expect(props.bgImage.cssProps[0].value).toBe('url(image.png)');
        expect(props.bgImage.initialValue).toBe('url(image.png)');
        expect(props.bgImage.prop).toBe('bgImage');

        expect(props.bgOrigin).toBeTruthy();
        expect(props.bgOrigin.cssProps[0].key).toBe('background-origin');
        expect(props.bgOrigin.cssProps[0].value).toBe('content-box');
        expect(props.bgOrigin.initialValue).toBe('content');
        expect(props.bgOrigin.prop).toBe('bgOrigin');

        expect(props.bgPosition).toBeTruthy();
        expect(props.bgPosition.cssProps[0].key).toBe('background-position');
        expect(props.bgPosition.cssProps[0].value).toBe('center center');
        expect(props.bgPosition.initialValue).toBe('center center');
        expect(props.bgPosition.prop).toBe('bgPosition');

        expect(props.bgRepeat).toBeTruthy();
        expect(props.bgRepeat.cssProps[0].key).toBe('background-repeat');
        expect(props.bgRepeat.cssProps[0].value).toBe('no-repeat');
        expect(props.bgRepeat.initialValue).toBe('no-repeat');
        expect(props.bgRepeat.prop).toBe('bgRepeat');

        expect(props.bgSize).toBeTruthy();
        expect(props.bgSize.cssProps[0].key).toBe('background-size');
        expect(props.bgSize.cssProps[0].value).toBe('cover');
        expect(props.bgSize.initialValue).toBe('cover');
        expect(props.bgSize.prop).toBe('bgSize');

        expect(props.bgUrl).toBeTruthy();
        expect(props.bgUrl.cssProps[0].key).toBe('background-image');
        expect(props.bgUrl.cssProps[0].value).toBe('url(image.png)');
        expect(props.bgUrl.initialValue).toBe('image.png');
        expect(props.bgUrl.prop).toBe('bgUrl');

        // bgAttachment
        props = handleProps({
            ...mockedProps,
            props: {
                bgAttachment: 'scroll'
            },
        });

        expect(props.bgAttachment).toBeTruthy();
        expect(props.bgAttachment.cssProps[0].key).toBe('background-attachment');
        expect(props.bgAttachment.cssProps[0].value).toBe('scroll');
        expect(props.bgAttachment.initialValue).toBe('scroll');
        expect(props.bgAttachment.prop).toBe('bgAttachment');

        // bgBlend
        props = handleProps({
            ...mockedProps,
            props: {
                bgBlend: 'multiply'
            },
        });

        expect(props.bgBlend).toBeTruthy();
        expect(props.bgBlend.cssProps[0].key).toBe('background-blend-mode');
        expect(props.bgBlend.cssProps[0].value).toBe('multiply');
        expect(props.bgBlend.initialValue).toBe('multiply');
        expect(props.bgBlend.prop).toBe('bgBlend');

        // bgClip
        props = handleProps({
            ...mockedProps,
            props: {
                bgClip: 'text'
            },
        });

        expect(props.bgClip).toBeTruthy();
        expect(props.bgClip.cssProps[0].key).toBe('background-clip');
        expect(props.bgClip.cssProps[0].value).toBe('text');
        expect(props.bgClip.initialValue).toBe('text');
        expect(props.bgClip.prop).toBe('bgClip');

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

        // bgImage
        props = handleProps({
            ...mockedProps,
            props: {
                bgImage: 'url(image.png)'
            },
        });

        expect(props.bgImage).toBeTruthy();
        expect(props.bgImage.cssProps[0].key).toBe('background-image');
        expect(props.bgImage.cssProps[0].value).toBe('url(image.png)');
        expect(props.bgImage.initialValue).toBe('url(image.png)');
        expect(props.bgImage.prop).toBe('bgImage');

        // bgOrigin
        props = handleProps({
            ...mockedProps,
            props: {
                bgOrigin: 'content'
            },
        });

        expect(props.bgOrigin).toBeTruthy();
        expect(props.bgOrigin.cssProps[0].key).toBe('background-origin');
        expect(props.bgOrigin.cssProps[0].value).toBe('content-box');
        expect(props.bgOrigin.initialValue).toBe('content');
        expect(props.bgOrigin.prop).toBe('bgOrigin');

        // bgPosition
        props = handleProps({
            ...mockedProps,
            props: {
                bgPosition: 'center center'
            },
        });

        expect(props.bgPosition).toBeTruthy();
        expect(props.bgPosition.cssProps[0].key).toBe('background-position');
        expect(props.bgPosition.cssProps[0].value).toBe('center center');
        expect(props.bgPosition.initialValue).toBe('center center');
        expect(props.bgPosition.prop).toBe('bgPosition');

        // bgRepeat
        props = handleProps({
            ...mockedProps,
            props: {
                bgRepeat: 'no-repeat'
            },
        });

        expect(props.bgRepeat).toBeTruthy();
        expect(props.bgRepeat.cssProps[0].key).toBe('background-repeat');
        expect(props.bgRepeat.cssProps[0].value).toBe('no-repeat');
        expect(props.bgRepeat.initialValue).toBe('no-repeat');
        expect(props.bgRepeat.prop).toBe('bgRepeat');

        // bgSize
        props = handleProps({
            ...mockedProps,
            props: {
                bgSize: 'cover'
            },
        });

        expect(props.bgSize).toBeTruthy();
        expect(props.bgSize.cssProps[0].key).toBe('background-size');
        expect(props.bgSize.cssProps[0].value).toBe('cover');
        expect(props.bgSize.initialValue).toBe('cover');
        expect(props.bgSize.prop).toBe('bgSize');

        // bgUrl
        props = handleProps({
            ...mockedProps,
            props: {
                bgUrl: 'image.png'
            },
        });

        expect(props.bgUrl).toBeTruthy();
        expect(props.bgUrl.cssProps[0].key).toBe('background-image');
        expect(props.bgUrl.cssProps[0].value).toBe('url(image.png)');
        expect(props.bgUrl.initialValue).toBe('image.png');
        expect(props.bgUrl.prop).toBe('bgUrl');
    });

    it('should return cached props', () => {
        // bg (string)
        let props = handleProps({
            ...mockedProps,
            props: {
                bg: 'url(image.png)'
            },
        });

        expect(cache.bg).toBeTruthy();
        expect(cache.bg['url(image.png)'].cssProps[0].key).toBe('background');
        expect(cache.bg['url(image.png)'].cssProps[0].value).toBe('url(image.png)');
        expect(cache.bg['url(image.png)'].initialValue).toBe('url(image.png)');
        expect(cache.bg['url(image.png)'].prop).toBe('bg');
        expect(props.bg).toBeTruthy();
        expect(props.bg.cssProps[0].key).toBe('background');
        expect(props.bg.cssProps[0].value).toBe('url(image.png)');
        expect(props.bg.initialValue).toBe('url(image.png)');
        expect(props.bg.prop).toBe('bg');

        // bg (object)
        props = handleProps({
            ...mockedProps,
            props: {
                bg: {
                    attachment: 'fixed',
                    blend: 'multiply',
                    clip: 'text',
                    color: 'red',
                    image: 'url(image.png)',
                    origin: 'content',
                    position: 'center center',
                    repeat: 'no-repeat',
                    size: 'cover',
                    url: 'image.png'
                }
            },
        });

        // bgAttachment
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

        // bgBlend
        expect(cache.bgBlend).toBeTruthy();
        expect(cache.bgBlend.multiply.cssProps[0].key).toBe('background-blend-mode');
        expect(cache.bgBlend.multiply.cssProps[0].value).toBe('multiply');
        expect(cache.bgBlend.multiply.initialValue).toBe('multiply');
        expect(cache.bgBlend.multiply.prop).toBe('bgBlend');
        expect(props.bgBlend).toBeTruthy();
        expect(props.bgBlend.cssProps[0].key).toBe('background-blend-mode');
        expect(props.bgBlend.cssProps[0].value).toBe('multiply');
        expect(props.bgBlend.initialValue).toBe('multiply');
        expect(props.bgBlend.prop).toBe('bgBlend');

        // bgClip
        expect(cache.bgClip).toBeTruthy();
        expect(cache.bgClip.text.cssProps[0].key).toBe('background-clip');
        expect(cache.bgClip.text.cssProps[0].value).toBe('text');
        expect(cache.bgClip.text.initialValue).toBe('text');
        expect(cache.bgClip.text.prop).toBe('bgClip');
        expect(props.bgClip).toBeTruthy();
        expect(props.bgClip.cssProps[0].key).toBe('background-clip');
        expect(props.bgClip.cssProps[0].value).toBe('text');
        expect(props.bgClip.initialValue).toBe('text');
        expect(props.bgClip.prop).toBe('bgClip');

        // bgColor
        expect(cache.bgColor).toBeTruthy();
        expect(cache.bgColor.red.cssProps[0].key).toBe('background-color');
        expect(cache.bgColor.red.cssProps[0].value).toBe('red');
        expect(cache.bgColor.red.initialValue).toBe('red');
        expect(cache.bgColor.red.prop).toBe('bgColor');
        expect(props.bgColor).toBeTruthy();
        expect(props.bgColor.cssProps[0].key).toBe('background-color');
        expect(props.bgColor.cssProps[0].value).toBe('red');
        expect(props.bgColor.initialValue).toBe('red');
        expect(props.bgColor.prop).toBe('bgColor');

        // bgImage
        expect(cache.bgImage).toBeTruthy();
        expect(cache.bgImage['url(image.png)'].cssProps[0].key).toBe('background-image');
        expect(cache.bgImage['url(image.png)'].cssProps[0].value).toBe('url(image.png)');
        expect(cache.bgImage['url(image.png)'].initialValue).toBe('url(image.png)');
        expect(cache.bgImage['url(image.png)'].prop).toBe('bgImage');
        expect(props.bgImage).toBeTruthy();
        expect(props.bgImage.cssProps[0].key).toBe('background-image');
        expect(props.bgImage.cssProps[0].value).toBe('url(image.png)');
        expect(props.bgImage.initialValue).toBe('url(image.png)');
        expect(props.bgImage.prop).toBe('bgImage');

        // bgOrigin
        expect(cache.bgOrigin).toBeTruthy();
        expect(cache.bgOrigin.content.cssProps[0].key).toBe('background-origin');
        expect(cache.bgOrigin.content.cssProps[0].value).toBe('content-box');
        expect(cache.bgOrigin.content.initialValue).toBe('content');
        expect(cache.bgOrigin.content.prop).toBe('bgOrigin');
        expect(props.bgOrigin).toBeTruthy();
        expect(props.bgOrigin.cssProps[0].key).toBe('background-origin');
        expect(props.bgOrigin.cssProps[0].value).toBe('content-box');
        expect(props.bgOrigin.initialValue).toBe('content');
        expect(props.bgOrigin.prop).toBe('bgOrigin');

        // bgPosition
        expect(cache.bgPosition).toBeTruthy();
        expect(cache.bgPosition['center center'].cssProps[0].key).toBe('background-position');
        expect(cache.bgPosition['center center'].cssProps[0].value).toBe('center center');
        expect(cache.bgPosition['center center'].initialValue).toBe('center center');
        expect(cache.bgPosition['center center'].prop).toBe('bgPosition');
        expect(props.bgPosition).toBeTruthy();
        expect(props.bgPosition.cssProps[0].key).toBe('background-position');
        expect(props.bgPosition.cssProps[0].value).toBe('center center');
        expect(props.bgPosition.initialValue).toBe('center center');
        expect(props.bgPosition.prop).toBe('bgPosition');

        // bgRepeat
        expect(cache.bgRepeat).toBeTruthy();
        expect(cache.bgRepeat['no-repeat'].cssProps[0].key).toBe('background-repeat');
        expect(cache.bgRepeat['no-repeat'].cssProps[0].value).toBe('no-repeat');
        expect(cache.bgRepeat['no-repeat'].initialValue).toBe('no-repeat');
        expect(cache.bgRepeat['no-repeat'].prop).toBe('bgRepeat');
        expect(props.bgRepeat).toBeTruthy();
        expect(props.bgRepeat.cssProps[0].key).toBe('background-repeat');
        expect(props.bgRepeat.cssProps[0].value).toBe('no-repeat');
        expect(props.bgRepeat.initialValue).toBe('no-repeat');
        expect(props.bgRepeat.prop).toBe('bgRepeat');

        // bgSize
        expect(cache.bgSize).toBeTruthy();
        expect(cache.bgSize['cover'].cssProps[0].key).toBe('background-size');
        expect(cache.bgSize['cover'].cssProps[0].value).toBe('cover');
        expect(cache.bgSize['cover'].initialValue).toBe('cover');
        expect(cache.bgSize['cover'].prop).toBe('bgSize');
        expect(props.bgSize).toBeTruthy();
        expect(props.bgSize.cssProps[0].key).toBe('background-size');
        expect(props.bgSize.cssProps[0].value).toBe('cover');
        expect(props.bgSize.initialValue).toBe('cover');
        expect(props.bgSize.prop).toBe('bgSize');

        // bgUrl
        expect(cache.bgUrl).toBeTruthy();
        expect(cache.bgUrl['image.png'].cssProps[0].key).toBe('background-image');
        expect(cache.bgUrl['image.png'].cssProps[0].value).toBe('url(image.png)');
        expect(cache.bgUrl['image.png'].initialValue).toBe('image.png');
        expect(cache.bgUrl['image.png'].prop).toBe('bgUrl');
        expect(props.bgUrl).toBeTruthy();
        expect(props.bgUrl.cssProps[0].key).toBe('background-image');
        expect(props.bgUrl.cssProps[0].value).toBe('url(image.png)');
        expect(props.bgUrl.initialValue).toBe('image.png');
        expect(props.bgUrl.prop).toBe('bgUrl');

        // bgAttachment
        props = handleProps({
            ...mockedProps,
            props: {
                bgAttachment: 'fixed'
            },
        });

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

        // bgBlend
        props = handleProps({
            ...mockedProps,
            props: {
                bgBlend: 'screen',
            },
        });

        expect(cache.bgBlend).toBeTruthy();
        expect(cache.bgBlend.screen.cssProps[0].key).toBe('background-blend-mode');
        expect(cache.bgBlend.screen.cssProps[0].value).toBe('screen');
        expect(cache.bgBlend.screen.initialValue).toBe('screen');
        expect(cache.bgBlend.screen.prop).toBe('bgBlend');
        expect(props.bgBlend).toBeTruthy();
        expect(props.bgBlend.cssProps[0].key).toBe('background-blend-mode');
        expect(props.bgBlend.cssProps[0].value).toBe('screen');
        expect(props.bgBlend.initialValue).toBe('screen');
        expect(props.bgBlend.prop).toBe('bgBlend');

        // bgClip
        props = handleProps({
            ...mockedProps,
            props: {
                bgClip: 'border-box',
            },
        });

        expect(cache.bgClip).toBeTruthy();
        expect(cache.bgClip['border-box'].cssProps[0].key).toBe('background-clip');
        expect(cache.bgClip['border-box'].cssProps[0].value).toBe('border-box');
        expect(cache.bgClip['border-box'].initialValue).toBe('border-box');
        expect(cache.bgClip['border-box'].prop).toBe('bgClip');
        expect(props.bgClip).toBeTruthy();
        expect(props.bgClip.cssProps[0].key).toBe('background-clip');
        expect(props.bgClip.cssProps[0].value).toBe('border-box');
        expect(props.bgClip.initialValue).toBe('border-box');
        expect(props.bgClip.prop).toBe('bgClip');

        // bgColor
        props = handleProps({
            ...mockedProps,
            props: {
                bgColor: 'blue',
            },
        });

        expect(cache.bgColor).toBeTruthy();
        expect(cache.bgColor.blue.cssProps[0].key).toBe('background-color');
        expect(cache.bgColor.blue.cssProps[0].value).toBe('blue');
        expect(cache.bgColor.blue.initialValue).toBe('blue');
        expect(cache.bgColor.blue.prop).toBe('bgColor');
        expect(props.bgColor).toBeTruthy();
        expect(props.bgColor.cssProps[0].key).toBe('background-color');
        expect(props.bgColor.cssProps[0].value).toBe('blue');
        expect(props.bgColor.initialValue).toBe('blue');
        expect(props.bgColor.prop).toBe('bgColor');

        // bgImage
        props = handleProps({
            ...mockedProps,
            props: {
                bgImage: 'url(image2.png)',
            },
        });

        expect(cache.bgImage).toBeTruthy();
        expect(cache.bgImage['url(image2.png)'].cssProps[0].key).toBe('background-image');
        expect(cache.bgImage['url(image2.png)'].cssProps[0].value).toBe('url(image2.png)');
        expect(cache.bgImage['url(image2.png)'].initialValue).toBe('url(image2.png)');
        expect(cache.bgImage['url(image2.png)'].prop).toBe('bgImage');
        expect(props.bgImage).toBeTruthy();
        expect(props.bgImage.cssProps[0].key).toBe('background-image');
        expect(props.bgImage.cssProps[0].value).toBe('url(image2.png)');
        expect(props.bgImage.initialValue).toBe('url(image2.png)');
        expect(props.bgImage.prop).toBe('bgImage');

        // bgOrigin
        props = handleProps({
            ...mockedProps,
            props: {
                bgOrigin: 'border',
            },
        });

        expect(cache.bgOrigin).toBeTruthy();
        expect(cache.bgOrigin.border.cssProps[0].key).toBe('background-origin');
        expect(cache.bgOrigin.border.cssProps[0].value).toBe('border-box');
        expect(cache.bgOrigin.border.initialValue).toBe('border');
        expect(cache.bgOrigin.border.prop).toBe('bgOrigin');
        expect(props.bgOrigin).toBeTruthy();
        expect(props.bgOrigin.cssProps[0].key).toBe('background-origin');
        expect(props.bgOrigin.cssProps[0].value).toBe('border-box');
        expect(props.bgOrigin.initialValue).toBe('border');
        expect(props.bgOrigin.prop).toBe('bgOrigin');

        // bgPosition
        props = handleProps({
            ...mockedProps,
            props: {
                bgPosition: 'left',
            },
        });

        expect(cache.bgPosition).toBeTruthy();
        expect(cache.bgPosition.left.cssProps[0].key).toBe('background-position');
        expect(cache.bgPosition.left.cssProps[0].value).toBe('left');
        expect(cache.bgPosition.left.initialValue).toBe('left');
        expect(cache.bgPosition.left.prop).toBe('bgPosition');
        expect(props.bgPosition).toBeTruthy();
        expect(props.bgPosition.cssProps[0].key).toBe('background-position');
        expect(props.bgPosition.cssProps[0].value).toBe('left');
        expect(props.bgPosition.initialValue).toBe('left');
        expect(props.bgPosition.prop).toBe('bgPosition');

        // bgRepeat
        props = handleProps({
            ...mockedProps,
            props: {
                bgRepeat: 'repeat-x',
            },
        });

        expect(cache.bgRepeat).toBeTruthy();
        expect(cache.bgRepeat['repeat-x'].cssProps[0].key).toBe('background-repeat');
        expect(cache.bgRepeat['repeat-x'].cssProps[0].value).toBe('repeat-x');
        expect(cache.bgRepeat['repeat-x'].initialValue).toBe('repeat-x');
        expect(cache.bgRepeat['repeat-x'].prop).toBe('bgRepeat');
        expect(props.bgRepeat).toBeTruthy();
        expect(props.bgRepeat.cssProps[0].key).toBe('background-repeat');
        expect(props.bgRepeat.cssProps[0].value).toBe('repeat-x');
        expect(props.bgRepeat.initialValue).toBe('repeat-x');
        expect(props.bgRepeat.prop).toBe('bgRepeat');

        // bgSize
        props = handleProps({
            ...mockedProps,
            props: {
                bgSize: 'contain',
            },
        });

        expect(cache.bgSize).toBeTruthy();
        expect(cache.bgSize.contain.cssProps[0].key).toBe('background-size');
        expect(cache.bgSize.contain.cssProps[0].value).toBe('contain');
        expect(cache.bgSize.contain.initialValue).toBe('contain');
        expect(cache.bgSize.contain.prop).toBe('bgSize');
        expect(props.bgSize).toBeTruthy();
        expect(props.bgSize.cssProps[0].key).toBe('background-size');
        expect(props.bgSize.cssProps[0].value).toBe('contain');
        expect(props.bgSize.initialValue).toBe('contain');
        expect(props.bgSize.prop).toBe('bgSize');

        // bgUrl
        props = handleProps({
            ...mockedProps,
            props: {
                bgUrl: 'image2.png',
            },
        });

        expect(cache.bgUrl).toBeTruthy();
        expect(cache.bgUrl['image2.png'].cssProps[0].key).toBe('background-image');
        expect(cache.bgUrl['image2.png'].cssProps[0].value).toBe('url(image2.png)');
        expect(cache.bgUrl['image2.png'].initialValue).toBe('image2.png');
        expect(cache.bgUrl['image2.png'].prop).toBe('bgUrl');
        expect(props.bgUrl).toBeTruthy();
        expect(props.bgUrl.cssProps[0].key).toBe('background-image');
        expect(props.bgUrl.cssProps[0].value).toBe('url(image2.png)');
        expect(props.bgUrl.initialValue).toBe('image2.png');
        expect(props.bgUrl.prop).toBe('bgUrl');
    });

    it('should keep all previous cached keys', () => {
        // bg
        expect(cache.bg).toBeTruthy();
        expect(cache.bg.none.cssProps[0].key).toBe('background');
        expect(cache.bg.none.cssProps[0].value).toBe('none');
        expect(cache.bg['url(image.png)'].cssProps[0].key).toBe('background');
        expect(cache.bg['url(image.png)'].cssProps[0].value).toBe('url(image.png)');

        // bgAttachment
        expect(cache.bgAttachment).toBeTruthy();
        expect(cache.bgAttachment.fixed.cssProps[0].key).toBe('background-attachment');
        expect(cache.bgAttachment.fixed.cssProps[0].value).toBe('fixed');
        expect(cache.bgAttachment['scroll'].cssProps[0].key).toBe('background-attachment');
        expect(cache.bgAttachment['scroll'].cssProps[0].value).toBe('scroll');

        // bgBlend
        expect(cache.bgBlend).toBeTruthy();
        expect(cache.bgBlend.multiply.cssProps[0].key).toBe('background-blend-mode');
        expect(cache.bgBlend.multiply.cssProps[0].value).toBe('multiply');
        expect(cache.bgBlend.screen.cssProps[0].key).toBe('background-blend-mode');
        expect(cache.bgBlend.screen.cssProps[0].value).toBe('screen');

        // bgClip
        expect(cache.bgClip).toBeTruthy();
        expect(cache.bgClip['border-box'].cssProps[0].key).toBe('background-clip');
        expect(cache.bgClip['border-box'].cssProps[0].value).toBe('border-box');
        expect(cache.bgClip.text.cssProps[0].key).toBe('background-clip');
        expect(cache.bgClip.text.cssProps[0].value).toBe('text');

        // bgColor
        expect(cache.bgColor).toBeTruthy();
        expect(cache.bgColor.blue.cssProps[0].key).toBe('background-color');
        expect(cache.bgColor.blue.cssProps[0].value).toBe('blue');
        expect(cache.bgColor.red.cssProps[0].key).toBe('background-color');
        expect(cache.bgColor.red.cssProps[0].value).toBe('red');

        // bgImage
        expect(cache.bgImage).toBeTruthy();
        expect(cache.bgImage['url(image.png)'].cssProps[0].key).toBe('background-image');
        expect(cache.bgImage['url(image.png)'].cssProps[0].value).toBe('url(image.png)');
        expect(cache.bgImage['url(image2.png)'].cssProps[0].key).toBe('background-image');
        expect(cache.bgImage['url(image2.png)'].cssProps[0].value).toBe('url(image2.png)');

        // bgOrigin
        expect(cache.bgOrigin).toBeTruthy();
        expect(cache.bgOrigin.border.cssProps[0].key).toBe('background-origin');
        expect(cache.bgOrigin.border.cssProps[0].value).toBe('border-box');
        expect(cache.bgOrigin.content.cssProps[0].key).toBe('background-origin');
        expect(cache.bgOrigin.content.cssProps[0].value).toBe('content-box');

        // bgPosition
        expect(cache.bgPosition).toBeTruthy();
        expect(cache.bgPosition['center center'].cssProps[0].key).toBe('background-position');
        expect(cache.bgPosition['center center'].cssProps[0].value).toBe('center center');
        expect(cache.bgPosition.left.cssProps[0].key).toBe('background-position');
        expect(cache.bgPosition.left.cssProps[0].value).toBe('left');

        // bgRepeat
        expect(cache.bgRepeat).toBeTruthy();
        expect(cache.bgRepeat['no-repeat'].cssProps[0].key).toBe('background-repeat');
        expect(cache.bgRepeat['no-repeat'].cssProps[0].value).toBe('no-repeat');
        expect(cache.bgRepeat['repeat-x'].cssProps[0].key).toBe('background-repeat');
        expect(cache.bgRepeat['repeat-x'].cssProps[0].value).toBe('repeat-x');

        // bgSize
        expect(cache.bgSize).toBeTruthy();
        expect(cache.bgSize.contain.cssProps[0].key).toBe('background-size');
        expect(cache.bgSize.contain.cssProps[0].value).toBe('contain');
        expect(cache.bgSize.cover.cssProps[0].key).toBe('background-size');
        expect(cache.bgSize.cover.cssProps[0].value).toBe('cover');

        // bgUrl
        expect(cache.bgUrl).toBeTruthy();
        expect(cache.bgUrl['image.png'].cssProps[0].key).toBe('background-image');
        expect(cache.bgUrl['image.png'].cssProps[0].value).toBe('url(image.png)');
        expect(cache.bgUrl['image2.png'].cssProps[0].key).toBe('background-image');
        expect(cache.bgUrl['image2.png'].cssProps[0].value).toBe('url(image2.png)');
    });

    it('should return structured css', () => {
        // bg (string)
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bg: 'none'
            }
        });
        let cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background: none;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bg (object)
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bg: {
                    attachment: 'fixed',
                    blend: 'multiply',
                    clip: 'text',
                    color: 'red',
                    image: 'url(image.png)',
                    origin: 'content',
                    position: 'center center',
                    repeat: 'no-repeat',
                    size: 'cover',
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('& {');
        expect(cssAsArray[4].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('& {');
        expect(cssAsArray[7].trim()).toBe('background-clip: text;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('& {');
        expect(cssAsArray[10].trim()).toBe('background-color: red;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('& {');
        expect(cssAsArray[13].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('& {');
        expect(cssAsArray[16].trim()).toBe('background-origin: content-box;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('& {');
        expect(cssAsArray[19].trim()).toBe('background-position: center center;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('& {');
        expect(cssAsArray[22].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('& {');
        expect(cssAsArray[25].trim()).toBe('background-size: cover;');
        expect(cssAsArray[26].trim()).toBe('}');

        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bg: {
                    url: 'image.png',
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgAttachment
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgAttachment: 'fixed'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgBlend
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgBlend: 'multiply'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgClip
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgClip: 'text'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-clip: text;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgColor
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgColor: 'red'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-color: red;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgImage
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgImage: 'url(image.png)'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgOrigin
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgOrigin: 'content'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-origin: content-box;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgPosition
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgPosition: 'center center'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-position: center center;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgRepeat
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgRepeat: 'no-repeat'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgSize
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgSize: 'cover'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-size: cover;');
        expect(cssAsArray[2].trim()).toBe('}');

        // bgUrl
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                bgUrl: 'image.png'
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('& {');
        expect(cssAsArray[1].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[2].trim()).toBe('}');
    });

    it('should return css with _active, _focus, _active', () => {
        // bg (string)
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bg: 'none',
                },
                _focus: {
                    bg: 'none'
                },
                _hover: {
                    bg: 'none'
                },
                _down: {
                    xs: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    sm: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    md: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    lg: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    xl: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    sm: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    md: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    lg: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    },
                    xl: {
                        _active: { bg: 'none' },
                        _focus: { bg: 'none' },
                        _hover: { bg: 'none' }
                    }
                }
            }
        });
        checkState(style, ['background: none;']);

        // bg (object)
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bg: {
                        attachment: 'fixed',
                        blend: 'multiply',
                        clip: 'text',
                        color: 'red',
                        image: 'url(image.png)',
                        origin: 'content',
                        position: 'center center',
                        repeat: 'no-repeat',
                        size: 'cover',
                    }
                },
                _focus: {
                    bg: {
                        attachment: 'fixed',
                        blend: 'multiply',
                        clip: 'text',
                        color: 'red',
                        image: 'url(image.png)',
                        origin: 'content',
                        position: 'center center',
                        repeat: 'no-repeat',
                        size: 'cover',
                    }
                },
                _hover: {
                    bg: {
                        attachment: 'fixed',
                        blend: 'multiply',
                        clip: 'text',
                        color: 'red',
                        image: 'url(image.png)',
                        origin: 'content',
                        position: 'center center',
                        repeat: 'no-repeat',
                        size: 'cover',
                    }
                },
                _down: {
                    xs: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    sm: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    md: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    lg: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    xl: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    }
                },
                _up: {
                    xs: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    sm: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    md: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    lg: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    },
                    xl: {
                        _active: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _focus: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        },
                        _hover: {
                            bg: {
                                attachment: 'fixed',
                                blend: 'multiply',
                                clip: 'text',
                                color: 'red',
                                image: 'url(image.png)',
                                origin: 'content',
                                position: 'center center',
                                repeat: 'no-repeat',
                                size: 'cover',
                            }
                        }
                    }
                }
            }
        });
        checkState(style, [
            'background-attachment: fixed;',
            'background-blend-mode: multiply;',
            'background-clip: text;',
            'background-color: red;',
            'background-image: url(image.png);',
            'background-origin: content-box;',
            'background-position: center center;',
            'background-repeat: no-repeat;',
            'background-size: cover;'
        ], true);

        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bg: { url: 'image2.png' },
                },
                _focus: {
                    bg: { url: 'image2.png' }
                },
                _hover: {
                    bg: { url: 'image2.png' }
                },
                _down: {
                    xs: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    sm: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    md: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    lg: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    xl: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    }
                },
                _up: {
                    xs: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    sm: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    md: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    lg: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    },
                    xl: {
                        _active: { bg: { url: 'image2.png' } },
                        _focus: { bg: { url: 'image2.png' } },
                        _hover: { bg: { url: 'image2.png' } }
                    }
                }
            }
        });

        checkState(style, ['background-image: url(image2.png);']);

        // bgAttachment
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgAttachment: 'fixed',
                },
                _focus: {
                    bgAttachment: 'fixed'
                },
                _hover: {
                    bgAttachment: 'fixed'
                },
                _down: {
                    xs: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    sm: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    md: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    lg: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    xl: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    sm: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    md: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    lg: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    },
                    xl: {
                        _active: { bgAttachment: 'fixed' },
                        _focus: { bgAttachment: 'fixed' },
                        _hover: { bgAttachment: 'fixed' }
                    }
                }
            }
        });
        checkState(style, ['background-attachment: fixed;']);

        // bgBlend
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgBlend: 'multiply',
                },
                _focus: {
                    bgBlend: 'multiply'
                },
                _hover: {
                    bgBlend: 'multiply'
                },
                _down: {
                    xs: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    sm: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    md: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    lg: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    xl: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    sm: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    md: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    lg: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    },
                    xl: {
                        _active: { bgBlend: 'multiply' },
                        _focus: { bgBlend: 'multiply' },
                        _hover: { bgBlend: 'multiply' }
                    }
                }
            }
        });
        checkState(style, ['background-blend-mode: multiply;']);

        // bgClip
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgClip: 'text',
                },
                _focus: {
                    bgClip: 'text'
                },
                _hover: {
                    bgClip: 'text'
                },
                _down: {
                    xs: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    sm: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    md: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    lg: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    xl: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    sm: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    md: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    lg: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    },
                    xl: {
                        _active: { bgClip: 'text' },
                        _focus: { bgClip: 'text' },
                        _hover: { bgClip: 'text' }
                    }
                }
            }
        });
        checkState(style, ['background-clip: text;']);

        // bgColor
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgColor: 'red',
                },
                _focus: {
                    bgColor: 'red'
                },
                _hover: {
                    bgColor: 'red'
                },
                _down: {
                    xs: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    sm: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    md: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    lg: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    xl: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    sm: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    md: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    lg: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    },
                    xl: {
                        _active: { bgColor: 'red' },
                        _focus: { bgColor: 'red' },
                        _hover: { bgColor: 'red' }
                    }
                }
            }
        });
        checkState(style, ['background-color: red;']);

        // bgImage
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgImage: 'url(image.png)',
                },
                _focus: {
                    bgImage: 'url(image.png)'
                },
                _hover: {
                    bgImage: 'url(image.png)'
                },
                _down: {
                    xs: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    sm: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    md: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    lg: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    xl: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    sm: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    md: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    lg: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    },
                    xl: {
                        _active: { bgImage: 'url(image.png)' },
                        _focus: { bgImage: 'url(image.png)' },
                        _hover: { bgImage: 'url(image.png)' }
                    }
                }
            }
        });
        checkState(style, ['background-image: url(image.png);']);

        // bgOrigin
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgOrigin: 'content',
                },
                _focus: {
                    bgOrigin: 'content'
                },
                _hover: {
                    bgOrigin: 'content'
                },
                _down: {
                    xs: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    sm: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    md: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    lg: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    xl: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    sm: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    md: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    lg: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    },
                    xl: {
                        _active: { bgOrigin: 'content' },
                        _focus: { bgOrigin: 'content' },
                        _hover: { bgOrigin: 'content' }
                    }
                }
            }
        });
        checkState(style, ['background-origin: content-box;']);

        // bgPosition
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgPosition: 'center center',
                },
                _focus: {
                    bgPosition: 'center center'
                },
                _hover: {
                    bgPosition: 'center center'
                },
                _down: {
                    xs: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    sm: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    md: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    lg: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    xl: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    sm: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    md: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    lg: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    },
                    xl: {
                        _active: { bgPosition: 'center center' },
                        _focus: { bgPosition: 'center center' },
                        _hover: { bgPosition: 'center center' }
                    }
                }
            }
        });
        checkState(style, ['background-position: center center;']);

        // bgRepeat
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgRepeat: 'no-repeat',
                },
                _focus: {
                    bgRepeat: 'no-repeat'
                },
                _hover: {
                    bgRepeat: 'no-repeat'
                },
                _down: {
                    xs: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    sm: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    md: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    lg: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    xl: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    sm: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    md: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    lg: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    },
                    xl: {
                        _active: { bgRepeat: 'no-repeat' },
                        _focus: { bgRepeat: 'no-repeat' },
                        _hover: { bgRepeat: 'no-repeat' }
                    }
                }
            }
        });
        checkState(style, ['background-repeat: no-repeat;']);

        // bgSize
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgSize: 'cover',
                },
                _focus: {
                    bgSize: 'cover'
                },
                _hover: {
                    bgSize: 'cover'
                },
                _down: {
                    xs: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    sm: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    md: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    lg: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    xl: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    sm: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    md: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    lg: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    },
                    xl: {
                        _active: { bgSize: 'cover' },
                        _focus: { bgSize: 'cover' },
                        _hover: { bgSize: 'cover' }
                    }
                }
            }
        });
        checkState(style, ['background-size: cover;']);

        // bgUrl
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _active: {
                    bgUrl: 'image.png',
                },
                _focus: {
                    bgUrl: 'image.png'
                },
                _hover: {
                    bgUrl: 'image.png'
                },
                _down: {
                    xs: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    sm: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    md: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    lg: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    xl: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    }
                },
                _up: {
                    xs: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    sm: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    md: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    lg: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    },
                    xl: {
                        _active: { bgUrl: 'image.png' },
                        _focus: { bgUrl: 'image.png' },
                        _hover: { bgUrl: 'image.png' }
                    }
                }
            }
        });
        checkState(style, ['background-image: url(image.png);']);
    });

    it('should return css with responsive queries', () => {
        // bg (string)
        let style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bg: 'initial' },
                    sm: { bg: 'inherit' },
                    md: { bg: 'initial' },
                    lg: { bg: 'inherit' },
                    xl: { bg: 'initial' }
                },
                _up: {
                    xs: { bg: 'initial' },
                    sm: { bg: 'inherit' },
                    md: { bg: 'initial' },
                    lg: { bg: 'inherit' },
                    xl: { bg: 'initial' }
                }
            }
        });
        let cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background: initial;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background: inherit;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background: initial;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background: inherit;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background: initial;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background: initial;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background: inherit;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background: initial;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background: inherit;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background: initial;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bg (object)
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: {
                        bg: {
                            attachment: 'fixed',
                            blend: 'multiply',
                            clip: 'border-box',
                            color: 'red',
                            image: 'url(image.png)',
                            origin: 'border',
                            position: 'left top',
                            repeat: 'no-repeat',
                            size: 'cover',
                        }
                    },
                    sm: {
                        bg: {
                            attachment: 'scroll',
                            blend: 'screen',
                            clip: 'padding-box',
                            color: 'blue',
                            image: 'url(image2.png)',
                            origin: 'padding',
                            position: 'center center',
                            repeat: 'repeat-x',
                            size: 'contain',
                        }
                    },
                    md: {
                        bg: {
                            attachment: 'fixed',
                            blend: 'multiply',
                            clip: 'border-box',
                            color: 'red',
                            image: 'url(image.png)',
                            origin: 'border',
                            position: 'left top',
                            repeat: 'no-repeat',
                            size: 'cover',
                        }
                    },
                    lg: {
                        bg: {
                            attachment: 'scroll',
                            blend: 'screen',
                            clip: 'padding-box',
                            color: 'blue',
                            image: 'url(image2.png)',
                            origin: 'padding',
                            position: 'center center',
                            repeat: 'repeat-x',
                            size: 'contain',
                        }
                    },
                    xl: {
                        bg: {
                            attachment: 'fixed',
                            blend: 'multiply',
                            clip: 'border-box',
                            color: 'red',
                            image: 'url(image.png)',
                            origin: 'border',
                            position: 'left top',
                            repeat: 'no-repeat',
                            size: 'cover',
                        }
                    },
                },
                _up: {
                    xs: {
                        bg: {
                            attachment: 'fixed',
                            blend: 'multiply',
                            clip: 'border-box',
                            color: 'red',
                            image: 'url(image.png)',
                            origin: 'border',
                            position: 'left top',
                            repeat: 'no-repeat',
                            size: 'cover',
                        }
                    },
                    sm: {
                        bg: {
                            attachment: 'scroll',
                            blend: 'screen',
                            clip: 'padding-box',
                            color: 'blue',
                            image: 'url(image2.png)',
                            origin: 'padding',
                            position: 'center center',
                            repeat: 'repeat-x',
                            size: 'contain',
                        }
                    },
                    md: {
                        bg: {
                            attachment: 'fixed',
                            blend: 'multiply',
                            clip: 'border-box',
                            color: 'red',
                            image: 'url(image.png)',
                            origin: 'border',
                            position: 'left top',
                            repeat: 'no-repeat',
                            size: 'cover',
                        }
                    },
                    lg: {
                        bg: {
                            attachment: 'scroll',
                            blend: 'screen',
                            clip: 'padding-box',
                            color: 'blue',
                            image: 'url(image2.png)',
                            origin: 'padding',
                            position: 'center center',
                            repeat: 'repeat-x',
                            size: 'contain',
                        }
                    },
                    xl: {
                        bg: {
                            attachment: 'fixed',
                            blend: 'multiply',
                            clip: 'border-box',
                            color: 'red',
                            image: 'url(image.png)',
                            origin: 'border',
                            position: 'left top',
                            repeat: 'no-repeat',
                            size: 'cover',
                        }
                    },
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[2].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[3].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[4].trim()).toBe('background-color: red;');
        expect(cssAsArray[5].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[6].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[7].trim()).toBe('background-position: left top;');
        expect(cssAsArray[8].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[9].trim()).toBe('background-size: cover;');
        expect(cssAsArray[10].trim()).toBe('}');
        expect(cssAsArray[11].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[12].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[13].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[14].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[15].trim()).toBe('background-color: blue;');
        expect(cssAsArray[16].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[17].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[18].trim()).toBe('background-position: center center;');
        expect(cssAsArray[19].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[20].trim()).toBe('background-size: contain;');
        expect(cssAsArray[21].trim()).toBe('}');
        expect(cssAsArray[22].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[23].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[24].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[25].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[26].trim()).toBe('background-color: red;');
        expect(cssAsArray[27].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[28].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[29].trim()).toBe('background-position: left top;');
        expect(cssAsArray[30].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[31].trim()).toBe('background-size: cover;');
        expect(cssAsArray[32].trim()).toBe('}');
        expect(cssAsArray[33].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[34].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[35].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[36].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[37].trim()).toBe('background-color: blue;');
        expect(cssAsArray[38].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[39].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[40].trim()).toBe('background-position: center center;');
        expect(cssAsArray[41].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[42].trim()).toBe('background-size: contain;');
        expect(cssAsArray[43].trim()).toBe('}');
        expect(cssAsArray[44].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[45].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[46].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[47].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[48].trim()).toBe('background-color: red;');
        expect(cssAsArray[49].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[50].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[51].trim()).toBe('background-position: left top;');
        expect(cssAsArray[52].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[53].trim()).toBe('background-size: cover;');
        expect(cssAsArray[54].trim()).toBe('}');
        expect(cssAsArray[55].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[56].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[57].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[58].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[59].trim()).toBe('background-color: red;');
        expect(cssAsArray[60].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[61].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[62].trim()).toBe('background-position: left top;');
        expect(cssAsArray[63].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[64].trim()).toBe('background-size: cover;');
        expect(cssAsArray[65].trim()).toBe('}');
        expect(cssAsArray[66].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[67].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[68].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[69].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[70].trim()).toBe('background-color: blue;');
        expect(cssAsArray[71].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[72].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[73].trim()).toBe('background-position: center center;');
        expect(cssAsArray[74].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[75].trim()).toBe('background-size: contain;');
        expect(cssAsArray[76].trim()).toBe('}');
        expect(cssAsArray[77].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[78].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[79].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[80].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[81].trim()).toBe('background-color: red;');
        expect(cssAsArray[82].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[83].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[84].trim()).toBe('background-position: left top;');
        expect(cssAsArray[85].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[86].trim()).toBe('background-size: cover;');
        expect(cssAsArray[87].trim()).toBe('}');
        expect(cssAsArray[88].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[89].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[90].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[91].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[92].trim()).toBe('background-color: blue;');
        expect(cssAsArray[93].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[94].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[95].trim()).toBe('background-position: center center;');
        expect(cssAsArray[96].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[97].trim()).toBe('background-size: contain;');
        expect(cssAsArray[98].trim()).toBe('}');
        expect(cssAsArray[99].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[100].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[101].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[102].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[103].trim()).toBe('background-color: red;');
        expect(cssAsArray[104].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[105].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[106].trim()).toBe('background-position: left top;');
        expect(cssAsArray[107].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[108].trim()).toBe('background-size: cover;');
        expect(cssAsArray[109].trim()).toBe('}');

        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bg: { url: 'image.png' } },
                    sm: { bg: { url: 'image2.png' } },
                    md: { bg: { url: 'image.png' } },
                    lg: { bg: { url: 'image2.png' } },
                    xl: { bg: { url: 'image.png' } }
                },
                _up: {
                    xs: { bg: { url: 'image.png' } },
                    sm: { bg: { url: 'image2.png' } },
                    md: { bg: { url: 'image.png' } },
                    lg: { bg: { url: 'image2.png' } },
                    xl: { bg: { url: 'image.png' } }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgAttachment
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgAttachment: 'fixed' },
                    sm: { bgAttachment: 'scroll' },
                    md: { bgAttachment: 'fixed' },
                    lg: { bgAttachment: 'scroll' },
                    xl: { bgAttachment: 'fixed' }
                },
                _up: {
                    xs: { bgAttachment: 'fixed' },
                    sm: { bgAttachment: 'scroll' },
                    md: { bgAttachment: 'fixed' },
                    lg: { bgAttachment: 'scroll' },
                    xl: { bgAttachment: 'fixed' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-attachment: scroll;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-attachment: fixed;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgBlend
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgBlend: 'multiply' },
                    sm: { bgBlend: 'screen' },
                    md: { bgBlend: 'multiply' },
                    lg: { bgBlend: 'screen' },
                    xl: { bgBlend: 'multiply' }
                },
                _up: {
                    xs: { bgBlend: 'multiply' },
                    sm: { bgBlend: 'screen' },
                    md: { bgBlend: 'multiply' },
                    lg: { bgBlend: 'screen' },
                    xl: { bgBlend: 'multiply' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-blend-mode: screen;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-blend-mode: multiply;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgClip
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgClip: 'border-box' },
                    sm: { bgClip: 'padding-box' },
                    md: { bgClip: 'border-box' },
                    lg: { bgClip: 'padding-box' },
                    xl: { bgClip: 'border-box' }
                },
                _up: {
                    xs: { bgClip: 'border-box' },
                    sm: { bgClip: 'padding-box' },
                    md: { bgClip: 'border-box' },
                    lg: { bgClip: 'padding-box' },
                    xl: { bgClip: 'border-box' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-clip: padding-box;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-clip: border-box;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgColor
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgColor: 'red' },
                    sm: { bgColor: 'blue' },
                    md: { bgColor: 'red' },
                    lg: { bgColor: 'blue' },
                    xl: { bgColor: 'red' }
                },
                _up: {
                    xs: { bgColor: 'red' },
                    sm: { bgColor: 'blue' },
                    md: { bgColor: 'red' },
                    lg: { bgColor: 'blue' },
                    xl: { bgColor: 'red' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-color: red;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-color: blue;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-color: red;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-color: blue;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-color: red;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-color: red;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-color: blue;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-color: red;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-color: blue;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-color: red;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgImage
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgImage: 'url(image.png)' },
                    sm: { bgImage: 'url(image2.png)' },
                    md: { bgImage: 'url(image.png)' },
                    lg: { bgImage: 'url(image2.png)' },
                    xl: { bgImage: 'url(image.png)' }
                },
                _up: {
                    xs: { bgImage: 'url(image.png)' },
                    sm: { bgImage: 'url(image2.png)' },
                    md: { bgImage: 'url(image.png)' },
                    lg: { bgImage: 'url(image2.png)' },
                    xl: { bgImage: 'url(image.png)' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgOrigin
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgOrigin: 'border' },
                    sm: { bgOrigin: 'padding' },
                    md: { bgOrigin: 'border' },
                    lg: { bgOrigin: 'padding' },
                    xl: { bgOrigin: 'border' }
                },
                _up: {
                    xs: { bgOrigin: 'border' },
                    sm: { bgOrigin: 'padding' },
                    md: { bgOrigin: 'border' },
                    lg: { bgOrigin: 'padding' },
                    xl: { bgOrigin: 'border' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-origin: padding-box;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-origin: border-box;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgPosition
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgPosition: 'left top' },
                    sm: { bgPosition: 'center center' },
                    md: { bgPosition: 'left top' },
                    lg: { bgPosition: 'center center' },
                    xl: { bgPosition: 'left top' }
                },
                _up: {
                    xs: { bgPosition: 'left top' },
                    sm: { bgPosition: 'center center' },
                    md: { bgPosition: 'left top' },
                    lg: { bgPosition: 'center center' },
                    xl: { bgPosition: 'left top' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-position: left top;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-position: center center;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-position: left top;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-position: center center;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-position: left top;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-position: left top;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-position: center center;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-position: left top;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-position: center center;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-position: left top;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgRepeat
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgRepeat: 'repeat-x' },
                    sm: { bgRepeat: 'no-repeat' },
                    md: { bgRepeat: 'repeat-x' },
                    lg: { bgRepeat: 'no-repeat' },
                    xl: { bgRepeat: 'repeat-x' }
                },
                _up: {
                    xs: { bgRepeat: 'repeat-x' },
                    sm: { bgRepeat: 'no-repeat' },
                    md: { bgRepeat: 'repeat-x' },
                    lg: { bgRepeat: 'no-repeat' },
                    xl: { bgRepeat: 'repeat-x' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-repeat: no-repeat;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-repeat: repeat-x;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgSize
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgSize: 'contain' },
                    sm: { bgSize: 'cover' },
                    md: { bgSize: 'contain' },
                    lg: { bgSize: 'cover' },
                    xl: { bgSize: 'contain' }
                },
                _up: {
                    xs: { bgSize: 'contain' },
                    sm: { bgSize: 'cover' },
                    md: { bgSize: 'contain' },
                    lg: { bgSize: 'cover' },
                    xl: { bgSize: 'contain' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-size: contain;');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-size: cover;');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-size: contain;');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-size: cover;');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-size: contain;');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-size: contain;');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-size: cover;');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-size: contain;');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-size: cover;');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-size: contain;');
        expect(cssAsArray[29].trim()).toBe('}');

        // bgUrl
        style = ComponentStyle({
            ...mockedStyleProps,
            props: {
                _down: {
                    xs: { bgUrl: 'image.png' },
                    sm: { bgUrl: 'image2.png' },
                    md: { bgUrl: 'image.png' },
                    lg: { bgUrl: 'image2.png' },
                    xl: { bgUrl: 'image.png' }
                },
                _up: {
                    xs: { bgUrl: 'image.png' },
                    sm: { bgUrl: 'image2.png' },
                    md: { bgUrl: 'image.png' },
                    lg: { bgUrl: 'image2.png' },
                    xl: { bgUrl: 'image.png' }
                }
            }
        });
        cssAsArray = style.css.split('\n');

        expect(cssAsArray[0].trim()).toBe('@media screen and (max-width: 576px) {');
        expect(cssAsArray[1].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[2].trim()).toBe('}');
        expect(cssAsArray[3].trim()).toBe('@media screen and (max-width: 640px) {');
        expect(cssAsArray[4].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[5].trim()).toBe('}');
        expect(cssAsArray[6].trim()).toBe('@media screen and (max-width: 768px) {');
        expect(cssAsArray[7].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[8].trim()).toBe('}');
        expect(cssAsArray[9].trim()).toBe('@media screen and (max-width: 1024px) {');
        expect(cssAsArray[10].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[11].trim()).toBe('}');
        expect(cssAsArray[12].trim()).toBe('@media screen and (max-width: 1280px) {');
        expect(cssAsArray[13].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[14].trim()).toBe('}');
        expect(cssAsArray[15].trim()).toBe('@media screen and (min-width: 576px) {');
        expect(cssAsArray[16].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[17].trim()).toBe('}');
        expect(cssAsArray[18].trim()).toBe('@media screen and (min-width: 640px) {');
        expect(cssAsArray[19].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[20].trim()).toBe('}');
        expect(cssAsArray[21].trim()).toBe('@media screen and (min-width: 768px) {');
        expect(cssAsArray[22].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[23].trim()).toBe('}');
        expect(cssAsArray[24].trim()).toBe('@media screen and (min-width: 1024px) {');
        expect(cssAsArray[25].trim()).toBe('background-image: url(image2.png);');
        expect(cssAsArray[26].trim()).toBe('}');
        expect(cssAsArray[27].trim()).toBe('@media screen and (min-width: 1280px) {');
        expect(cssAsArray[28].trim()).toBe('background-image: url(image.png);');
        expect(cssAsArray[29].trim()).toBe('}');
    });
});