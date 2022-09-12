const express = require("express");
const { validateToken } = require("../middleware/AuthMiddleware");

// const {getCourses,getAssign,getUndergraduates,assignAdd} = require("../controllers/assignmentController");

const {
  getCourses,
  getAssign,
  assignAdd,
  getUndergraduates,
  assignMarkAdd,
  getResult,
  getResult1,
  getAssignMarks,

} = require("../controllers/assignmentController");

const {
  getNewIntake,
} = require("../controllers/directorNewIntakeController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);

router.get("/getUndergraduates/:id1/:id2/:id3", getUndergraduates);
router.get("/getNewIntake",getNewIntake );

router.get("/getResult/:id1/:id2/:id3/:id4/:id5", getResult);
router.get("/getResult1/:id1/:id2/:id3/:id4/:id5", getResult1);

router.post("/assignAdd", assignAdd);
router.post("/assignMarkAdd",assignMarkAdd);
router.get("/getAssignMarks/:id",getAssignMarks);

module.exports = router;
