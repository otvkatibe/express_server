const ProdutosService = require('../services/produtos.service');

class ProdutosController {
  static async listarTodos(req, res, next) {
    try {
      const produtos = ProdutosService.listarTodos();
      res.json(produtos);
    } catch (error) {
      next(error);
    }
  }

  static async buscarPorId(req, res, next) {
    try {
      const produto = ProdutosService.buscarPorId(parseInt(req.params.id));
      res.json(produto);
    } catch (error) {
      next(error);
    }
  }

  static async criar(req, res, next) {
    try {
      const novoProduto = ProdutosService.criar(req.body);
      res.status(201).json(novoProduto);
    } catch (error) {
      next(error);
    }
  }

  static async atualizar(req, res, next) {
    try {
      const produtoAtualizado = ProdutosService.atualizar(
        parseInt(req.params.id),
        req.body
      );
      res.json(produtoAtualizado);
    } catch (error) {
      next(error);
    }
  }

  static async atualizarParcial(req, res, next) {
    try {
      const produtoAtualizado = ProdutosService.atualizarParcial(
        parseInt(req.params.id),
        req.body
      );
      res.json(produtoAtualizado);
    } catch (error) {
      next(error);
    }
  }

  static async deletar(req, res, next) {
    try {
      ProdutosService.deletar(parseInt(req.params.id));
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProdutosController;