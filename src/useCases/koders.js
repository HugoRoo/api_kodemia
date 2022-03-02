const Koder = require('../models/koders')


//endpoint -> caso de uso -> modelos

function getAll() {
    return Koder.find({})  // promesa
}

module.exports = {
    getAll
}