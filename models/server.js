const express = require('express')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api'

        //Middleware
        this.middlewares()
        
        //Rutas
        this.routes()
    }

    middlewares(){
        //Lectura y parseo del body
        this.app.use(express.json())

        //Directorio Publico
        this.app.use(express.static('public') )
    }

    routes(){
        this.app.use(this.usuariosPath , require('../routes/maestros'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Corriendo en puerto:', this.port)
        })
    }
}

module.exports = Server