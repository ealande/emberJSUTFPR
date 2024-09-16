const express = require('express');
const router = express.Router();

const controlerCliente = require('./controller-cliente')();

router.get('/', controlerCliente.listar);
router.get('/:id', controlerCliente.buscarPorId);
router.post('/', controlerCliente.salvar);
router.delete('/', controlerCliente.excluir);

module.exports = router;

