const {
  loginService,
  registerService,
  googleAuthService,
} = require("../services/authService");

const register = async (req, res, next) => {
  try {
    const result = await registerService(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await loginService(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const googleAuth = async (req, res, next) => {
  try {
    const result = await googleAuthService(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
  googleAuth,
};
