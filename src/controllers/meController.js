const pool = require("../database/index");
const me = async (req, res) => {
  try {
    // As info de usuário vem do middleware
    const { id } = req.user;

    // Buscar o usuário no bando de dados
    const { rows } = await pool.query(
      "SELECT id, name, email FROM users WHERE id = $1",
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // retorna o usuario
    return res.status(200).json({ user: rows[0] });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar dados do usuário" });
  }
};

module.exports = { me };
