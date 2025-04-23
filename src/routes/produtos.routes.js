const express = require('express');
const ProdutosController = require('../controllers/produtos.controller');

const router = express.Router();

router.get('/', ProdutosController.listarTodos);
router.get('/:id', ProdutosController.buscarPorId);
router.post('/', ProdutosController.criar);
router.put('/:id', ProdutosController.atualizar);
router.patch('/:id', ProdutosController.atualizarParcial);
router.delete('/:id', ProdutosController.deletar);

module.exports = router;