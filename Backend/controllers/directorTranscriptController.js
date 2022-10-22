// cd
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

// connection.connect();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});
connection.connect();

const getTranscript = asyncHandler(async (req, res) => {

    const acYear = (req.params.id1);
    const cuYear = (req.params.id2);
  
    const student = [];
  
    connection.query(
  
      "SELECT letter.* FROM letter WHERE letter.aca_year ="+'"'+
      acYear+'"'+ "AND letter.study_year =" +'"'+
      cuYear +'"'+"AND letter.letter_type ="+'"'+"transcript"+'"',
      function (error, results, fields) {
        if (error) throw error;
  
        res.json(results);
      }
    );
  });

  module.exports = {getTranscript};