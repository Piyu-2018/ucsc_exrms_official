// const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "u117929562_ucscexrms",
// });

var mysql = require("mysql");
//var connection = mysql.createConnection({ 
// var connection = mysql.createConnection({
//   host: "sql238.main-hosting.eu",
//   user: "u117929562_ucscExrmsUser",
//   password: "lT:@>w0y4",
//   database: "u117929562_ucscEXRMS",
// });
// connection.connect();

var connection = mysql.createPool({
  connectionLimit : 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

const getNewIntake = asyncHandler(async (req, res) => {
  
    connection.query(
      "SELECT academic_year.* FROM academic_year WHERE academic_year.aca_year ="+'"'+ "Academic Year - 2022-2023"+'"'+ "AND academic_year.current_year ="+'"'+ "First Year"+'"',
      function (error, results, fields) {
        if (error) throw error;
  
        res.json(results);
      }
    );
  });

  module.exports = { getNewIntake};
