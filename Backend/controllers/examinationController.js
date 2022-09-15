const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "u117929562_ucscexrms",
// });

// connection.connect();

var connection = mysql.createPool({
  connectionLimit : 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

const getExaminationCourses = asyncHandler(async (req, res) => {
  const lecturer_id = parseInt(req.params.id);

  console.log("courses");

  const courses = [];

  connection.query(
    `SELECT DISTINCT course.*,course_exam_question.lecturer_id_for_first_marking,course_exam_question.lecturer_id_for_second_marking from course_exam_question, course WHERE course.course_id = course_exam_question.course_id AND lecturer_id_for_first_marking = "${lecturer_id}" OR lecturer_id_for_second_marking = "${lecturer_id}"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );

  // const courses = await findMany({
  //     where: {
  //         course_id : course.course_id
  //     }
  // })
});

const getExaminationQuestion = asyncHandler(async (req, res) => {
  const lecturer_id = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id2);

  
  
  connection.query(
    `SELECT DISTINCT course_exam_question.question_number,course_exam_question.question_id,course_exam_question.contribution from course_exam_question, course WHERE course.course_id = course_exam_question.course_id AND course_exam_question.course_id = ${course_id} AND lecturer_id_for_first_marking = "${lecturer_id}" OR lecturer_id_for_second_marking = "${lecturer_id}"`,
    function (error, results, fields) {
      if (error) throw error;
    //console.log(results);
      res.json(results);
    }
  );

});

const getDistinctIndex = asyncHandler(async (req, res) => {
  // const  = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id);

  
  
  connection.query(
    `SELECT DISTINCT marks.index_number FROM marks,course_exam_question WHERE course_exam_question.question_id = marks.question_id AND course_exam_question.course_id = ${course_id}`,
    function (error, results, fields) {
      if (error) throw error;
    //console.log(results);
      res.json(results);
    }
  );

});


const getMarksFromIndex = asyncHandler(async (req, res) => {
  // const  = parseInt(req.params.id1);
  const course_id = parseInt(req.params.id1);
  const index_number = parseInt(req.params.id2);


  
  
  connection.query(
    `SELECT marks.* FROM marks,course_exam_question WHERE marks.question_id = course_exam_question.question_id AND marks.index_number = ${index_number} AND course_exam_question.course_id = ${course_id}`,
    function (error, results, fields) {
      if (error) throw error;
    //console.log(results);
      res.json(results);
    }
  );

});


module.exports = {
  getExaminationCourses,
  getExaminationQuestion,
  getDistinctIndex,
  getMarksFromIndex,
};
