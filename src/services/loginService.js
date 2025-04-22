const pool = require("../database/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw { status: 400, message: "Email e senha são obrigatórios." };
  }

  const { rows, rowCount } = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  if (rowCount === 0) {
    throw { status: 400, message: "Email ou senha inválidos" };
  }

  const user = rows[0];

  const senhaValida = await bcrypt.compare(password, user.password);

  if (!senhaValida) {
    throw { status: 400, message: "Email ou senha inválidos" };
  }

  const token = jwt.sign(
    { id: user.id, nome: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );

  delete user.password;

  return { user, token };
};

module.exports = { login };
