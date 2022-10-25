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
 /*  getRecruthinization, */
 /*  getSubSelection,
  getFourthYear, */
} = require("../controllers/assignmentController");

const {
  getExaminationCourses,
  getExaminationQuestion,
  getDistinctIndex,
  getMarksFromIndex,
} = require("../controllers/examinationController");

const { getNewIntake } = require("../controllers/directorNewIntakeController");


const {
  getRegistration,
} = require("../controllers/directorRegistrationController");
const {
  getConfirmation,
} = require("../controllers/directorConfirmLetController");
const {
  getTranscript,
} = require("../controllers/directorTranscriptController");

const { getFourth } = require("../controllers/directorFourthAController");
const { getApprove } = require("../controllers/directorExamApproveController");
// const { getRegistration } = require("../controllers/directorRegistrationController");
const { getRegistrationCR } = require("../controllers/directorRegistrationControllerCR");
// const { getConfirmation } = require("../controllers/directorConfirmLetController");
// const { getTranscript } = require("../controllers/directorTranscriptController");

const { getTimetable } = require("../controllers/timeTableController");
// const { getLogins } = require("../controllers/adminController");

const { getLetterRequest } = require("../controllers/ma/reqLetterController");

const { addCourse } = require("../controllers/ma/addCourseController");
const {

  getLogins,
  getLecActivity,
  getUserLecturer,
  getUserOther,
  deleteUser,
  getUserStu,
} = require("../controllers/adminController");

//   const {getLetterRequest,
// } = require("../controllers/ma/reqLetterController");
const {
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
const {
  addPaymentAction,
} = require("../controllers/ma/paymentController");
// const {
//   sendMail,
// } = require("../controllers/ma/sendMail");

// const getLogins = require("../controllers/adminController");



// const { getRegistration } = require("../controllers/directorRegistrationController");
// const { getTimetable } = require("../controllers/timeTableController");
// >>>>>>> 4d9f36c2bb4fa714cbe64fc0d137d8a4a82a0b03

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);

router.get("/getUndergraduates/:id1/:id2/:id3", getUndergraduates);
router.get("/getNewIntake",getNewIntake );
router.get("/getRegistration/:id1/:id2", getRegistration);


router.get("/getResult/:id1/:id2/:id3/:id4/:id5", getResult);
router.get("/getResult1/:id1/:id2/:id3/:id4/:id5", getResult1);
/* router.get("/getRecruthinization/:id1/:id2/:id3/:id4", getRecruthinization); */
/*
router.get("/getSubSelection/:id1/:id2/:id3/:id4", getSubSelection);
router.get("/getFourthYear/:id1/:id2", getFourthYear); */

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
