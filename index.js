const express = require('express');
const pool = require('./src/database/index')
const app = express();

const userRoutes = require('./src/routes/userRoutes')

//Carrega variáveis de ambiente do arquivo .env
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
