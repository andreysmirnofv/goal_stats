const request = require('request')

function firstCycle(){
    request.post({url: "http://127.0.0.1:2005", json: {funct: "main"}})
}


module.exports = {
    firstCycle: firstCycle
}