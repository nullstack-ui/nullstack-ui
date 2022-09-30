const Color = require('color');
const getTestProperty = require('../../../utils/getTestProperty');
const getTestResults = require('../../../utils/getTestResults');

describe('border props', () => {
    test('Should apply border props', async () => {
        await page.goto('http://localhost:3000/props/border', { waitUntil: 'networkidle0' });

        // no border
        await getTestResults({
            id: 'noBorder',
            propName: 'border',
            total: 2
        }, results => results.forEach(result => {
            expect(result.split(' ')).toContain('none');
        }));

        // border (default)
        await getTestResults({
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
        await getTestResults({
            id: 'borderColor',
            propName: 'borderColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toBe('rgb(255, 0, 0)');
        }));

        // border style
        await getTestResults({
            id: 'borderStyle',
            propName: 'borderStyle',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toBe('dashed');
        }));

        // border width
        await getTestResults({
            id: 'borderWidth',
            propName: 'borderWidth',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toBe('10px');
        }));

        // border bottom
        await getTestResults({
            id: 'borderBottom',
            propName: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth'],
            total: 4
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('dashed');
            expect(result[2]).toBe('5px');
        }));

        // border bottom (color)
        await getTestResults({
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
        await getTestResults({
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
        await getTestResults({
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
        await getTestResults({
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
        await getTestResults({
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
        await getTestResults({
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
        await getTestResults({
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
        await getTestResults({
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
        await getTestResults({
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

        // border right
        await getTestResults({
            id: 'borderRight',
            propName: [
                'borderRightColor',

                'borderRightStyle',
                'borderRightWidth'
            ],
            total: 4
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('dashed');
            expect(result[2]).toBe('5px');
        }));

        // border right (color)
        await getTestResults({
            id: 'borderRightColor',
            propName: ['borderRightColor', 'borderBottomColor', 'borderLeftColor', 'borderTopColor'],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('rgb(0, 0, 0)');
            expect(result[2]).toBe('rgb(0, 0, 0)');
            expect(result[3]).toBe('rgb(0, 0, 0)');
        }));

        // border right (radius)
        await getTestResults({
            id: 'borderRightRadius',
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('30px');
            expect(result[1]).toBe('30px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border right (style)
        await getTestResults({
            id: 'borderRightStyle',
            propName: [
                'borderRightStyle',

                'borderBottomStyle',
                'borderLeftStyle',
                'borderTopStyle',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('dashed');
            expect(result[1]).not.toBe('dashed');
            expect(result[2]).not.toBe('dashed');
            expect(result[3]).not.toBe('dashed');
        }));

        // border right (width)
        await getTestResults({
            id: 'borderRightWidth',
            propName: [
                'borderRightWidth',

                'borderBottomWidth',
                'borderLeftWidth',
                'borderTopWidth',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('10px');
            expect(result[1]).toBe('0px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border top
        await getTestResults({
            id: 'borderTop',
            propName: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
            total: 4
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('dashed');
            expect(result[2]).toBe('5px');
        }));

        // border top (color)
        await getTestResults({
            id: 'borderTopColor',
            propName: ['borderTopColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor'],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(0, 0, 255)');
            expect(result[1]).toBe('rgb(0, 0, 0)');
            expect(result[2]).toBe('rgb(0, 0, 0)');
            expect(result[3]).toBe('rgb(0, 0, 0)');
        }));

        // border top (radius)
        await getTestResults({
            id: 'borderTopRadius',
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('30px');
            expect(result[1]).toBe('30px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border top (style)
        await getTestResults({
            id: 'borderTopStyle',
            propName: [
                'borderTopStyle',
                'borderBottomStyle',
                'borderLeftStyle',
                'borderRightStyle',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('dashed');
            expect(result[1]).not.toBe('dashed');
            expect(result[2]).not.toBe('dashed');
            expect(result[3]).not.toBe('dashed');
        }));

        // border top (width)
        await getTestResults({
            id: 'borderTopWidth',
            propName: [
                'borderTopWidth',
                'borderBottomWidth',
                'borderLeftWidth',
                'borderRightWidth',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('10px');
            expect(result[1]).toBe('0px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border radius (no unit)
        await getTestResults({
            id: 'borderRadiusNoUnit',
            propName: 'borderRadius',
            total: 6
        }, results => results.forEach(result => {
            expect(result).toBe('16px');
        }));

        // border radius
        await getTestResults({
            id: 'borderRadius',
            propName: 'borderRadius',
            total: 6
        }, results => results.forEach(result => {
            expect(result).toBe('30px');
        }));

        // border radius (alias)
        await getTestResults({
            id: 'borderRadiusAlias',
            propName: 'borderRadius',
            total: 6
        }, results => results.forEach((result, index) => {
            const values = ['16px', '9999px', '8px', '6px', '2px', '12px'];

            expect(result).toBe(values[index]);
        }));

        // border radius (bottom)
        await getTestResults({
            id: 'borderRadiusBottom',
            propName: [
                'borderBottomLeftRadius',
                'borderBottomRightRadius',

                // Must be 0
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

        // border radius (left)
        await getTestResults({
            id: 'borderRadiusLeft',
            propName: [
                'borderBottomLeftRadius',
                'borderTopLeftRadius',

                // Must be 0
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

        // border radius (right)
        await getTestResults({
            id: 'borderRadiusRight',
            propName: [
                'borderBottomRightRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderTopLeftRadius',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('30px');
            expect(result[1]).toBe('30px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border radius (top)
        await getTestResults({
            id: 'borderRadiusTop',
            propName: [
                'borderTopLeftRadius',
                'borderTopRightRadius',

                // Must be 0
                'borderBottomLeftRadius',
                'borderBottomRightRadius',
            ],
            total: 6
        }, results => results.forEach(result => {
            expect(result[0]).toBe('30px');
            expect(result[1]).toBe('30px');
            expect(result[2]).toBe('0px');
            expect(result[3]).toBe('0px');
        }));

        // border x
        await getTestResults({
            id: 'borderX',
            propName: [
                // color
                'borderLeftColor',
                'borderRightColor',
                // style
                'borderLeftStyle',
                'borderRightStyle',
                // width
                'borderLeftWidth',
                'borderRightWidth',

                // not apply on
                // color
                'borderBottomColor',
                'borderTopColor',
                // style
                'borderBottomStyle',
                'borderTopStyle',
                // width
                'borderBottomWidth',
                'borderTopWidth'
            ],
            total: 2
        }, results => results.forEach(result => {
            expect(result[0]).toBe('rgb(255, 0, 0)');
            expect(result[1]).toBe('rgb(255, 0, 0)');
            expect(result[2]).toBe('dashed');
            expect(result[3]).toBe('dashed');
            expect(result[4]).toBe('10px');
            expect(result[5]).toBe('10px');

            expect(result[6]).not.toBe('rgb(255, 0, 0)');
            expect(result[7]).not.toBe('rgb(255, 0, 0)');
            expect(result[8]).not.toBe('dashed');
            expect(result[9]).not.toBe('dashed');
            expect(result[10]).not.toBe('10px');
            expect(result[11]).not.toBe('10px');
        }));
    })
});