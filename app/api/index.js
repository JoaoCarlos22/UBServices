const express = require('express')
const cors = require('cors')
const testeRota = require('./src/routes/router1')
const port = 4000

const app = express()
app.use(express.json())
app.use(cors('http://localhost:4000'))

app.use('/', testeRota)

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})