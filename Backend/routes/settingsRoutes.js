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
  getAssignMarks,
  getIndexAssign,
} = require("../controllers/assignmentController");

const {
  getExaminationCourses,
  getExaminationQuestion,
  getDistinctIndex,
  getMarksFromIndex,
  getQuestionFromCourse,
  getIndexCourse,
} = require("../controllers/examinationController");

const { getNewIntake } = require("../controllers/directorNewIntakeController");
const { getTimetable } = require("../controllers/timeTableController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);

router.get("/getUndergraduates/:id1/:id2/:id3", getUndergraduates);
router.get("/getNewIntake", getNewIntake);

router.get("/getResult/:id1/:id2/:id3/:id4/:id5", getResult);
router.get("/getIndexAssign/:id", getIndexAssign);

router.post("/assignAdd", assignAdd);
router.post("/assignMarkAdd", assignMarkAdd);
router.get("/getAssignMarks/:id", getAssignMarks);
router.get("/getExaminationCourses/:id", getExaminationCourses);
router.get("/getExaminationQuestion/:id1/:id2", getExaminationQuestion);
router.get("/getDistinctIndex/:id", getDistinctIndex);
router.get("/getMarksFromIndex/:id1/:id2", getMarksFromIndex);
router.get("/getQuestionFromCourse/:id", getQuestionFromCourse);
router.get("/getIndexCourse/:id", getIndexCourse);

router.get("/getTimetable", getTimetable);

module.exports = router;
