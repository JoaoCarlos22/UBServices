import express from 'express'
import router from './app/routes/router1'

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(router)
    }
}

export default new App().app