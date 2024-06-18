'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Consulta', [
      {
        data: new Date(),
        descricao: 'Consulta de rotina',
        pacienteId: 1, // Deixe o ID correspondente ao João da Silva (se for gerado automaticamente)
        medicoId: 1, // Deixe o ID correspondente ao Dr. Carlos Sousa (se for gerado automaticamente)
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data: new Date(),
        descricao: 'Consulta dermatológica',
        pacienteId: 2, // Deixe o ID correspondente à Maria Oliveira (se for gerado automaticamente)
        medicoId: 2, // Deixe o ID correspondente à Dra. Ana Lima (se for gerado automaticamente)
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Consulta', null, {});
  }
};
