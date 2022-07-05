// const {send}  = require('./request')
// const {read} = require('./response')
const {send,read} = require('./internals')

function makeRequest (url,data)
{
   send(url,data)
   return read()
}

const dataResponse = makeRequest('https://google.com','farooq')
console.log("dataResponse ",dataResponse)

