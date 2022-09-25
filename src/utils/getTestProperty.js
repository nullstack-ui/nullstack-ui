const getTestProperty = async ({
    id,
    index,
    propName,
}) => {
    return await page.evaluate(`getComputedStyle(document.body.querySelectorAll("[data-testid=\'${id}\']")[${index}]).${propName}`)
}

module.exports = getTestProperty