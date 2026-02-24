import { Sequelize } from 'sequelize'

// importar os models e config
import User from '../app/models/User'
import configDB from '../config/database'

// armazena todos os models
const models = [User]

// ao instanciar a classe, irá inicializar todos os models para a realização dos migrations
class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(configDB)
        models.map( (model) => model.init(this.connection))
    }
}

export default new Database()