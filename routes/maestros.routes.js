const { Router} = require('express')

const { maestrosGet, 
        maestrosPost,
        maestroPut, 
        maestroDelete, 
        mtroCuentaGet, 
        mtroCuentaPost, 
        maestrosGetId,
        maestroGetId_Siguiente
    } = require('../controllers/maestros.controller')

const router = Router()


router.get('/', (req,res)=>{
    res.send('Hello Champ !!')
})

router.get('/maestro', maestrosGet)
router.get('/maestro/:id', maestrosGetId)
router.post('/maestro', maestrosPost )
router.put('/maestro', maestroPut)
router.delete('/maestro', maestroDelete)

router.get('/maestro_id/:secc',maestroGetId_Siguiente)

router.get('/mbanco', mtroCuentaGet)
router.post('/mbanco', mtroCuentaPost)

module.exports = router