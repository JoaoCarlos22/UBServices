'use strict';

// todos os campos que devem ser enviados ao bando de dados quando chamar o arquivo
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', { 
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gerente: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      doctor: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      attendant: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      nurse: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  // função que desfaz algo do 'up'
  async down (queryInterface) {
    await queryInterface.dropTable('Users');
  }
};
