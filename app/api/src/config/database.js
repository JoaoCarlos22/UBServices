module.exports = {
    dialect: 'postgres', // qual banco de dados vai ser utilizado
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'ubservices@2025',
    database: 'ubservices',
    dialectOptions: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}