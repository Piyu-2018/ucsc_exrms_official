const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "u117929562_ucscexrms",
});

connection.connect();

const { user, course, lecturer_courses, assignments } = new PrismaClient();

const getCourses = asyncHandler(async (req, res) => {
  const user_id = parseInt(req.params.id);

  console.log("courses")

  const courses = [];

  connection.query("SELECT lecturer_courses.*,course.* FROM user,lecturer_courses,course WHERE user.user_id = lecturer_courses.user_id AND course.course_id = lecturer_courses.course_id AND user.user_id ="+user_id, function (error, results, fields) {
    if (error) throw error;

    res.json(results);
    
  });

  
  

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

module.exports = {getCourses,getAssign};
