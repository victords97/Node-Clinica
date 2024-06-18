const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultaController');

router.get('/consultas', consultaController.listarConsultas);
router.get('/consultas/:id', consultaController.obterConsulta);
router.post('/consultas', consultaController.criarConsulta);
router.put('/consultas/:id', consultaController.atualizarConsulta);
router.delete('/consultas/:id', consultaController.excluirConsulta);

module.exports = router;
