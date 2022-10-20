const { response } = require('express')

const maestrosGet = (req,res)=>{

    const {a,b,c='No name'} = req.query
    res.json({
        ok:true,
        modulo: 'maestro',
        msg: 'get API - controlador',
        msg2: 'Consultar',
        a,b,c
    })
}

const maestrosPost = (req,res)=>{

    const body = req.body

    res.json({
        ok:true,
        modulo: 'maestro',
        msg: 'post API - controlador',
        msg2: 'Crear',
        body
    })
}

const maestroPut = (req,res)=>{

    const id = req.params.id;

    res.json({
        ok:true,
        modulo: 'maestro',
        msg: 'put API - controlador',
        msg2: 'Actualizar',
        id
    })
}

const maestroDelete = (req,res)=>{
    res.json({
        ok:true,
        modulo: 'maestro',
        msg: 'delete API - controlador',
        msg2: 'Eliminar'
    })
}

const mtroCuentaGet = (req,res)=>{
    res.json({
        ok:true,
        modulo: 'cuentabanco',
        msg: 'consulta API - controlador',
        msg2: 'Consultar'
    })
}

const mtroCuentaPost = (req,res)=>{
    res.json({
        ok:true,
        modulo: 'cuentabanco',
        msg: 'consulta API - controlador',
        msg2: 'Crear'
    })
}

const mtroCuentaPut = (req,res)=>{
    res.json({
        ok:true,
        modulo: 'cuentabanco',
        msg: 'consulta API - controlador',
        msg2: 'Actualizar'
    })
}




module.exports = {
    maestrosGet,
    maestrosPost,
    maestroPut,
    maestroDelete,
    mtroCuentaGet,
    mtroCuentaPost,
    mtroCuentaPut
}