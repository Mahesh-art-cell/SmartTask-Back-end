const express = require("express");
const { login, register, googleAuth } = require("../controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/google", googleAuth);

module.exports = router;
