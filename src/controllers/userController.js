const userService = require('../services/userService')

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await userService.createUser({ name, email, password });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  registerUser,
};