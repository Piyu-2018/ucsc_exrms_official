const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

var mysql = require("mysql");
var connection = mysql.createPool({
  connectionLimit: 10,
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

const getLogins = asyncHandler(async (req, res) => {
  connection.query(
    `SELECT audit_trail.*,user.user_name,user.f_name,user.l_name FROM audit_trail,user WHERE audit_trail.user_id = user.user_id AND type = "Log in"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getLecActivity = asyncHandler(async (req, res) => {
  connection.query(
    `SELECT audit_trail.*,user.user_name,user.f_name,user.l_name FROM audit_trail,user WHERE audit_trail.user_id = user.user_id AND user.user_type = "lecturer"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getUserLecturer = asyncHandler(async (req, res) => {
  connection.query(
    `SELECT user_name,email,f_name,l_name FROM user WHERE user_type = "lecturer"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getUserStu = asyncHandler(async (req, res) => {
  connection.query(
    `SELECT user_name,email,f_name,l_name FROM user WHERE user_type = "student"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const getUserOther = asyncHandler(async (req, res) => {
  connection.query(
    `SELECT user_name,email,f_name,l_name FROM user WHERE user_type = "ma" OR user_type="director" OR user_type = "sar" OR user_type = "hox"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

const deleteUser = asyncHandler(async (req, res) => {
  const user_name = req.params.id;
  connection.query(
    `DELETE from user WHERE user_name = "${user_name}"`,
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});

module.exports = {
  getLogins,
  getLecActivity,
  getUserLecturer,
  getUserOther,
  deleteUser,
  getUserStu,
};
