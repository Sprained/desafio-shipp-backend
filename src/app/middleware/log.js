const Log = require('../model/Log');

async function log(lat, long, code, store){

    await Log.create({
        date: new Date(),
        lat,
        long,
        status_code: code,
        store_number: store
    });
}

module.exports = log;