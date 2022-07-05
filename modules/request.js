
function encrypt(data)
{
    return `encrypt ${data}`
}

function send(url,data)
{
    const dataEncrypt = encrypt('data')
    console.log(`sending ${dataEncrypt} to ${url}`)
}

module.exports = {
    send
}