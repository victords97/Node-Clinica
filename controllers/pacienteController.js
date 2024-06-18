const { Paciente, Consulta } = require('../models');

exports.listarPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    console.error('Erro ao listar pacientes:', error);
    res.status(500).json({ error: 'Erro ao listar pacientes' });
  }
};

exports.obterPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    res.json(paciente);
  } catch (error) {
    console.error('Erro ao obter paciente:', error);
    res.status(500).json({ error: 'Erro ao obter paciente' });
  }
};

exports.criarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.create(req.body);
    res.status(201).json(paciente);
  } catch (error) {
    console.error('Erro ao criar paciente:', error);
    res.status(500).json({ error: 'Erro ao criar paciente' });
  }
};

exports.atualizarPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.id);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }
    await paciente.update(req.body);
    res.json(paciente);
  } catch (error) {
    console.error('Erro ao atualizar paciente:', error);
    res.status(500).json({ error: 'Erro ao atualizar paciente' });
  }
};

exports.excluirPaciente = async (req, res) => {
    try {
      const paciente = await Paciente.findByPk(req.params.id);
      if (!paciente) {
        return res.status(404).json({ error: 'Paciente não encontrado' });
      }
  
      // Excluir todas as consultas associadas ao paciente
      await Consulta.destroy({
        where: {
          pacienteId: paciente.id
        }
      });
  
      // Agora podemos excluir o paciente
      await paciente.destroy();
  
      res.json({ message: 'Paciente excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir paciente:', error);
      res.status(500).json({ error: 'Erro ao excluir paciente' });
    }
  };