const bcrypt = require("bcrypt");
const pool = require("../database/index");

const createUser = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error("Todos");
  }

  const emailCheck = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  if (emailCheck.rowCount > 0) {
    throw new Error("E-mail já cadastrado.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email`,
    [name, email, hashedPassword]
  );

  return result.rows[0];
};

module.exports = {
  createUser,
};
