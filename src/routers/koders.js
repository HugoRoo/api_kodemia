const express = require('express')
const { response } = require('../server')
const useCasesKoders = require('../useCases/koders')

// useCasesKoders ={
//    getall
// }

const router = express.Router()


router.get('/',async(request, response) => {
    try {
        const allKoders = await useCasesKoders.getAll()

        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })


    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }

})

module.exports = router