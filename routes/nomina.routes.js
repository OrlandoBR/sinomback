const { Router} = require('express')

const { nominaGet, 
    } = require('../controllers/nomina.controller')

const router = Router()

router.get('/nominapago', nominaGet)


module.exports = router