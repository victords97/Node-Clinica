'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medicos', [
      {
        nome: 'Dr. Carlos Sousa',
        especialidade: 'Cardiologista',
        telefone: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Dra. Ana Lima',
        especialidade: 'Dermatologista',
        telefone: '987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Medicos', null, {});
  }
};
