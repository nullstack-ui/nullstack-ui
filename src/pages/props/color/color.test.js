const Color = require('color');
const getTestProperty = require('../../../utils/getTestProperty');
const getTestResults = require('../../../utils/getTestResults');

describe('color props', () => {
    test('Should apply color props', async () => {
        await page.goto('http://localhost:3000/props/color', { waitUntil: 'networkidle0' });

        // bgColor (hex)
        await getTestResults({
            id: 'bgColorHex',
            propName: 'backgroundColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toContain('rgb(255, 0, 0)');
        }));

        // bgColor (name)
        await getTestResults({
            id: 'bgColorName',
            propName: 'backgroundColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toContain('rgb(255, 0, 0)');
        }));

        // bgColor (value)
        await getTestResults({
            id: 'bgColorValue',
            propName: 'backgroundColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toContain('rgb(0, 0, 255)');
        }));

        // bgColor (value/darken)
        await getTestResults({
            id: 'bgColorValueDarken',
            propName: 'backgroundColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toContain('rgb(0, 0, 128)');
        }));

        // bgColor (value/faded)
        await getTestResults({
            id: 'bgColorValueFaded',
            propName: 'backgroundColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toContain('rgb(128, 128, 255)');
        }));

        // bgColor (value/lighten)
        await getTestResults({
            id: 'bgColorValueLighten',
            propName: 'backgroundColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toContain('rgb(128, 128, 255)');
        }));

        // bgColor (value/opacity)
        await getTestResults({
            id: 'bgColorValueOpacity',
            propName: 'backgroundColor',
            total: 4
        }, results => results.forEach(result => {
            expect(result).toContain('rgba(0, 0, 255, 0.5)');
        }));

        // color (hex)
        await getTestResults({
            id: 'colorHex',
            propName: ['backgroundColor', 'color'],
            total: 1
        }, results => results.forEach(result => {
            expect(result[0]).toContain('rgb(255, 0, 0)');
            expect(result[1]).toContain('rgb(255, 229, 229)');
        }));

        // color (name)
        await getTestResults({
            id: 'colorName',
            propName: ['backgroundColor', 'color'],
            total: 1
        }, results => results.forEach(result => {
            expect(result[0]).toContain('rgb(255, 0, 0)');
            expect(result[1]).toContain('rgb(255, 229, 229)');
        }));

        // color (value)
        await getTestResults({
            id: 'colorValue',
            propName: ['backgroundColor', 'color'],
            total: 1
        }, results => results.forEach(result => {
            expect(result[0]).toContain('rgb(255, 0, 0)');
            expect(result[1]).toContain('rgb(255, 229, 229)');
        }));

        // color (value/darken)
        await getTestResults({
            id: 'colorValueDarken',
            propName: ['backgroundColor', 'color'],
            total: 1
        }, results => results.forEach(result => {
            expect(result[0]).toContain('rgb(128, 0, 0)');
            expect(result[1]).toContain('rgb(255, 217, 217)');
        }));

        // color (value/faded)
        await getTestResults({
            id: 'colorValueFaded',
            propName: ['backgroundColor', 'color'],
            total: 1
        }, results => results.forEach(result => {
            expect(result[0]).toContain('rgb(255, 128, 128)');
            expect(result[1]).toContain('rgb(38, 0, 0)');
        }));

        // color (value/lighten)
        await getTestResults({
            id: 'colorValueLighten',
            propName: ['backgroundColor', 'color'],
            total: 1
        }, results => results.forEach(result => {
            expect(result[0]).toContain('rgb(255, 128, 128)');
            expect(result[1]).toContain('rgb(38, 0, 0)');
        }));

        // color (value/opacity)
        await getTestResults({
            id: 'colorValueOpacity',
            propName: ['backgroundColor', 'color'],
            total: 1
        }, results => results.forEach(result => {
            expect(result[0]).toContain('rgba(255, 0, 0, 0.5)');
            expect(result[1]).toContain('rgb(255, 229, 229)');
        }));
    })
});