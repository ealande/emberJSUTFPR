const express = require('express');
const router = express.Router();

const controllerProduto = require('./controller-produto.js')();

router.get('/', controllerProduto.listar);
router.get('/:id', controllerProduto.buscarPorId);
router.post('/', controllerProduto.salvar);
router.delete('/:id', controllerProduto.excluir);

module.exports = router;


