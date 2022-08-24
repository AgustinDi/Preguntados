import app from "./app.js";
import connect from "./database/connect.js"
import queries from "./database/queries.js"

app.listen(app.get('port'), async () => {
    const pool = await connect()
    await pool.request().query(queries.clearDatabase)
    
    console.log('server on port', app.get('port'))
})