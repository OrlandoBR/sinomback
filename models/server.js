const express = require('express')
const { dbConnection } = require('../database/config')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api'

        //Conectar a Base de Datos
        this.conectarDB()

        //Middleware
        this.middlewares()
        
        //Rutas
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        //Lectura y parseo del body
        this.app.use(express.json())

        //Directorio Publico
        this.app.use(express.static('public') )
    }

    routes(){
        this.app.use(this.usuariosPath , require('../routes/maestros.routes'))
        this.app.use(this.usuariosPath , require('../routes/catalogos.routes'))
        this.app.use(this.usuariosPath , require('../routes/plazas.routes'))
        this.app.use(this.usuariosPath , require('../routes/nomina.routes'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Corriendo en puerto:', this.port)
        })
    }
}

module.exports = Server