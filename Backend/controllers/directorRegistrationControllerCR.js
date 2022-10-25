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
// var connection = mysql.createConnection({
//   host: "sql238.main-hosting.eu",
//   user: "u117929562_ucscExrmsUser",
//   password: "lT:@>w0y4",
//   database: "u117929562_ucscEXRMS",
// });
// connection.connect();
var connection = mysql.createPool({
  connectionLimit: 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

const getRegistrationCR = asyncHandler(async (req, res) => {

    const acYear = (req.params.id1);
    const cuYear = (req.params.id2);

    console.log(req.params);
  
    const student = [];
    console.log("GetregistrationCR");
  

    // connection.query(
  
    //   "SELECT academic_year.* FROM academic_year WHERE academic_year.aca_year ="+'"'+
    //   acYear+'"'+ "AND academic_year.current_year =" +'"'+
    //   cuYear +'"',

    //   function (error, results, fields) {
    //     if (error) throw error;
  
    //     res.json(results);
    //   }
    // );

    connection.query(
  
      `SELECT COUNT(academic_year.ma_pa_status) AS countR FROM academic_year WHERE academic_year.ma_pa_status="approved"`,

      function (error, results, fields) {
        if (error) throw error;
        console.log(results);
  
        res.json(results);
      }
    );

    // connection.query(
  
    //   "SELECT COUNT(academic_year.ma_pa_status) AS countN FROM academic_year WHERE academic_year.ma_pa_status="+'"'+notApproved+'"',

    //   function (error, results, fields) {
    //     if (error) throw error;
  
    //     res.json(results);
    //   }
    // );
  });

  module.exports = {getRegistrationCR};