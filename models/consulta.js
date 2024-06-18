const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    static associate(models) {
      Consulta.belongsTo(models.Paciente, { foreignKey: 'pacienteId', onDelete: 'CASCADE' });
      Consulta.belongsTo(models.Medico, { foreignKey: 'medicoId' });
    }
  }
  Consulta.init({
    data: DataTypes.DATE,
    descricao: DataTypes.STRING,
    pacienteId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Pacientes',
        key: 'id'
      },
      onDelete: 'CASCADE' // Adicionando onDelete: 'CASCADE'
    },
    medicoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Medicos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Consulta',
  });
  return Consulta;
};
