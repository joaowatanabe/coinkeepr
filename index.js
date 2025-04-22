const express = require("express");
const pool = require("./src/database/index");
const app = express();

// Rotas
const userRoutes = require("./src/routes/userRoutes");
const loginRoutes = require("./src/routes/loginRoutes");
const meRoutes = require("./src/routes/meRoutes");


require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/users", userRoutes); // POST /users
app.use("/login", loginRoutes); // POST /login
app.use("/me", meRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
