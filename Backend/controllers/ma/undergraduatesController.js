const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "u117929562_ucscexrms",
// });
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


const getStudents = asyncHandler(async (req, res) => {

  const student = [];

  connection.query(
    "SELECT * FROM student,user WHERE student.index_no > '22000000' AND user.user_id = student.user_id",
    function (error, results, fields) {
      if (error) throw error;
      // console.log("Success");
      res.json(results);
    }
  );
}); 




module.exports = { getStudents };
