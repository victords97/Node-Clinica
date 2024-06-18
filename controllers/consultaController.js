const { Consulta } = require('../models');

exports.listarConsultas = async (req, res) => {
  try {
    const consultas = await Consulta.findAll();
    res.json(consultas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar consultas' });
  }
};

exports.obterConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findByPk(req.params.id);
    if (!consulta) {
      res.status(404).json({ error: 'Consulta não encontrada' });
    } else {
      res.json(consulta);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter consulta' });
  }
};

exports.criarConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.create(req.body);
    res.status(201).json(consulta);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar consulta' });
  }
};

exports.atualizarConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findByPk(req.params.id);
    if (!consulta) {
      res.status(404).json({ error: 'Consulta não encontrada' });
    } else {
      await consulta.update(req.body);
      res.json(consulta);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar consulta' });
  }
};

exports.excluirConsulta = async (req, res) => {
  try {
    const consulta = await Consulta.findByPk(req.params.id);
    if (!consulta) {
      res.status(404).json({ error: 'Consulta não encontrada' });
    } else {
      await consulta.destroy();
      res.json({ message: 'Consulta excluída com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir consulta' });
  }
};
