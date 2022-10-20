const { Router} = require('express')

const { maestrosGet, 
        maestrosPost,
        maestroPut, 
        maestroDelete, 
        mtroCuentaGet, 
        mtroCuentaPost, 
        mtroCuentaPut 
    } = require('../controllers/maestros.controller')

const router = Router()


router.get('/', (req,res)=>{
    res.send('Hello Champ !!')
})

router.get('/maestro', maestrosGet)
router.post('/maestro', maestrosPost )
router.put('/maestro/:id', maestroPut)
router.delete('/maestro', maestroDelete)

router.get('/ctabanco', mtroCuentaGet)
router.post('/ctabanco', mtroCuentaPost)
router.put('/ctabanco', mtroCuentaPut)

module.exports = router