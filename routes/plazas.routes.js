const { Router} = require('express')

const { 
    plazasGet,
    plazasPost
    } = require('../controllers/plazas.controller')

const router = Router()


router.get('/plazas', plazasGet)
router.post('/plazas', plazasPost)


module.exports = router