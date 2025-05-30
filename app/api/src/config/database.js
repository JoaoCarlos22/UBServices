module.exports = {
    dialect: 'postgres', // qual banco de dados vai ser utilizado
    host: 'localhost',
    username: 'ubservices',
    password: 'ubservices@2025',
    databae: 'ubservices',
    define: {
        timestamps: true,
        underscored: true, //habilita o estilo "user_endereco"
        underscoredAll: true
    }
}