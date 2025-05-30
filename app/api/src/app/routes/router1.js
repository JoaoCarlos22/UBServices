import {Router} from "express"
import uuid from 'uuid'

const router = new Router()

const visitas = []

const chekIdVisita = (req, res, next) => {
    const {id} = req.params

    const index = visitas.findIndex(visita => visita.id === id)

    if (index < 0) {
        return res.send("Visita não encontrada!")
    }

    req.visitaId = index

    next()
}

const viewRoute = (req, res, next) => {
    const rota = req.route.path
    const method = req.method
    console.log(`[${method}] - ${rota}`)
    //console.log(req)
    next()
}

router.post('/cadVisita', viewRoute, (req, res) => {
    try {
        const {name, age} = req.body

        if ( !name || !age) throw new Error("Os campos devem ser preenchidos!")

        const newVisita = {id: uuid.v4(), name, age}

        visitas.push(newVisita)

        return res.status(201).json(newVisita)
    } catch (error) {
        return res.status(400).send({erro: error.message})
    }
})

router.get('/visitas', viewRoute, (req, res) => {
    try {
        if (!visitas) {
            return res.status(201).send("Nenhum pedido cadastrado!")
        }
        return res.status(201).json(visitas)
    } catch (error) {
        return res.status(400).send({erro: error.message})
    }
    
})

router.put('/order/:id', viewRoute, chekIdVisita, (req, res) => {
    const {index} = req.visitaId
    const {id} = req.params
    const {name, age} = req.body

    const newVisita = {id, name, age}

    visitas[index] = newVisita

    return res.json(newVisita)
})

router.delete('/delVisita/:id', viewRoute, chekIdVisita, (req, res) => {
    const {index} = req.visitaId
    
    visitas.splice(index, 1)

    return res.send("Visita excluída!")
})

router.get('/order/:id', viewRoute, chekIdVisita, (req, res) => {
    const index = req.visitaId
    const visita = visitas[index]
    return res.json(visita)
})

export default router