const { Router} = require('express')

const { 
        categoriasGet
    } = require('../controllers/catalogos.controller')

const router = Router()


router.get('/categorias', categoriasGet)


module.exports = router