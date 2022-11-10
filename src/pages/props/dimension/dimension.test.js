// Props
const { sizeAliases } = require('../../../props/dimension');

// Utils
const getTestResults = require('../../../utils/getTestResults');

describe('dimension props', () => {
    test('Should apply dimension props', async () => {
        await page.goto('http://localhost:3000/props/dimension', { waitUntil: 'networkidle0' });

        // height (no unit)
        await getTestResults({
            id: 'heightNoUnit',
            propName: 'height',
        }, result => {
            expect(result).toBe('16px');
        });

        // height (unit)
        await getTestResults({
            id: 'heightUnit',
            propName: 'height',
            total: 2
        }, results => results.forEach((result, index) => {
            const values = ['16px', '15px'];

            expect(result).toBe(values[index]);
        }));

        // TODO: add height (aliases)

        // max height (no unit)
        await getTestResults({
            id: 'maxHeightNoUnit',
            propName: 'maxHeight',
        }, result => {
            expect(result).toBe('16px');
        });

        // max height (unit)
        await getTestResults({
            id: 'maxHeightUnit',
            propName: 'maxHeight',
            total: 2
        }, results => results.forEach((result, index) => {
            const values = ['16px', '15px'];

            expect(result).toBe(values[index]);
        }));

        // TODO: add max height (aliases)

        // max width (no unit)
        await getTestResults({
            id: 'maxWidthNoUnit',
            propName: 'maxWidth',
        }, result => {
            expect(result).toBe('16px');
        });

        // max width (unit)
        await getTestResults({
            id: 'maxWidthUnit',
            propName: 'maxWidth',
            total: 2
        }, results => results.forEach((result, index) => {
            const values = ['16px', '15px'];

            expect(result).toBe(values[index]);
        }));

        // TODO: add max width (aliases)
    })
});