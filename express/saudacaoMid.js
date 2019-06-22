function saudacao(name) {
    return function(req, res, next) {
        console.log(`Seja bem vindo Sr. ${name}!`)
        next()
    }
}

module.exports = saudacao