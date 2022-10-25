const { PrismaClient } = require("@prisma/client");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");

// const { user, course, lecturer_courses, assignments } = new prismaClient();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "sql238.main-hosting.eu",
  user: "u117929562_ucscExrmsUser",
  password: "lT:@>w0y4",
  database: "u117929562_ucscEXRMS",
});

connection.connect();

const { user, course, lecturer_courses, assignments, student } =
  new PrismaClient();


const addPaymentAction = asyncHandler(async (req, res) => {
    const data = req.body;
    // console.log("addcourse");
    console.log(data);
    
    connection.query(
      `UPDATE payment SET status = '${data.action}' WHERE payment.payment_id='${data.paymentId}' `,
      function (error, results, fields) {
        if (error) throw error;
        // console.log("Success");
  
        
      })
    
  
    
  });

module.exports = { addPaymentAction };
