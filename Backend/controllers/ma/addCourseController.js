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

const { user, course, lecturer_courses, assignments, student } =
  new PrismaClient();


const addCourse = asyncHandler(async (req, res) => {
    const data = req.body;
    console.log(data.dataCourse);
    data.dataCourse.map((row) =>
    connection.query(
      `INSERT INTO course(course_name) VALUES ("${row.course}")`,
      function (error, results, fields) {
        if (error) throw error;
  
        res.json(results);
      })
    
    )
    
  });




module.exports = { addCourse };
