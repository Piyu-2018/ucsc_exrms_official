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




module.exports = { addCourse };
