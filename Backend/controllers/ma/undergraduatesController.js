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


const getStudents = asyncHandler(async (req, res) => {
  

  // console.log("bye");

  const student = [];

  connection.query(
    "SELECT * FROM student WHERE student.index_no > '22000000'",
    function (error, results, fields) {
      if (error) throw error;
      // console.log("Success");
      res.json(results);
    }
  );
});




module.exports = { getStudents };
