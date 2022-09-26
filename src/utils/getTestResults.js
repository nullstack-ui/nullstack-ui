const getTestProperty = require('./getTestProperty');

const getTestResults = async (params, callback) => {
    const { total, ...rest } = params;
    const $$ = [];

    for (let i = 0; i < total; i++) {
        const $ = await getTestProperty({ ...rest, index: i });

        $$.push($);
    }

    callback($$)
}

module.exports = getTestResults