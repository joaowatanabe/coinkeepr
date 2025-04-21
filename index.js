const express = require('express');
const pool = require('./src/database')
const app = express();

//Carrega variáveis de ambiente do arquivo .env
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(express.json());


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
