const { produtos } = require('../database/memoryDB').default;
const Produto = require('../models/produtos.model');

class ProdutosService {
  static listarTodos() {
    return produtos;
  }

  static buscarPorId(id) {
    const produto = produtos.find(p => p.id === id);
    if (!produto) throw new Error('Produto não encontrado');
    return produto;
  }

  static criar(dados) {
    Produto.validar(dados);
    
    const novoProduto = new Produto(
      produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1,
      dados.nome,
      parseFloat(dados.preco),
      parseInt(dados.estoque)
    );
    
    produtos.push(novoProduto);
    return novoProduto;
  }

  static atualizar(id, dados) {
    Produto.validar(dados);
    
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Produto não encontrado');
    
    const produtoAtualizado = new Produto(
      id,
      dados.nome,
      parseFloat(dados.preco),
      parseInt(dados.estoque)
    );
    
    produtos[index] = produtoAtualizado;
    return produtoAtualizado;
  }

  static atualizarParcial(id, dados) {
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Produto não encontrado');
    
    const produto = produtos[index];
    
    if (dados.nome !== undefined) produto.nome = dados.nome;
    if (dados.preco !== undefined) produto.preco = parseFloat(dados.preco);
    if (dados.estoque !== undefined) produto.estoque = parseInt(dados.estoque);
    
    return produto;
  }

  static deletar(id) {
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Produto não encontrado');
    
    produtos.splice(index, 1);
  }
}

module.exports = ProdutosService;