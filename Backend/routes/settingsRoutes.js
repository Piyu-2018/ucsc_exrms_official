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
} = require("../controllers/examinationController");

const { getNewIntake } = require("../controllers/directorNewIntakeController");
const { getRegistration } = require("../controllers/directorRegistrationController");
const { getConfirmation } = require("../controllers/directorConfirmLetController");
const { getTranscript } = require("../controllers/directorTranscriptController");
const { getTimetable } = require("../controllers/timeTableController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);

router.get("/getUndergraduates/:id1/:id2/:id3", getUndergraduates);
router.get("/getNewIntake",getNewIntake );
router.get("/getRegistration/:id1/:id2", getRegistration);
router.get("/getConfirmation/:id1/:id2", getConfirmation);
router.get("/getTranscript/:id1/:id2", getTranscript);


router.get("/getResult/:id1/:id2/:id3/:id4/:id5", getResult);
router.get("/getIndexAssign/:id", getIndexAssign);

router.post("/assignAdd", assignAdd);
router.post("/assignMarkAdd", assignMarkAdd);
router.get("/getAssignMarks/:id", getAssignMarks);
router.get("/getExaminationCourses/:id", getExaminationCourses);
router.get("/getExaminationQuestion/:id1/:id2", getExaminationQuestion);
router.get("/getDistinctIndex/:id", getDistinctIndex);
router.get("/getMarksFromIndex/:id1/:id2", getMarksFromIndex);

router.get("getTimetable",getTimetable)

module.exports = router;
