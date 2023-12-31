const express = require('express')
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT

const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')
const _connect = require('./config/_connect')
_connect()
app.use(cors('*'))
app.use(bodyParser.json())
app.use('/api/tasks', router)
app.listen(PORT, () => {
  console.log('listening on port tasks ' + PORT)
})
