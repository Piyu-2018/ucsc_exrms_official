const express = require("express");

const { validateToken } = require("../middleware/AuthMiddleware");

// import controllers
const { login, register,usernameCheck } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
// router.post("/loginme", login1); 
router.post("/register", register);
router.post("/usernameCheck",usernameCheck);
// router.post("/registerme", register1);
// router.post("/emailcheck", emailCheck);

module.exports = router;
