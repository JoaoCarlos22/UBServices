import express from 'express'
import routesGlobal from './app/routes/global'
import routesUser from './app/routes/users'

// invoca a insância do banco de dados (inicialização)
import './database'

// estrutura da API
class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(routesGlobal)
        this.app.use(routesUser)
    }
}

export default new App().app