const { response } = require('express')
const { dbConnection, sql } = require("../database/config")

const nominaGet = async (req,res)=>{
    //Consulta El catalogo de Categorias.

    const { nombre = '', ap_pat = '', ap_mat = '', plaza = '', seccion = '', nomina = '', curp='' } = req.query
    console.log(req.query)

    try {

        if ( (nombre == null || nombre==='') && (ap_pat == null || ap_pat==='') 
        && (ap_mat == null || ap_mat==='')  && (plaza == null || plaza==='') 
        && (seccion == null || seccion==='') && (nomina == null || nomina==='')
        && (curp == null || curp==='')
        ) {

           return res.status(400).json({ 
               estatus: 'error',
               modulo: 'nomina',
               peticion: 'Consultar',
               errorText: 'Debe ingresar al menos un filtro ',
               num_registros: 0,
               resultado: '', 
           })
        }

        const pool = await dbConnection()
        const result = await pool.request()
        .query(`select id_curp AS curp, ap_paterno, ap_materno, nombre, (replace(ap_paterno,' ','') +' '+replace(ap_materno,' ','') +' '+ rtrim(nombre)) as nom_completo, plaza, 
                tipo_cpto, concepto, importe, desde, hasta, id_seccion as seccion, 
                qna_pago, contrato_enlace as contrato, num_orden, cve_benef, nomina 

                    FROM [dbo].[hist_pago_comp_2022]
                
                    WHERE (nombre like '%${nombre}%' or nombre is null)
                and (ap_paterno like '%${ap_pat}%' or ap_paterno is null)
                and (ap_materno like '%${ap_mat}%' or ap_materno is null) 
                and plaza like '%${plaza}%'  
                and id_seccion like '${seccion===''?'%%':seccion}'  
                and (nomina like '%${nomina}%' or nomina is null) 
                order by id_seccion, qna_pago desc , ap_paterno , ap_materno, nombre , plaza, tipo_cpto, concepto`)

        res.json({
            estatus:'ok',
            modulo: 'nomina',
            peticion: 'Consultar',
            num_registros: result.rowsAffected[0],
            resultado:result.recordset
        
        })

    }
    catch (error) {
        res.status(500)
        res.json({
            estatus:"error",
            modulo: 'nomina',
            peticion: 'Consultar',
            errorText: error,
            num_registros:0,
            resultado: error 
        })
    }
}

module.exports = {
    nominaGet
}