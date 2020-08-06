const request = require('request-promise')

const response = (query,res) => {
    request(query).then((data)=>{
        res.send({'data' : data,
                'message' : 'Given request successfully completed'}
        )
    }).catch((err)=>{
        res.send(err)
    });
}


module.exports = response;