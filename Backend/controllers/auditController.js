const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");
var mysql = require("mysql");

var connection = mysql.createPool({
  connectionLimit: 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

function auditGenerator(auditData) {
  console.log(auditData);

  connection.query(
    `INSERT INTO audit_trail (user_id,type,status) VALUES ("${auditData.user_id}","${auditData.type}","${auditData.success}")`,
    function (error) {
      if (error) throw error;
    }
  );

  

  // connection.query(
  //   `SELECT email FROM user`,
  //   function (error, results, fields) {
  //     if (error) throw error;

  //     console.log(results);
  //   }
  // );
  // console.log("Audit function");
}

module.exports = auditGenerator;
