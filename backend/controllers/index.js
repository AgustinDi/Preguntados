import connect from "../database/connect.js"
import queries from "../database/queries.js";

export const getAllCategories = async (req, res, next) => {
    const pool = await connect();
    const result = await pool.request().query(queries.selectAllCategories)
    res.send(result.recordset)
}

export const getAllQuestions = async (req, res, next) => {
    const pool = await connect();
    const result = await pool.request().query(queries.selectAllQuestions)
    res.send(result.recordset)
}

export const getAQuestion = async (req, res, next) => {
    const { id } = req.params;
    const pool = await connect();
    let result = await pool.request().query(queries.selectAQuestion(id))
    if (result.recordset.length === 0) result.recordset = 'no se encontró'
    res.send(result.recordset)
}

export const getACategory = async (req, res, next) => {
    const { id } = req.params;
    const pool = await connect();
    let result = await pool.request().query(queries.selectACategory(id))
    if (result.recordset.length === 0) result.recordset = 'no se encontró'
    res.send(result.recordset)
}  