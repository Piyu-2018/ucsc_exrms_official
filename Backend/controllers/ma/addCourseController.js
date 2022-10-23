const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

connection.connect();

const { user, course, lecturer_courses, assignments, student } =
  new PrismaClient();


const addCourse = asyncHandler(async (req, res) => {
    const data = req.body;
    // console.log("addcourse");
    // console.log(data);
    
    connection.query(
      `INSERT INTO course(course_name,course_code,lecture_name,instructor) VALUES ("${data.course}","${data.code}","${data.lecturer}","${data.instructor}")`,
      function (error, results, fields) {
        if (error) throw error;
        // console.log("Success");
  
        
      })
    
  
    
  });

  const getCourse = asyncHandler(async (req, res) => {
  

    // console.log(degree_type);
  
    const student = [];
  
    connection.query(
      "SELECT course_code, course_name, credit, lecture_name, instructor FROM course WHERE ac_year_ID = 2022",
      function (error, results, fields) {
        if (error) throw error;
  
        res.json(results);
      }
    );
  });




module.exports = { addCourse,getCourse };
