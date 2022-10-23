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

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "sql238.main-hosting.eu",
//   user: "u117929562_ucscExrmsUser",
//   password: "lT:@>w0y4",
//   database: "u117929562_ucscEXRMS",
// });

connection.connect();

const { user, course, lecturer_courses, assignments, student } =
  new PrismaClient();


const getStuAddmDetails = asyncHandler(async (req, res) => {
  

  // console.log(degree_type);

  const student = [];

  connection.query(
    "SELECT index_no, reg_no, user_id FROM student WHERE index_no > 22000000",
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});




module.exports = { getStuAddmDetails };
