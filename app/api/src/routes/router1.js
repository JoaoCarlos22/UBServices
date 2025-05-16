const express = require("express")
const uuid = require('uuid')

const router = express.Router()

const pedidos = []

const chekIdPedido = (req, res, next) => {
    const {id} = req.params

    const index = pedidos.findIndex(pedido => pedido.id === id)

    if (index < 0) {
        return res.send("Pedido não encontrado!")
    }

    req.orderId = index

    next()
}

const viewRoute = (req, res, next) => {
    const rota = req.route.path
    const method = req.method
    console.log(`[${method}] - ${rota}`)
    //console.log(req)
    next()
}

router.post('/order', viewRoute, (req, res) => {
    try {
        const {order, name, price} = req.body

        if (!order || !name || !price) throw new Error("Os campos devem ser preenchidos!")

        const pedido = {id: uuid.v4(), order, name, price, status: "Em preparação!"}

        pedidos.push(pedido)

        return res.status(201).json(pedido)
    } catch (error) {
        return res.status(400).send({erro: error.message})
    }
})

router.get('/order', viewRoute, (req, res) => {
    try {
        if (!pedidos) {
            return res.status(201).send("Nenhum pedido cadastrado!")
        }
        return res.status(201).json(pedidos)
    } catch (error) {
        return res.status(400).send({erro: error.message})
    }
    
})

router.put('/order/:id', viewRoute, chekIdPedido, (req, res) => {
    const {index} = req.orderId
    const {id} = req.params
    const {order, name, price} = req.body

    const newOrder = {id, order, name, price}

    pedidos[index] = newOrder

    return res.json(newOrder)
})

router.delete('/order/:id', viewRoute, chekIdPedido, (req, res) => {
    const {index} = req.orderId
    
    pedidos.splice(index, 1)

    return res.send("Pedido excluído!")
})

router.get('/order/:id', viewRoute, chekIdPedido, (req, res) => {
    const index = req.orderId
    const pedido = pedidos[index]
    return res.json(pedido)
})

router.patch('/order/:id', viewRoute, chekIdPedido, (req, res) => {
    const index = req.orderId
    pedidos[index].status = "Pronto!"
    return res.json(pedidos[index])
})

module.exports = router