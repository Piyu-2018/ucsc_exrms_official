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
var connection = mysql.createPool({
  connectionLimit: 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

const getApprove = asyncHandler(async (req, res) => {
 
  const approve = req.params.id1;
  
//   const cuYear = req.params.id2;

  const student = [];

  connection.query(
    `INSERT INTO exam_mark (director_status) VALUES ("${approve}") WHERE mark_id=1`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

module.exports = { getApprove };

