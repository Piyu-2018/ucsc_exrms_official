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


const getLetterRequest = asyncHandler(async (req, res) => {
  

  // console.log(degree_type);

  const student = [];

  connection.query(
    "SELECT * FROM letter,payment WHERE letter.payment_id = payment.payment_id",
    function (error, results, fields) {
      if (error) throw error;

      res.json(results);
    }
  );
});




module.exports = { getLetterRequest};
