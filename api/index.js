const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Express funcionando!');
});

app.get('/api/saudacao', (req, res) => {
  const nome = req.query.nome || 'Visitante';
  res.json({ mensagem: `Olá, ${nome}!` });
});

app.post('/api/usuarios', (req, res) => {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
  }
  res.status(201).json({ 
    mensagem: 'Usuário criado com sucesso',
    usuario: { nome, email }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});