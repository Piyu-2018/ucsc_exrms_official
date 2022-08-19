const express = require("express");
const { validateToken } = require("../middleware/AuthMiddleware");

const getCourses = require("../controllers/assignmentController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);

module.exports = router;
