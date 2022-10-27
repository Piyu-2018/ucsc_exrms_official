const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
var connection = mysql.createPool({
  connectionLimit: 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

// const { user, course, lecturer_courses, assignments, student } =
//   new PrismaClient();

const addCourse = asyncHandler(async (req, res) => {
  const data = req.body;
  // console.log("addcourse");
  // console.log(data);

  connection.query(
    `INSERT INTO course(course_name,course_code,lecture_name,credit,weight_for_exam,weight_for_assignment) VALUES ("${data.course}","${data.code}","${data.lecturer}","${data.credit}","${data.exam_weight}","${data.assign_weight}")`,
    function (error, results, fields) {
      if (error) throw error;
      // console.log("Success");
      connection.query(
        `SELECT course_id from course WHERE course_code = "${data.code}"`,
        function (error, results, fields) {
          if (error) throw error;

          console.log(results[0].course_id);
          connection.query(
            `INSERT INTO lecturer_courses(user_id,course_id) VALUES (${data.lecturer},${results[0].course_id})`,
            function (error, results, fields) {
              if (error) throw error;
            }
          );
        }
      );
    }
  );
});

const getCourse = asyncHandler(async (req, res) => {
  // console.log(degree_type);

  const student = [];

  connection.query(
    "SELECT * FROM course WHERE ac_year_ID = 2022 AND year = 1",
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

module.exports = { addCourse, getCourse };
