const express = require("express");
const { validateToken } = require("../middleware/AuthMiddleware");

const {getCourses,getAssign,assignAdd} = require("../controllers/assignmentController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);
router.post("/assignAdd",assignAdd);

module.exports = router;
