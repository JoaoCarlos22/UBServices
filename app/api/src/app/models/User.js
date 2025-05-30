import Sequelize, { Model } from 'sequelize';

// modelo de User com seus atributos 
class User extends Model {
    static init(sequelize){
        super.init(
        {
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            admin: Sequelize.BOOLEAN,
            doctor: Sequelize.BOOLEAN,
            attendant: Sequelize.BOOLEAN,
            nurse: Sequelize.BOOLEAN
        },
        {
            sequelize,
        })
    }
}

export default User