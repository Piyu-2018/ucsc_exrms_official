const express = require("express");
const { validateToken } = require("../middleware/AuthMiddleware");

const {getCourses,getAssign} = require("../controllers/assignmentController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);

module.exports = router;
