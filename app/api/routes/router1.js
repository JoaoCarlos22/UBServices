const express = require("express")

const router = express.Router()

const testeRota = router.get('/teste', (req, res) => {
    const name = req.query.name
    const age = req.query.age
    return res.json({name: name, age: age})
    })

module.exports = testeRota