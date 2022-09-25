const Color = require('color');

const getProperty = async ({
    id,
    index,
    propName,
}) => {
    return await page.evaluate(`getComputedStyle(document.body.querySelectorAll("[data-testid=\'${id}\']")[${index}]).${propName}`)
}

describe('bg props', () => {
    test('Should apply bg props', async () => {
        await page.goto('http://localhost:3000/props/bg', { waitUntil: 'networkidle0' });

        // bg color
        const bgColor1 = await getProperty({ id: 'bgColor', index: 0, propName: 'backgroundColor' });
        const bgColor2 = await getProperty({ id: 'bgColor', index: 1, propName: 'backgroundColor' });
        const bgColor3 = await getProperty({ id: 'bgColor', index: 2, propName: 'backgroundColor' });
        const bgColor4 = await getProperty({ id: 'bgColor', index: 2, propName: 'backgroundColor' });

        expect(Color(bgColor1).hex()).toBe('#FF0000');
        expect(Color(bgColor2).hex()).toBe('#FF0000');
        expect(Color(bgColor3).hex()).toBe('#FF0000');
        expect(Color(bgColor4).hex()).toBe('#FF0000');

        // bg attachment
        const bgAttachment1 = await getProperty({ id: 'bgAttachment', index: 0, propName: 'backgroundAttachment' });
        const bgAttachment2 = await getProperty({ id: 'bgAttachment', index: 1, propName: 'backgroundAttachment' });
        const bgAttachment3 = await getProperty({ id: 'bgAttachment', index: 2, propName: 'backgroundAttachment' });
        const bgAttachment4 = await getProperty({ id: 'bgAttachment', index: 3, propName: 'backgroundAttachment' });

        expect(bgAttachment1).toBe('fixed');
        expect(bgAttachment2).toBe('fixed');
        expect(bgAttachment3).toBe('fixed');
        expect(bgAttachment4).toBe('fixed');

        // bg blend
        const bgBlend1 = await getProperty({ id: 'bgBlend', index: 0, propName: 'backgroundBlendMode' });
        const bgBlend2 = await getProperty({ id: 'bgBlend', index: 1, propName: 'backgroundBlendMode' });
        const bgBlend3 = await getProperty({ id: 'bgBlend', index: 2, propName: 'backgroundBlendMode' });
        const bgBlend4 = await getProperty({ id: 'bgBlend', index: 3, propName: 'backgroundBlendMode' });
        const bgBlend5 = await getProperty({ id: 'bgBlend', index: 4, propName: 'backgroundBlendMode' });
        const bgBlend6 = await getProperty({ id: 'bgBlend', index: 5, propName: 'backgroundBlendMode' });
        const bgBlend7 = await getProperty({ id: 'bgBlend', index: 6, propName: 'backgroundBlendMode' });
        const bgBlend8 = await getProperty({ id: 'bgBlend', index: 7, propName: 'backgroundBlendMode' });

        expect(bgBlend1).toBe('lighten');
        expect(bgBlend2).toBe('lighten');
        expect(bgBlend3).toBe('lighten');
        expect(bgBlend4).toBe('lighten');
        expect(bgBlend5).toBe('lighten');
        expect(bgBlend6).toBe('lighten');
        expect(bgBlend7).toBe('lighten');
        expect(bgBlend8).toBe('lighten');

        // bg clip
        const bgClip1 = await getProperty({ id: 'bgClip', index: 0, propName: 'backgroundClip' });
        const bgClip2 = await getProperty({ id: 'bgClip', index: 1, propName: 'backgroundClip' });
        const bgClip3 = await getProperty({ id: 'bgClip', index: 2, propName: 'backgroundClip' });
        const bgClip4 = await getProperty({ id: 'bgClip', index: 3, propName: 'backgroundClip' });

        expect(bgClip1).toBe('border-box');
        expect(bgClip2).toBe('border-box');
        expect(bgClip3).toBe('border-box');
        expect(bgClip4).toBe('border-box');

        // bg image
        const bgImage1 = await getProperty({ id: 'bgImage', index: 0, propName: 'backgroundImage' });
        const bgImage2 = await getProperty({ id: 'bgImage', index: 1, propName: 'backgroundImage' });
        const bgImage3 = await getProperty({ id: 'bgImage', index: 2, propName: 'backgroundImage' });
        const bgImage4 = await getProperty({ id: 'bgImage', index: 3, propName: 'backgroundImage' });

        expect(bgImage1).toBe('url("http://localhost:3000/image.png")');
        expect(bgImage2).toBe('url("http://localhost:3000/image.png")');
        expect(bgImage3).toBe('url("http://localhost:3000/image.png")');
        expect(bgImage4).toBe('url("http://localhost:3000/image.png")');

        // bg position
        const bgPosition1 = await getProperty({ id: 'bgPosition', index: 0, propName: 'backgroundPosition' });
        const bgPosition2 = await getProperty({ id: 'bgPosition', index: 1, propName: 'backgroundPosition' });
        const bgPosition3 = await getProperty({ id: 'bgPosition', index: 2, propName: 'backgroundPosition' });
        const bgPosition4 = await getProperty({ id: 'bgPosition', index: 3, propName: 'backgroundPosition' });
        const bgPosition5 = await getProperty({ id: 'bgPosition', index: 4, propName: 'backgroundPosition' });
        const bgPosition6 = await getProperty({ id: 'bgPosition', index: 5, propName: 'backgroundPosition' });
        const bgPosition7 = await getProperty({ id: 'bgPosition', index: 6, propName: 'backgroundPosition' });
        const bgPosition8 = await getProperty({ id: 'bgPosition', index: 7, propName: 'backgroundPosition' });

        expect(bgPosition1).toBe('50% 50%');
        expect(bgPosition2).toBe('50% 50%');
        expect(bgPosition3).toBe('50% 50%');
        expect(bgPosition4).toBe('50% 50%');
        expect(bgPosition5).toBe('50% 50%');
        expect(bgPosition6).toBe('50% 50%');
        expect(bgPosition7).toBe('50% 50%');
        expect(bgPosition8).toBe('50% 50%');

        // bg repeat
        const bgRepeat1 = await getProperty({ id: 'bgRepeat', index: 0, propName: 'backgroundRepeat' });
        const bgRepeat2 = await getProperty({ id: 'bgRepeat', index: 1, propName: 'backgroundRepeat' });
        const bgRepeat3 = await getProperty({ id: 'bgRepeat', index: 2, propName: 'backgroundRepeat' });
        const bgRepeat4 = await getProperty({ id: 'bgRepeat', index: 3, propName: 'backgroundRepeat' });

        expect(bgRepeat1).toBe('repeat-y');
        expect(bgRepeat2).toBe('repeat-y');
        expect(bgRepeat3).toBe('repeat-y');
        expect(bgRepeat4).toBe('repeat-y');

        // bg size
        const bgSize1 = await getProperty({ id: 'bgSize', index: 0, propName: 'backgroundSize' });
        const bgSize2 = await getProperty({ id: 'bgSize', index: 1, propName: 'backgroundSize' });
        const bgSize3 = await getProperty({ id: 'bgSize', index: 2, propName: 'backgroundSize' });
        const bgSize4 = await getProperty({ id: 'bgSize', index: 3, propName: 'backgroundSize' });

        expect(bgSize1).toBe('cover');
        expect(bgSize2).toBe('cover');
        expect(bgSize3).toBe('cover');
        expect(bgSize4).toBe('cover');
    });
});