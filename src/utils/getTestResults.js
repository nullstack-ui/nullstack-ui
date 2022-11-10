const getTestProperty = require('./getTestProperty');

const getTestResults = async (params, callback) => {
    const { total, ...rest } = params;
    const $$ = [];

    if (total) {
        for (let i = 0; i < total; i++) {
            const $ = await getTestProperty({ ...rest, index: i });
    
            $$.push($);
        }
    } else {
        return await getTestProperty({ ...rest, index: 0 });
    }

    callback($$)
}

module.exports = getTestResults