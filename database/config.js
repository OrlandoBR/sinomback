
const sql = require('mssql')



const dbConnection = async()=>{

    const dbSettings = {
        user:process.env.USER,
        password:process.env.PASS,
        server:process.env.SERVER,
        database:process.env.DB,
        options:{
            trustServerCertificate: true
        }

    }

    try{
        const pool = await sql.connect(dbSettings)
        return pool

    }catch(error){
        console.log(error)
        throw new Error('Error al iniciar la base de datos')
    }

}

module.exports = {
    dbConnection, sql
}