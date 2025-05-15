const express = require('express')
const testeRota = require('./routes/router1')
const port = 3000

const app = express()

app.get('/', testeRota)

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}`)
})