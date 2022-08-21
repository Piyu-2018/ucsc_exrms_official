const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "u117929562_ucscexrms",
});

connection.connect();

const { user, course, lecturer_courses, assignments,student } = new PrismaClient();

const getCourses = asyncHandler(async (req, res) => {
  const user_id = parseInt(req.params.id);

  console.log("courses");

  const courses = [];

  connection.query(
    "SELECT lecturer_courses.*,course.* FROM user,lecturer_courses,course WHERE user.user_id = lecturer_courses.user_id AND course.course_id = lecturer_courses.course_id AND user.user_id =" +
      user_id,
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

const getAssign = asyncHandler(async (req, res) => {
  const course_id = parseInt(req.params.id1);
  const user_id = parseInt(req.params.id2);

  // console.log(user_id);

  connection.query(
    "SELECT * FROM assignments WHERE lecturer_id=" +
      user_id +
      " AND course_id=" +
      course_id,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getUndergraduates = asyncHandler (async (req, res) => {
  const ac_year_ID = parseInt(req.params.id1);
  const degree_type = parseInt(req.params.id2);

  // console.log(degree_type);



  const student = [];

  connection.query("SELECT student.*,user.* FROM user,student WHERE user.user_id = student.user_id AND student.ac_year_ID = 1 AND student.ac_year_ID ="+ac_year_ID + " AND student.degree_type =" +degree_type, function (error, results, fields) {
    if (error) throw error;

    res.json(results);

  });

});

module.exports = {getCourses,getAssign,getUndergraduates};
