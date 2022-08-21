const express = require("express");
const { validateToken } = require("../middleware/AuthMiddleware");

const {getCourses,getAssign,getUndergraduates} = require("../controllers/assignmentController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);
router.get("/getUndergraduates/:id1/:id2", getUndergraduates);

module.exports = router;
