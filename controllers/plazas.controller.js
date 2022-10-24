const { response } = require('express')
const { dbConnection, sql } = require("../database/config")

const plazasGet = async (req,res)=>{
    //Consulta El catalogo de Categorias.

    const { nombre = '', ap_pat = '', ap_mat = '', plaza = '', seccion = '', nomina = '' } = req.query
    console.log(req.query)



    try {

        if ( (nombre == null || nombre==='') && (ap_pat == null || ap_pat==='') 
        && (ap_mat == null || ap_mat==='')  && (plaza == null || plaza==='') 
        && (seccion == null || seccion==='') && (nomina == null || nomina==='')) {

           return res.status(400).json({ 
               estatus: 'error',
               modulo: 'plazas',
               peticion: 'Consultar',
               errorText: 'Debe ingresar al menos un filtro ',
               num_registros: 0,
               resultado: '', 
           })
        }

        const pool = await dbConnection()
        const result = await pool.request()
        .query(`SELECT isnull(id_mtro,'') as id_mtro, isnull(id_trabajador,'') as id_trabajador, isnull(curp,'') as curp
                , isnull(ap_paterno,'') as ap_paterno, isnull(ap_materno,'') as ap_materno 
                , isnull(nombre,'') as nombre , plza.id_plaza, plaza, id_seccion, isnull(nomina,'') as nomina  
                FROM [Cat_Plazas_2aprop] plza
                LEFT JOIN Tb_Mtro_Plazas mtroplaza on mtroplaza.id_plaza = plza.id_plaza
                LEFT JOIN Tb_Maestros_2 mtro on mtro.id_mtro = mtroplaza.id_mtro_nomina
                WHERE (nombre like '%${nombre}%' or nombre is null)
                and (ap_paterno like '%${ap_pat}%' or ap_paterno is null)
                and (ap_materno like '%${ap_mat}%' or ap_materno is null) 
                and plaza like '%${plaza}%'  
                and id_seccion like '${seccion===''?'%%':seccion}'  
                and (nomina like '%${nomina}%' or nomina is null) 
                order by id_seccion, ap_paterno , ap_materno, nombre , plaza `)

        res.json({
            estatus:'ok',
            modulo: 'plazas',
            peticion: 'Consultar',
            num_registros: result.rowsAffected[0],
            resultado:result.recordset
        
        })
        //id_mtro,id_trabajador, curp, ap_paterno, ap_materno, nombre , plza.id_plaza, plaza, id_seccion, nomina  
    }
    catch (error) {
        res.status(500)
        res.json({
            estatus:"error",
            modulo: 'plazas',
            peticion: 'Consultar',
            errorText: error,
            num_registros:0,
            resultado: error 
        })
    }
}

const plazasPost = async(req,res)=>{
    const { secc, nivel, zona, id_categoria, plaza } = req.body

    try {

        if ( (secc == null || secc==='') || (nivel == null || nivel==='') || (zona == null || zona==='')  || (id_categoria == null || id_categoria==='') || (plaza == null || plaza==='' || plaza.length<20)) {
            return res.status(400).json({ 
                estatus: 'error',
                modulo: 'plazas',
                peticion: 'crear',
                errorText: `Por favor envia todos los campos. ${plaza.length<20?' Revisa la longitud de caracteres de la plaza':''}`,
                num_registros: 0,
                resultado: '', 
            })
        }

        const pool = await dbConnection()
        const result = await pool.request()
            .input("secc", sql.VarChar, secc)
            .input("nivel", sql.VarChar, nivel)
            .input("zona",sql.VarChar, zona)
            .input("id_categoria", sql.VarChar, id_categoria)
            .input("plaza", sql.VarChar, plaza)
            .execute("Inserta_Plaza")

        res.json({
            estatus: 'ok',
            modulo: 'Plazas',
            peticion: 'Crear',
            errorText: '',
            resultado: result.recordset[0]
        })
    }
    catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            estatus:"error",
            modulo: 'plazas',
            peticion: 'crear',
            errorText: error,
            num_registros:0,
            resultado: error 
    })
    }
}

module.exports = {
    plazasGet,
    plazasPost
}