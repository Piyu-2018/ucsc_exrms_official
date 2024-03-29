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

  assignMarkAdd1,

  getPayment,
  getCourseCode,
  getCourseAssign,
} = require("../controllers/assignmentController");

const {
  getExaminationCourses,
  getExaminationQuestion,
  getDistinctIndex,
  getMarksFromIndex,
  getExamTotalMarks,
  getAssignTotalMarks,
  getTotalExam,
  getWeights,
  getQuestionFromCourse,
  getIndexCourse,
  examMarksAdd,
  getLecturer,
  getRescrutinization,
  release,
  updateMarks,
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
const {
  getRegistrationCR,
} = require("../controllers/directorRegistrationControllerCR");
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

// const { getLetterRequest } = require("../controllers/ma/reqLetterController");
const { getCourse } = require("../controllers/ma/addCourseController");

const { getStuAddmDetails } = require("../controllers/ma/admissionController");
const { getStudents } = require("../controllers/ma/undergraduatesController");
const { getCourseReport } = require("../controllers/ma/reportController");
const {
  getAttendanceDetails,
} = require("../controllers/ma/attendanceController");
const { addPaymentAction } = require("../controllers/ma/paymentController");

// const {
//   sendMail,
// } = require("../controllers/ma/sendMail");

// const getLogins = require("../controllers/adminController");

// const { getRegistration } = require("../controllers/directorRegistrationController");
// const { getTimetable } = require("../controllers/timeTableController");

const router = express.Router();

router.get("/getCourses/:id", getCourses);
router.get("/getAssign/:id1/:id2", getAssign);

router.get("/getUndergraduates/:id1/:id2/:id3", getUndergraduates);

router.get("/getFourth/:id1", getFourth);

router.get("/getNewIntake", getNewIntake);
router.get("/getApprove/:id1", getApprove);
router.post("/updateMarks", updateMarks);
router.post("/release/:id", release);

router.get("/getRegistration/:id1/:id2", getRegistration);

router.get("/getResult/:id1/:id2/:id3/:id4/:id5", getResult);
router.get("/getResult1/:id1/:id2/:id3/:id4/:id5", getResult1);
router.get("/getRescrutinization/:id1/:id2/:id3/:id4", getRescrutinization);
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
router.get("/getQuestionFromCourse/:id", getQuestionFromCourse);
router.get("/getIndexCourse/:id", getIndexCourse);
router.post("/examMarksAdd", examMarksAdd);

router.get("getTimetable", getTimetable);

router.get("/getPayment", getPayment);
router.get("/getLetterRequest", getLetterRequest);
router.post("/addCourse", addCourse);

router.get("/getStuAddmDetails", getStuAddmDetails);
router.get("/getStudents", getStudents);
router.get("/getCourse", getCourse);
router.get("/getCourseReport", getCourseReport);
router.get("/getAttendanceDetails", getAttendanceDetails);
router.post("/addPaymentAction", addPaymentAction);
// router.get("/sendMail", sendMail);

// router.get("/getLogins",getLogins)
router.get("/getLogins", getLogins);
router.get("/getLecActivity", getLecActivity);
router.get("/getUserLecturer", getUserLecturer);
router.get("/getUserOther", getUserOther);
router.get("/getUserStu", getUserStu);
router.get("/deleteUser/:id", deleteUser);
router.get("/getLecturer", getLecturer);

router.get("/getExamTotalMarks/:id1/:id2", getExamTotalMarks);
router.get("/getAssignTotalMarks/:id1/:id2", getAssignTotalMarks);
router.get("/getTotalExam/:id1/:id2", getTotalExam);
router.get("/getWeights/:id", getWeights);
router.get("/getCourseCode/:id", getCourseCode);
router.get("/getCourseAssign/:id", getCourseAssign);

router.get("/getPayment", getPayment);
router.get("/getLetterRequest", getLetterRequest);
router.post("/addCourse", addCourse);

router.get("/getStuAddmDetails", getStuAddmDetails);
router.get("/getStudents", getStudents);
router.get("/getCourse", getCourse);
router.get("/getCourseReport", getCourseReport);
router.post("/addPaymentAction", addPaymentAction);

router.get("/getLogins", getLogins);
router.get("/getLecActivity", getLecActivity);
router.get("/getUserLecturer", getUserLecturer);
router.get("/getUserStu", getUserStu);
router.get("/getUserOther", getUserOther);
router.get("/deleteUser/:id", deleteUser);

router.get("/getExamTotalMarks/:id1/:id2", getExamTotalMarks);
router.get("/getAssignTotalMarks/:id1/:id2", getAssignTotalMarks);
router.get("/getTotalExam/:id1/:id2", getTotalExam);
router.get("/getWeights/:id", getWeights);

router.get("/getConfirmation/:id1/:id2", getConfirmation);
router.get("/getTranscript/:id1/:id2", getTranscript);

module.exports = router;
