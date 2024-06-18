'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    static associate(models) {
      Paciente.hasMany(models.Consulta, { foreignKey: 'pacienteId' });
    }
  }
  Paciente.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paciente',
  });
  return Paciente;
};
