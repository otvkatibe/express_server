require('dotenv').config();
import express, { json } from 'express';
import cors from 'cors';
import produtosRoutes from './src/routes/produtos.routes';
import errorHandler from './src/middlewares/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.use('/api/produtos', produtosRoutes);

app.get('/', (req, res) => {
  res.send('API de Produtos - CRUD Completo');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;