const Color = require('color');
const getTestProperty = require('../../../utils/getTestProperty');
const getTestResults = require('../../../utils/getTestResults');

describe('border props', () => {
    test('Should apply border props', async () => {
        await page.goto('http://localhost:3000/props/border', { waitUntil: 'networkidle0' });

        // no border
        getTestResults({
            id: 'noBorder',
            propName: 'border',
            total: 2
        }, results => results.forEach(result => {
            expect(result.split(' ')).toContain('none');
        }));

        // border (default)
        getTestResults({
            id: 'defaultBorder',
            propName: [
                'borderColor',
                'borderStyle',
                'borderWidth'
            ],
            total: 2
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 0)');
            expect(result[1]).toBe('solid');
            expect(result[2]).toBe('1px');
        }));

        // border color
        getTestResults({
            id: 'borderColor',
            propName: 'borderColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toBe('rgb(255, 0, 0)');
        }));

        // border bottom
        getTestResults({
            id: 'borderBottom',
            propName: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth'],
            total: 4
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('dashed');
            expect(result[2]).toBe('5px');
        }));

        // border bottom (color)
        getTestResults({
            id: 'borderBottomColor',
            propName: ['borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor'],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('rgb(0, 0, 0)');
            expect(result[2]).toBe('rgb(0, 0, 0)');
            expect(result[3]).toBe('rgb(0, 0, 0)');
        }));

        // border bottom (radius)
        getTestResults({
            id: 'borderBottomRadius',
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
                'borderTopLeftRadius',
                'borderTopRightRadius',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('30px');
            expect(result[1]).toBe('30px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border bottom (style)
        getTestResults({
            id: 'borderBottomStyle',
            propName: [
                'borderBottomStyle',
                'borderLeftStyle',
                'borderRightStyle',
                'borderTopStyle',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('dashed');
            expect(result[1]).not.toBe('dashed');
            expect(result[2]).not.toBe('dashed');
            expect(result[3]).not.toBe('dashed');
        }));

        // border bottom (width)
        getTestResults({
            id: 'borderBottomWidth',
            propName: [
                'borderBottomWidth',
                'borderLeftWidth',
                'borderRightWidth',
                'borderTopWidth',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('10px');
            expect(result[1]).toBe('0px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border left
        getTestResults({
            id: 'borderLeft',
            propName: [
                'borderLeftColor', 

                'borderLeftStyle', 
                'borderLeftWidth'
            ],
            total: 4
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('dashed');
            expect(result[2]).toBe('5px');
        }));

        // border left (color)
        getTestResults({
            id: 'borderLeftColor',
            propName: ['borderLeftColor', 'borderBottomColor', 'borderRightColor', 'borderTopColor'],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('rgb(0, 0, 0)');
            expect(result[2]).toBe('rgb(0, 0, 0)');
            expect(result[3]).toBe('rgb(0, 0, 0)');
        }));

        // border left (radius)
        getTestResults({
            id: 'borderLeftRadius',
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                'borderBottomRightRadius',
                'borderTopRightRadius',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('30px');
            expect(result[1]).toBe('30px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border left (style)
        getTestResults({
            id: 'borderLeftStyle',
            propName: [
                'borderLeftStyle',

                'borderBottomStyle',
                'borderRightStyle',
                'borderTopStyle',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('dashed');
            expect(result[1]).not.toBe('dashed');
            expect(result[2]).not.toBe('dashed');
            expect(result[3]).not.toBe('dashed');
        }));

        // border left (width)
        getTestResults({
            id: 'borderLeftWidth',
            propName: [
                'borderLeftWidth',

                'borderBottomWidth',
                'borderRightWidth',
                'borderTopWidth',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('10px');
            expect(result[1]).toBe('0px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

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

        // border radius (bottom)
        const borderRadiusBottom1 = await getTestProperty({
            id: 'borderRadiusBottom',
            index: 0,
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',

                // Must be 0
                'borderTopLeftRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusBottom2 = await getTestProperty({
            id: 'borderRadiusBottom',
            index: 1,
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',

                // Must be 0
                'borderTopLeftRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusBottom3 = await getTestProperty({
            id: 'borderRadiusBottom',
            index: 2,
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',

                // Must be 0
                'borderTopLeftRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusBottom4 = await getTestProperty({
            id: 'borderRadiusBottom',
            index: 3,
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',

                // Must be 0
                'borderTopLeftRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusBottom5 = await getTestProperty({
            id: 'borderRadiusBottom',
            index: 4,
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',

                // Must be 0
                'borderTopLeftRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusBottom6 = await getTestProperty({
            id: 'borderRadiusBottom',
            index: 5,
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',

                // Must be 0
                'borderTopLeftRadius',
                'borderTopRightRadius',
            ]
        });

        expect(borderRadiusBottom1[0]).toBe('30px');
        expect(borderRadiusBottom1[1]).toBe('30px');
        expect(borderRadiusBottom1[2]).toBe('0px');
        expect(borderRadiusBottom1[3]).toBe('0px');

        expect(borderRadiusBottom2[0]).toBe('30px');
        expect(borderRadiusBottom2[1]).toBe('30px');
        expect(borderRadiusBottom2[2]).toBe('0px');
        expect(borderRadiusBottom3[3]).toBe('0px');

        expect(borderRadiusBottom3[0]).toBe('30px');
        expect(borderRadiusBottom3[1]).toBe('30px');
        expect(borderRadiusBottom3[2]).toBe('0px');
        expect(borderRadiusBottom3[3]).toBe('0px');

        expect(borderRadiusBottom4[0]).toBe('30px');
        expect(borderRadiusBottom4[1]).toBe('30px');
        expect(borderRadiusBottom4[2]).toBe('0px');
        expect(borderRadiusBottom4[3]).toBe('0px');

        expect(borderRadiusBottom5[0]).toBe('30px');
        expect(borderRadiusBottom5[1]).toBe('30px');
        expect(borderRadiusBottom5[2]).toBe('0px');
        expect(borderRadiusBottom5[3]).toBe('0px');

        expect(borderRadiusBottom6[0]).toBe('30px');
        expect(borderRadiusBottom6[1]).toBe('30px');
        expect(borderRadiusBottom6[2]).toBe('0px');
        expect(borderRadiusBottom6[3]).toBe('0px');

        // border radius (left)
        const borderRadiusLeft1 = await getTestProperty({
            id: 'borderRadiusLeft',
            index: 0,
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                // Must be 0
                'borderBottomRightRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusLeft2 = await getTestProperty({
            id: 'borderRadiusLeft',
            index: 1,
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                // Must be 0
                'borderBottomRightRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusLeft3 = await getTestProperty({
            id: 'borderRadiusLeft',
            index: 2,
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                // Must be 0
                'borderBottomRightRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusLeft4 = await getTestProperty({
            id: 'borderRadiusLeft',
            index: 3,
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                // Must be 0
                'borderBottomRightRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusLeft5 = await getTestProperty({
            id: 'borderRadiusLeft',
            index: 4,
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                // Must be 0
                'borderBottomRightRadius',
                'borderTopRightRadius',
            ]
        });
        const borderRadiusLeft6 = await getTestProperty({
            id: 'borderRadiusLeft',
            index: 5,
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                // Must be 0
                'borderBottomRightRadius',
                'borderTopRightRadius',
            ]
        });

        expect(borderRadiusLeft1[0]).toBe('30px');
        expect(borderRadiusLeft1[1]).toBe('30px');
        expect(borderRadiusLeft1[2]).toBe('0px');
        expect(borderRadiusLeft1[3]).toBe('0px');

        expect(borderRadiusLeft2[0]).toBe('30px');
        expect(borderRadiusLeft2[1]).toBe('30px');
        expect(borderRadiusLeft2[2]).toBe('0px');
        expect(borderRadiusLeft2[3]).toBe('0px');

        expect(borderRadiusLeft3[0]).toBe('30px');
        expect(borderRadiusLeft3[1]).toBe('30px');
        expect(borderRadiusLeft3[2]).toBe('0px');
        expect(borderRadiusLeft3[3]).toBe('0px');

        expect(borderRadiusLeft4[0]).toBe('30px');
        expect(borderRadiusLeft4[1]).toBe('30px');
        expect(borderRadiusLeft4[2]).toBe('0px');
        expect(borderRadiusLeft4[3]).toBe('0px');

        expect(borderRadiusLeft5[0]).toBe('30px');
        expect(borderRadiusLeft5[1]).toBe('30px');
        expect(borderRadiusLeft5[2]).toBe('0px');
        expect(borderRadiusLeft5[3]).toBe('0px');

        expect(borderRadiusLeft6[0]).toBe('30px');
        expect(borderRadiusLeft6[1]).toBe('30px');
        expect(borderRadiusLeft6[2]).toBe('0px');
        expect(borderRadiusLeft6[3]).toBe('0px');

        // border radius (right)
        const borderRadiusRight1 = await getTestProperty({
            id: 'borderRadiusRight',
            index: 0,
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ]
        });
        const borderRadiusRight2 = await getTestProperty({
            id: 'borderRadiusRight',
            index: 1,
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ]
        });
        const borderRadiusRight3 = await getTestProperty({
            id: 'borderRadiusRight',
            index: 2,
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ]
        });
        const borderRadiusRight4 = await getTestProperty({
            id: 'borderRadiusRight',
            index: 3,
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ]
        });
        const borderRadiusRight5 = await getTestProperty({
            id: 'borderRadiusRight',
            index: 4,
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ]
        });
        const borderRadiusRight6 = await getTestProperty({
            id: 'borderRadiusRight',
            index: 5,
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ]
        });

        expect(borderRadiusRight1[0]).toBe('30px');
        expect(borderRadiusRight1[1]).toBe('30px');
        expect(borderRadiusRight1[2]).toBe('0px');
        expect(borderRadiusRight1[3]).toBe('0px');

        expect(borderRadiusRight2[0]).toBe('30px');
        expect(borderRadiusRight2[1]).toBe('30px');
        expect(borderRadiusRight2[2]).toBe('0px');
        expect(borderRadiusRight2[3]).toBe('0px');

        expect(borderRadiusRight3[0]).toBe('30px');
        expect(borderRadiusRight3[1]).toBe('30px');
        expect(borderRadiusRight3[2]).toBe('0px');
        expect(borderRadiusRight3[3]).toBe('0px');

        expect(borderRadiusRight4[0]).toBe('30px');
        expect(borderRadiusRight4[1]).toBe('30px');
        expect(borderRadiusRight4[2]).toBe('0px');
        expect(borderRadiusRight4[3]).toBe('0px');

        expect(borderRadiusRight5[0]).toBe('30px');
        expect(borderRadiusRight5[1]).toBe('30px');
        expect(borderRadiusRight5[2]).toBe('0px');
        expect(borderRadiusRight5[3]).toBe('0px');

        expect(borderRadiusRight6[0]).toBe('30px');
        expect(borderRadiusRight6[1]).toBe('30px');
        expect(borderRadiusRight6[2]).toBe('0px');
        expect(borderRadiusRight6[3]).toBe('0px');

        // border radius (top)
        const borderRadiusTop1 = await getTestProperty({
            id: 'borderRadiusTop',
            index: 0,
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ]
        });
        const borderRadiusTop2 = await getTestProperty({
            id: 'borderRadiusTop',
            index: 1,
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ]
        });
        const borderRadiusTop3 = await getTestProperty({
            id: 'borderRadiusTop',
            index: 2,
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ]
        });
        const borderRadiusTop4 = await getTestProperty({
            id: 'borderRadiusTop',
            index: 3,
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ]
        });
        const borderRadiusTop5 = await getTestProperty({
            id: 'borderRadiusTop',
            index: 4,
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ]
        });
        const borderRadiusTop6 = await getTestProperty({
            id: 'borderRadiusTop',
            index: 5,
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ]
        });

        expect(borderRadiusTop1[0]).toBe('30px');
        expect(borderRadiusTop1[1]).toBe('30px');
        expect(borderRadiusTop1[2]).toBe('0px');
        expect(borderRadiusTop1[3]).toBe('0px');

        expect(borderRadiusTop2[0]).toBe('30px');
        expect(borderRadiusTop2[1]).toBe('30px');
        expect(borderRadiusTop2[2]).toBe('0px');
        expect(borderRadiusTop2[3]).toBe('0px');

        expect(borderRadiusTop3[0]).toBe('30px');
        expect(borderRadiusTop3[1]).toBe('30px');
        expect(borderRadiusTop3[2]).toBe('0px');
        expect(borderRadiusTop3[3]).toBe('0px');

        expect(borderRadiusTop4[0]).toBe('30px');
        expect(borderRadiusTop4[1]).toBe('30px');
        expect(borderRadiusTop4[2]).toBe('0px');
        expect(borderRadiusTop4[3]).toBe('0px');

        expect(borderRadiusTop5[0]).toBe('30px');
        expect(borderRadiusTop5[1]).toBe('30px');
        expect(borderRadiusTop5[2]).toBe('0px');
        expect(borderRadiusTop5[3]).toBe('0px');

        expect(borderRadiusTop6[0]).toBe('30px');
        expect(borderRadiusTop6[1]).toBe('30px');
        expect(borderRadiusTop6[2]).toBe('0px');
        expect(borderRadiusTop6[3]).toBe('0px');
    })
});