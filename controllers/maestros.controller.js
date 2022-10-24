const { response } = require('express')
const { dbConnection, sql } = require("../database/config")


const maestrosGet = async (req,res)=>{
    //Consulta Maestros por filtros.
    const {nombre='',ap_pat='',ap_mat='', curp='',seccion='',nomina=''} = req.query
    console.log(req.query)

    try {

        if ( (nombre == null || nombre==='') && (ap_pat == null || ap_pat==='') 
        && (ap_mat == null || ap_mat==='')  && (curp == null || curp==='') 
        && (seccion == null || seccion==='') && (nomina == null || nomina==='')) {

           return res.status(400).json({ 
               estatus: 'error',
               modulo: 'maestros',
               peticion: 'Consultar',
               errorText: 'Debe ingresar al menos un filtro ',
               num_registros: 0,
               resultado: '', 
           })
        }

        const pool = await dbConnection()
        const result = await pool.request()
        .query(`Select id_mtro as id_maestro, id_trabajador, isnull(curp,'') as curp, rfc
                , isnull(ap_paterno,'') as paterno, isnull(ap_materno,'') as materno, isnull(nombre,'') as nombre
                , isnull(fk_id_seccion_persona,'') as secccion, qna_ing_sep, estatus 
                FROM Tb_Maestros_2 
                    WHERE nombre like '%${nombre}%' 
                    and ap_paterno like '%${ap_pat}%'  
                    and ap_materno like '%${ap_mat}%'  
                    and curp like '%${curp}%'  
                    and FK_id_seccion_persona like '${seccion===''?'%%':seccion}' `)
        res.json({
            estatus:'ok',
            modulo: 'Maestros',
            peticion: 'Consultar',
            num_registros: result.rowsAffected[0],
            resultado:result.recordset
        })
    }
    catch (error) {
        res.status(500)
        res.json({
            estatus:"error",
            modulo: 'maestros',
            peticion: 'Consultar',
            errorText: error,
            num_registros:0,
            resultado: error 
        })
    }
}

const maestrosGetId = async(req,res)=>{
    //Consulta maestro por Id especifico 
    const {id} = req.params

    try{
        const pool = await dbConnection()
        const result = await pool.request()
        .input("Id",id)
        .query('SELECT * FROM Tb_Maestros_2 where id_mtro = @Id')
        res.json(result.recordset[0])
        }
    catch(error){
        res.status(500)
        res.send(error.message)
    }

}

const maestroGetId_Siguiente = async (req,res)=>{
    const secc = req.params.secc

    try{
        const pool = await dbConnection()
        const result = await pool.request()
        .input("secc",secc)
        .execute('Obten_idTrabajador_Siguiente')
        res.json(result.recordset[0])
    }
    catch(error){
        res.status(500)
        res.send(error.message)
    }

}

const maestrosPost = async (req,res)=>{
    // Crear maestro nuevo
    const body = req.body
    const{ nombre='',ap_pat='',ap_mat='', curp='',secc='', rfc='', tel='', correo='', id_trabajador='', qna_sep='', domicilio=''} = req.body

    try{

        if ( (nombre == null || nombre==='') || (ap_pat == null || ap_pat==='') || (ap_mat == null || ap_mat==='')  || (curp == null || curp==='')) {
            return res.status(400).json({ estatus:"error", msg: "Por favor envia todos los campos del formulario" })
        }

        if ( (secc == null || secc==='') || (rfc == null || rfc==='') || (tel == null || tel==='')  || (correo == null || correo==='')) {
            return res.status(400).json({ estatus:"error", msg: "Por favor envia todos los campos del formulario" })
        }

        if ( (id_trabajador == null || id_trabajador==='') || (qna_sep == null || qna_sep==='')  ) {
            return res.status(400).json({ estatus:"error", msg: "Por favor envia todos los campos del formulario" })
        }
        


        const pool = await dbConnection()
        const result = await pool.request()
        .input('curp',sql.VarChar,curp)
        .input('rfc',sql.VarChar,rfc)
        .input('ap_paterno',sql.VarChar,ap_pat)
        .input('ap_materno',sql.VarChar,ap_mat)
        .input('nombre',sql.VarChar,nombre)
        .input('tel',sql.VarChar,tel)
        .input('correo',sql.VarChar,correo)
        .input('secc',sql.VarChar,secc)
        .input('qna_sep',sql.VarChar,qna_sep)
        .input('domicilio',sql.VarChar,domicilio)
        .input('id_trabajador',sql.VarChar,id_trabajador)
        .execute('Inserta_Maestro')

        res.json({
            estatus:'ok',
            modulo: 'maestro',
            msg: 'Crear',
            body,
            result: result.recordset[0]
        })
    }
    catch(error){
        res.status(500)
        res.json({
            estatus:"error",
            modulo: 'maestro',
            msg: 'Crear',
            result:error.message
        })
    }
}

const maestroPut = async (req, res) => {
    //Actualizar datos de 1 maestro
    const id = req.query.id
    const { nombre, ap_pat, ap_mat, curp } = req.body

    console.log(id)

    try {

        if ( (nombre == null || nombre==='') || (ap_pat == null || ap_pat==='') || (ap_mat == null || ap_mat==='')  || (curp == null || curp==='')) {
            return res.status(400).json({ msg: "Bad Request. Porfavor envia todos los campos" })
        }

        const pool = await dbConnection()
        const result = await pool.request()
            .input("nombre", sql.VarChar, nombre)
            .input("ap_paterno", sql.VarChar, ap_pat)
            .input("ap_materno", sql.VarChar, ap_mat)
            .input("curp", sql.VarChar, curp)
            .input('id', sql.Int, id)
            .query('UPDATE Tb_Maestros_2 SET nombre=@nombre, ap_paterno=@ap_paterno, ap_materno=@ap_materno, curp=@curp WHERE id_mtro= @id  ')

        res.json({
            estatus: 'ok',
            modulo: 'maestro',
            msg: 'Actualizar',
            id            
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        res.send(error.message)
    }

}

const maestroDelete = (req,res)=>{
    res.json({
        ok:true,
        modulo: 'maestro',
        msg: 'delete API - controlador',
        msg2: 'Eliminar'
    })
}


/// CUENTAS ****************************

const mtroCuentaGet = async (req, res) => {
    //Consulta el maestro y su cuenta relacionada
    const { nombre = '', ap_pat = '', ap_mat = '', curp = '', seccion = '', con_cuenta = '' } = req.query
    console.log(req.query)

    try {

        if ( (nombre == null || nombre==='') && (ap_pat == null || ap_pat==='') 
             && (ap_mat == null || ap_mat==='')  && (curp == null || curp==='') 
             && (seccion == null || seccion==='') && (con_cuenta == null || con_cuenta==='')) {

                return res.status(400).json({ 
                    estatus: 'error',
                    modulo: 'cuentabanco',
                    peticion: 'Consultar',
                    errorText: 'Debe ingresar al menos un filtro ',
                    num_registros: 0,
                    resultado: '', 
                })
        }

        const pool = await dbConnection()
        const result = await pool.request()
            .query(`SELECT id_trabajador, mtro.curp, ap_paterno, ap_materno, nombre, fk_id_seccion_persona , id_cuenta, no_cuenta, id_banco, banco 
                    from Tb_maestros_2 mtro
                    LEFT JOIN tb_cuentas_banco cta on cta.curp = mtro.curp
                WHERE nombre like '%${nombre}%' 
                and ap_paterno like '%${ap_pat}%'  
                and ap_materno like '%${ap_mat}%'  
                and mtro.curp like '%${curp}%'  
                and FK_id_seccion_persona like '${seccion===''?'%%':seccion}' ` )
                //and mtro.curp ${con_cuenta==='1'? ' mtro.curp like \'%%\' ':'mtro.curp si null' } `)
        res.json({
            estatus:'ok',
            modulo: 'cuentabanco',
            peticion: 'Consultar',
            errorText: '',
            num_registros:result.rowsAffected[0],
            resultado:result.recordset
        })
    } catch (error){
        console.log(error)
        res.status(500)
        res.json({
                estatus:"error",
                modulo: 'cuentabanco',
                peticion: 'Consultar',
                errorText: error,
                num_registros:0,
                resultado: error 
        })


    }
}

const mtroCuentaPost = async (req, res) => {

    const { curp, cuenta, id_banco, banco } = req.body

    try {

        if ( (curp == null || curp==='') || (cuenta == null || cuenta==='') || (id_banco == null || id_banco==='')  || (banco == null || banco==='')) {
            //return res.status(400).json({ msg: "Por favor envia todos los campos" })
            return res.status(400).json({ msg: req.body })
        }

        const pool = await dbConnection()
        const result = await pool.request()
            .input("curp", sql.VarChar, curp)
            .input("cuenta", sql.VarChar, cuenta)
            .input("id_banco",sql.VarChar, id_banco)
            .input("banco", sql.VarChar, banco)
            .execute("Inserta_Maestro_CtaBanco")

        res.json({
            estatus: 'ok',
            modulo: 'cuentabanco',
            peticion: 'Crear',
            errorText:'',
            msg: 'El registro de la cuenta se ha registrado',
            resultado : result
        })
    }
    catch (error) {
        console.log(error)
        res.status(500)
        res.json({
            estatus:'error',
            modulo: 'cuentabanco',
            peticion:'Crear',
            errorText: error.message,
            resultado: error
        })
    }
}


module.exports = {
    maestrosGet,
    maestrosGetId,
    maestrosPost,
    maestroPut,
    maestroDelete,
    mtroCuentaGet,
    mtroCuentaPost,
    maestroGetId_Siguiente
}