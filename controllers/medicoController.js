const { Medico } = require('../models');

exports.listarMedicos = async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar médicos' });
  }
};

exports.obterMedico = async (req, res) => {
  try {
    const medico = await Medico.findByPk(req.params.id);
    if (!medico) {
      res.status(404).json({ error: 'Médico não encontrado' });
    } else {
      res.json(medico);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter médico' });
  }
};

exports.criarMedico = async (req, res) => {
  try {
    const medico = await Medico.create(req.body);
    res.status(201).json(medico);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar médico' });
  }
};

exports.atualizarMedico = async (req, res) => {
  try {
    const medico = await Medico.findByPk(req.params.id);
    if (!medico) {
      res.status(404).json({ error: 'Médico não encontrado' });
    } else {
      await medico.update(req.body);
      res.json(medico);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar médico' });
  }
};

exports.excluirMedico = async (req, res) => {
  try {
    const medico = await Medico.findByPk(req.params.id);
    if (!medico) {
      res.status(404).json({ error: 'Médico não encontrado' });
    } else {
      await medico.destroy();
      res.json({ message: 'Médico excluído com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir médico' });
  }
};
