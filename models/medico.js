'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Medico extends Model {
    static associate(models) {
      Medico.hasMany(models.Consulta, { foreignKey: 'medicoId' });
    }
  }
  Medico.init({
    nome: DataTypes.STRING,
    especialidade: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medico',
  });
  return Medico;
};
