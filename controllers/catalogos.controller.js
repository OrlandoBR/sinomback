const { response } = require('express')
const { dbConnection, sql } = require("../database/config")

const categoriasGet = async (req,res)=>{
    //Consulta El catalogo de Categorias.

    try {
        const pool = await dbConnection()
        const result = await pool.request()
        .query(`Select pk_id_categoria as id_categoria, categoria, descripcion FROM Cat_Categoria order by categoria `)
        res.json({
            registros: result.rowsAffected[0],
            result:result.recordset})
    }
    catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    categoriasGet
}