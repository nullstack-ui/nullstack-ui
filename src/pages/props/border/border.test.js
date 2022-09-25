const Color = require('color');
const getTestProperty = require('../../../utils/getTestProperty');

describe('border props', () => {
    test('Should apply border props', async () => {
        await page.goto('http://localhost:3000/props/border', { waitUntil: 'networkidle0' });

        // no border
        const noBorder1 = await getTestProperty({ id: 'noBorder', index: 0, propName: 'border' });
        const noBorder2 = await getTestProperty({ id: 'noBorder', index: 1, propName: 'border' });

        expect(noBorder1.split(' ')).toContain('none');
        expect(noBorder2.split(' ')).toContain('none');

        // border (default)
        const defaultBorder1 = await getTestProperty({ id: 'defaultBorder', index: 0, propName: 'border' });
        const defaultBorder2 = await getTestProperty({ id: 'defaultBorder', index: 1, propName: 'border' });

        expect(defaultBorder1).toBe('1px solid rgb(0, 0, 0)');
        expect(defaultBorder2).toBe('1px solid rgb(0, 0, 0)');

        // border color
        const borderColor1 = await getTestProperty({ id: 'borderColor', index: 0, propName: 'borderColor' });
        const borderColor2 = await getTestProperty({ id: 'borderColor', index: 1, propName: 'borderColor' });
        const borderColor3 = await getTestProperty({ id: 'borderColor', index: 2, propName: 'borderColor' });
        const borderColor4 = await getTestProperty({ id: 'borderColor', index: 3, propName: 'borderColor' });

        expect(borderColor1).toBe('rgb(255, 0, 0)');
        expect(borderColor2).toBe('rgb(255, 0, 0)');
        expect(borderColor3).toBe('rgb(255, 0, 0)');
        expect(borderColor4).toBe('rgb(255, 0, 0)');

        // border radius (no unit)
        const borderRadiusNoUnit1 = await getTestProperty({ id: 'borderRadiusNoUnit', index: 0, propName: 'borderRadius' });
        const borderRadiusNoUnit2 = await getTestProperty({ id: 'borderRadiusNoUnit', index: 1, propName: 'borderRadius' });
        const borderRadiusNoUnit3 = await getTestProperty({ id: 'borderRadiusNoUnit', index: 2, propName: 'borderRadius' });
        const borderRadiusNoUnit4 = await getTestProperty({ id: 'borderRadiusNoUnit', index: 3, propName: 'borderRadius' });
        const borderRadiusNoUnit5 = await getTestProperty({ id: 'borderRadiusNoUnit', index: 4, propName: 'borderRadius' });
        const borderRadiusNoUnit6 = await getTestProperty({ id: 'borderRadiusNoUnit', index: 5, propName: 'borderRadius' });

        expect(borderRadiusNoUnit1).toBe('16px');
        expect(borderRadiusNoUnit2).toBe('16px');
        expect(borderRadiusNoUnit3).toBe('16px');
        expect(borderRadiusNoUnit4).toBe('16px');
        expect(borderRadiusNoUnit5).toBe('16px');
        expect(borderRadiusNoUnit6).toBe('16px');

        // border radius
        const borderRadius1 = await getTestProperty({ id: 'borderRadius', index: 0, propName: 'borderRadius' });
        const borderRadius2 = await getTestProperty({ id: 'borderRadius', index: 1, propName: 'borderRadius' });
        const borderRadius3 = await getTestProperty({ id: 'borderRadius', index: 2, propName: 'borderRadius' });
        const borderRadius4 = await getTestProperty({ id: 'borderRadius', index: 3, propName: 'borderRadius' });
        const borderRadius5 = await getTestProperty({ id: 'borderRadius', index: 4, propName: 'borderRadius' });
        const borderRadius6 = await getTestProperty({ id: 'borderRadius', index: 5, propName: 'borderRadius' });

        expect(borderRadius1).toBe('30px');
        expect(borderRadius2).toBe('30px');
        expect(borderRadius3).toBe('30px');
        expect(borderRadius4).toBe('30px');
        expect(borderRadius5).toBe('30px');
        expect(borderRadius6).toBe('30px');

        // border radius (alias)
        const borderRadiusAlias1 = await getTestProperty({ id: 'borderRadiusAlias', index: 0, propName: 'borderRadius' });
        const borderRadiusAlias2 = await getTestProperty({ id: 'borderRadiusAlias', index: 1, propName: 'borderRadius' });
        const borderRadiusAlias3 = await getTestProperty({ id: 'borderRadiusAlias', index: 2, propName: 'borderRadius' });
        const borderRadiusAlias4 = await getTestProperty({ id: 'borderRadiusAlias', index: 3, propName: 'borderRadius' });
        const borderRadiusAlias5 = await getTestProperty({ id: 'borderRadiusAlias', index: 4, propName: 'borderRadius' });
        const borderRadiusAlias6 = await getTestProperty({ id: 'borderRadiusAlias', index: 5, propName: 'borderRadius' });

        expect(borderRadiusAlias1).toBe('16px');
        expect(borderRadiusAlias2).toBe('9999px');
        expect(borderRadiusAlias3).toBe('8px');
        expect(borderRadiusAlias4).toBe('6px');
        expect(borderRadiusAlias5).toBe('2px');
        expect(borderRadiusAlias6).toBe('12px');
    })
});