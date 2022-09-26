const getTestProperty = async ({
    id,
    index,
    propName,
}) => {
    const $$ = [];

    if (Array.isArray(propName)) {
        for (let name of propName) {
            const $ = await page.evaluate(`getComputedStyle(document.body.querySelectorAll("[data-testid=\'${id}\']")[${index}]).${name}`);

            $$.push($);
        }
        
        return $$
    } else {
        return await page.evaluate(`getComputedStyle(document.body.querySelectorAll("[data-testid=\'${id}\']")[${index}]).${propName}`)
    }
}

module.exports = getTestProperty