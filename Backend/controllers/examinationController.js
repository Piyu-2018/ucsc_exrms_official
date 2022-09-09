const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");


var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "u117929562_ucscexrms",
});

connection.connect();

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

  module.exports = {
    getExaminationCourses
  };