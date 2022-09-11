const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "u117929562_ucscexrms",
});

connection.connect();

const getTimetable = asyncHandler(async (req, res) => {
  
    
    
    connection.query(
      `SELECT exam_start,exam_end,course_code,course_name FROM exam_timetable`,
      function (error, results, fields) {
        if (error) throw error;
      //console.log(results);
        res.json(results);
      }
    );
  
  });

module.exports = {
    getTimetable,
}; 