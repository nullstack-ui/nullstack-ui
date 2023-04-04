import { addToCache, cache } from '../';
import { handleProps } from '../props';

const mockedProps = {
    addToCache,
    cache,
    context: {},
    depth: 'DEPTH_HERE',
    theme: {}
}

describe('bg props', () => {
    it('should return correct css props', () => {
        // BG string
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

        // BG object
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
    });

    it('should return cached props', () => {
        // BG (string)
        let props = handleProps({
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
                    image: 'url(image.png)',
                    origin: 'content',
                    position: 'center center',
                    repeat: 'no-repeat',
                    size: 'cover',
                    url: 'image.png'
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

        // BG blend
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

        // BG clip
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

        // BG color
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

        // BG image
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

        // BG origin
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

        // BG position
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

        // BG repeat
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

        // BG size
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

        // BG url
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

        // BG attachment
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

        // BG blend
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

        // BG clip
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

        // BG color
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

        // BG image
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

        // BG origin
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

        // BG position
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

        // BG repeat
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

        // BG size
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

        // BG url
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

    it('should keep all previous cache keys', () => {
        expect(cache.bg).toBeTruthy();
        expect(cache.bg.none.cssProps[0].key).toBe('background');
        expect(cache.bg.none.cssProps[0].value).toBe('none');

        expect(cache.bgAttachment).toBeTruthy();
        expect(cache.bgAttachment.fixed.cssProps[0].key).toBe('background-attachment');
        expect(cache.bgAttachment.fixed.cssProps[0].value).toBe('fixed');

        expect(cache.bgClip).toBeTruthy();
        expect(cache.bgClip['border-box'].cssProps[0].key).toBe('background-clip');
        expect(cache.bgClip['border-box'].cssProps[0].value).toBe('border-box');
        expect(cache.bgClip.text.cssProps[0].key).toBe('background-clip');
        expect(cache.bgClip.text.cssProps[0].value).toBe('text');

        expect(cache.bgColor).toBeTruthy();
        expect(cache.bgColor.blue.cssProps[0].key).toBe('background-color');
        expect(cache.bgColor.blue.cssProps[0].value).toBe('blue');
        expect(cache.bgColor.red.cssProps[0].key).toBe('background-color');
        expect(cache.bgColor.red.cssProps[0].value).toBe('red');

        expect(cache.bgImage).toBeTruthy();
        expect(cache.bgImage['url(image.png)'].cssProps[0].key).toBe('background-image');
        expect(cache.bgImage['url(image.png)'].cssProps[0].value).toBe('url(image.png)');
        expect(cache.bgImage['url(image2.png)'].cssProps[0].key).toBe('background-image');
        expect(cache.bgImage['url(image2.png)'].cssProps[0].value).toBe('url(image2.png)');

        expect(cache.bgOrigin).toBeTruthy();
        expect(cache.bgOrigin.border.cssProps[0].key).toBe('background-origin');
        expect(cache.bgOrigin.border.cssProps[0].value).toBe('border-box');
        expect(cache.bgOrigin.content.cssProps[0].key).toBe('background-origin');
        expect(cache.bgOrigin.content.cssProps[0].value).toBe('content-box');

        expect(cache.bgPosition).toBeTruthy();
        expect(cache.bgPosition['center center'].cssProps[0].key).toBe('background-position');
        expect(cache.bgPosition['center center'].cssProps[0].value).toBe('center center');
        expect(cache.bgPosition.left.cssProps[0].key).toBe('background-position');
        expect(cache.bgPosition.left.cssProps[0].value).toBe('left');

        expect(cache.bgRepeat).toBeTruthy();
        expect(cache.bgRepeat['no-repeat'].cssProps[0].key).toBe('background-repeat');
        expect(cache.bgRepeat['no-repeat'].cssProps[0].value).toBe('no-repeat');
        expect(cache.bgRepeat['repeat-x'].cssProps[0].key).toBe('background-repeat');
        expect(cache.bgRepeat['repeat-x'].cssProps[0].value).toBe('repeat-x');

        expect(cache.bgSize).toBeTruthy();
        expect(cache.bgSize.contain.cssProps[0].key).toBe('background-size');
        expect(cache.bgSize.contain.cssProps[0].value).toBe('contain');
        expect(cache.bgSize.cover.cssProps[0].key).toBe('background-size');
        expect(cache.bgSize.cover.cssProps[0].value).toBe('cover');

        expect(cache.bgUrl).toBeTruthy();
        expect(cache.bgUrl['image.png'].cssProps[0].key).toBe('background-image');
        expect(cache.bgUrl['image.png'].cssProps[0].value).toBe('url(image.png)');
        expect(cache.bgUrl['image2.png'].cssProps[0].key).toBe('background-image');
        expect(cache.bgUrl['image2.png'].cssProps[0].value).toBe('url(image2.png)');
    });
});