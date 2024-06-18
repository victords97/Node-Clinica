'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pacientes', [
      {
        nome: 'João da Silva',
        email: 'joao@gmail.com',
        telefone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria Oliveira',
        email: 'maria@gmail.com',
        telefone: '987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pacientes', null, {});
  }
};
