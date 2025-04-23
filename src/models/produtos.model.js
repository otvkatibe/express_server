class Produto {
    constructor(id, nome, preco, estoque) {
      this.id = id;
      this.nome = nome;
      this.preco = preco;
      this.estoque = estoque;
    }
    
    static validar(produto) {
      if (!produto.nome || !produto.preco || !produto.estoque) {
        throw new Error('Nome, preço e estoque são obrigatórios');
      }
    }
  }
  
  module.exports = Produto;