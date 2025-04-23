function errorHandler(err, req, res, next) {
    console.error(err.stack);
    
    if (err.message === 'Produto não encontrado') {
      return res.status(404).json({ mensagem: err.message });
    }
    
    if (err.message === 'Nome, preço e estoque são obrigatórios') {
      return res.status(400).json({ mensagem: err.message });
    }
    
    res.status(500).json({ mensagem: 'Erro interno no servidor' });
  }
  
  module.exports = errorHandler;