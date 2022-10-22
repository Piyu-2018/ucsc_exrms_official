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

function auditGenerator () {
  console.log("Audit function");
};

module.exports = auditGenerator;
