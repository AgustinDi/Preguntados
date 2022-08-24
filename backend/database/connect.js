import sql from 'mssql'

const settings = {
    user : "yina",
    password : "12345678",
    server : "localhost",
    database : "app_preguntas",
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
} //falta el port: (process.env.PORT_DB)????   server es ip:::: localhost

export default async function connect() {
    try {
        const pool = await sql.connect(settings)
        return pool
    } catch (e) {
        console.log("error",e.message)
    }
}