const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const { login, register, emailCheck } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/emailcheck", emailCheck);

module.exports = router;
