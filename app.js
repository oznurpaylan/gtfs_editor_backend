const express = require("express")
const bodyParser=require('body-parser')
const cors=require('cors')
//const env= require('dotenv')
require('dotenv').config()
const db = require('./database/db.js')
const { zipRouter } = require('./routers/zipRouter.js')
const { addRouter } = require("./routers/addRouter.js")
const { modelRouter } = require("./routers/modelRouter.js")
const { saveRouter } = require("./routers/saveRouter.js")
const { mapRouter } = require("./routers/mapRouter.js")

global.__basedir = __dirname

const app = express()

//env.config()
const port = process.env.PORT || 5000
db.connect()

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.urlencoded({ extended: true }))
app.use('/', zipRouter)
app.use('/add', addRouter) //db ekleme 
app.use('/model',modelRouter)
app.use('/save',saveRouter) //db den zip alarak dosyaya kaydetme
app.use('/map',mapRouter)

app.listen(port, () => {
    console.log(`${port} numaralı portta hazır.`)
})