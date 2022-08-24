import express from "express"
import { config } from "dotenv"
import morgan from "morgan"
import cors from "cors"


config()

import router from "./routes/index.js"

const app = express()

app.set('port', process.env.PORT || 3001)

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use(router)

export default app