//inicializará mi aplicación el index
const server = require('./src/server')
const dbConnect = require('./src/lib/db')
const { get } = require('express/lib/response')


dbConnect()
    .   then(() => {
        console.log('Database connected :D')
        server.listen(8080, () => {
            console.log('server running on port 8080')
        })
    })
    .catch((error) => {
        console.log('Error: ', error)
    })


    //GET / Koders
/*
1.- Crear (asegurarme de que exista) el modelo necesario (Entidades)
2.-Crear el caso de uso necesario (useCases)
3.- Crear el endpoint (routers)
*/


// Practica
// POST /koders
// PATCH /koders/:id
// DELETE /koders/:id
// GET /koders/:id





