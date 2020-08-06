require('dotenv').config()

const config1 = {
        method : undefined,
        uri : undefined,
        json:true,
        headers: {
            'storeHash': process.env.HASH_TABLE,
            'content-type': 'application/json',
            'X-Auth-Client': process.env.CLIENT_ID,
            'X-Auth-Token': process.env.ACCESS_TOKEN
        },

    };

const config2 = {
    method : undefined,
    uri : undefined,
    json:true,
    headers: {
        'content-type': 'application/json',
        'X-Auth-Client': process.env.CLIENT_ID,
        'X-Auth-Token': process.env.ACCESS_TOKEN
    },

};    
module.exports = {
    config1,
    config2
}