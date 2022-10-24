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
  getIndexAssign,
  getPayment,
} = require("../controllers/assignmentController");

const {
  getExaminationCourses,
  getExaminationQuestion,
  getDistinctIndex,
  getMarksFromIndex,
} = require("../controllers/examinationController");

const { getNewIntake } = require("../controllers/directorNewIntakeController");
const { getRegistration } = require("../controllers/directorRegistrationController");
const { getTimetable } = require("../controllers/timeTableController");
  


const {
  getLetterRequest,
} = require("../controllers/ma/reqLetterController");
const {
  addCourse,
  getCourse,
} = require("../controllers/ma/addCourseController");
const {
  getStuAddmDetails,
} = require("../controllers/ma/admissionController");
const {
  getStudents,
} = require("../controllers/ma/undergraduatesController");
const {
  getCourseReport,
} = require("../controllers/ma/reportController");
// const {
//   sendMail,
// } = require("../controllers/ma/sendMail");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);

router.get("/getUndergraduates/:id1/:id2/:id3", getUndergraduates);
router.get("/getNewIntake",getNewIntake );
router.get("/getRegistration/:id1/:id2", getRegistration);


router.get("/getResult/:id1/:id2/:id3/:id4/:id5", getResult);

router.get("/getResult1/:id1/:id2/:id3/:id4/:id5", getResult1);

router.get("/getIndexAssign/:id", getIndexAssign);


router.post("/assignAdd", assignAdd);
router.post("/assignMarkAdd", assignMarkAdd);
router.get("/getAssignMarks/:id", getAssignMarks);
router.get("/getExaminationCourses/:id", getExaminationCourses);
router.get("/getExaminationQuestion/:id1/:id2", getExaminationQuestion);
router.get("/getDistinctIndex/:id", getDistinctIndex);
router.get("/getMarksFromIndex/:id1/:id2", getMarksFromIndex);

router.get("getTimetable",getTimetable)

router.get("/getPayment", getPayment);
router.get("/getLetterRequest", getLetterRequest);
router.post("/addCourse", addCourse);
router.get("/getStuAddmDetails", getStuAddmDetails);
router.get("/getStudents", getStudents);
router.get("/getCourse", getCourse);
router.get("/getCourseReport", getCourseReport);
// router.get("/sendMail", sendMail);

module.exports = router;
