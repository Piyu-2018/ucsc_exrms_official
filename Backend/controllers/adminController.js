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

module.exports = getLogins;
