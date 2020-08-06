const config1 = require('../auth/auth').config1
require('dotenv').config()
const url = 'https://api.bigcommerce.com/stores/5jndoa8qjs/v2/'
const path = require('path')
const ngrok = "https://d0f5bb20662c.ngrok.io/uploads/"
getConfig = (name) => {
    config1['method'] = 'GET'
    // config1['uri'] = url+name
    config1['uri'] = url+name
    return config1

}

postConfig = (name,req) => {
    config1['method'] = 'POST'
    config1['uri'] = url+name
    let params = {
        ...config1,
        body : req.body
    }
    return params
}

putConfig = (name,req) => {
    config1['method'] = 'PUT'
    config1['uri'] = `${url+name}/${req.query.id}`
    let params = {
        ...config1,
        body : req.body
    }
    return params
}

postImage = (name,req) => {
    config1['method'] = 'POST'
    config1['uri'] = `https://api.bigcommerce.com/stores/5jndoa8qjs/v3/catalog/${name}/${req.query.id}/images`
  
    // let params = {
    //     ...config1,
    //     body : req.body
    // }

    let params = {
        ...config1,
        body : {
            "is_thumbnail": true,
            "sort_order": 1,
            "description": "Top View",
            "image_url" : `${ngrok}${req.file.filename}`
        }
    }

    console.log(params);
    return params
}

deleteConfig = (name,req) => {
    config1['method'] = 'DELETE'
    config1['uri'] = `${url+name}/${req.query.id}`
    return config1
}

module.exports = {
    getConfig,
    postConfig,
    putConfig,
    deleteConfig,
    postImage,
}