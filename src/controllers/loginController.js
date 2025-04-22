const loginService = require("../services/loginService");

const login = async (req, res) => {
  try {
    const result = await loginService.login(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message,
    });
  }
};

module.exports = { login };
