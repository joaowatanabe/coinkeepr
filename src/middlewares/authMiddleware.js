const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // precisa pegar o token da req, bearer
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token não forneceido." });
  }

  try {
    const decoded = jwt.verify(token.process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado." });
  }
};

module.exports = authMiddleware;
