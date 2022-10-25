// const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

// const { user } = new PrismaClient();

const { generateOtp, otpEmail } = require("./helpers/authControllerHelper");


const auditGenerator = require("./auditController");

// var mysql = require("mysql");
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "u117929562_ucscexrms",
// });

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


const login = asyncHandler(async (req, res) => {
  console.log("Login using mysql");

  const { user_name, password } = req.body;
  console.log(user_name);

  var exist = false;

  connection.query(
    `SELECT DISTINCT * FROM user WHERE user_name="${user_name}"`,
    function (error, results) {
      if (error) {
        return console.log("Error");
      } else if (results.length == 0) {
        res.json({
          error: {
            user_name: "Username Doesn't exist",
            password: "",
          },
        });
      } else {
        console.log(results[0].password);

        bycrypt.compare(password, results[0].password).then((match) => {
          console.log(password);
          if (match) {
            console.log("Hi");
            const accessToken = sign(
              {
                email: results[0].email,
                user_id: results[0].user_id,
              },
              "exrms2002"
            );

            let auditData = {
              user_id: results[0].user_id,
              type: "Log in",
              success: "success",
            };

            auditGenerator(auditData);

            let returnData = {
              user_id: results[0].user_id,
              f_name: results[0].f_name,
              l_name: results[0].l_name,
              email: results[0].email,
              user_type: results[0].user_type,
              user_name: results[0].user_name,
              accessToken: accessToken,
            };
            res.json(returnData);
          } else {
            res.json({
              error: {
                user_name: "",
                passoword: "Wrong Passord entered",
              },
            });
          }
        });
      }
    }
  );
});

// const login = asyncHandler(async (req, res) => {
//   console.log("Login");
//   const { user_name, password } = req.body;
//   // console.log(req.body);

//   const existUser = await user.findUnique({
//     where: {
//       user_name: user_name,
//     },
//   });

//   console.log("existuser");

//   if (existUser) {
//     bycrypt.compare(password, existUser.password).then((match) => {
//       console.log(password);
//       console.log(existUser.password);
//       if (match) {
//         console.log("Hi");
//         const accessToken = sign(
//           {
//             email: existUser.email,
//             user_id: existUser.user_id,
//           },
//           process.env.JWT_SECRET
//         );

//         let returnData = {
//           user_id: existUser.user_id,
//           f_name: existUser.f_name,
//           l_name: existUser.l_name,
//           email: existUser.email,
//           user_type: existUser.user_type,
//           user_name: existUser.user_name,
//           accessToken: accessToken,
//         };

//         res.json(returnData);
//       } else {
//         res.json({
//           error: {
//             user_name: "",
//             passoword: "Wrong Passord entered",
//           },
//         });
//       }
//     });
//   } else {
//     res.json({
//       error: {
//         user_name: "Username Doesn't exist",
//         password: "",
//       },
//     });
//   }
// });

const register = asyncHandler(async (req, res) => {
  const { user_name, user_type, f_name, l_name, password, email } = req.body;

  connection.query(
    `SELECT DISTINCT * FROM user WHERE user_name="${user_name}" OR email="${email}"`,
    function (error, results, fields) {
      if (error) throw error;

      if (results.length != 0) {
        res.json({ error: "Email already exist please login " });
      } else {
        bycrypt.hash(password, 10).then(async (hash) => {
          connection.query(
            `INSERT INTO user (user_name,password,email,user_type,f_name,l_name) VALUES ("${user_name}","${hash}","${email}","${user_type}","${f_name}","${l_name}")`,
            function (error) {
              if (error) throw error;

              const accessToken = sign(
                { email: email, user_name: user_name },
                process.env.JWT_SECRET
              );

              const returnData = {
                user_type: user_type,
                f_name: f_name,
                l_name: l_name,
                email: email,
                emailStatus: false,
                user_name: user_name,
                accessToken: accessToken,
              };

              res.status(StatusCodes.CREATED).json(returnData);
            }
          );
        });
      }
    }
  );
});

// const register = asyncHandler(async (req, res) => {
//   const { user_name, user_type, f_name, l_name, password, email } = req.body;

//   // console.log(req.body);

//   const emailStatus = await user.findFirst({
//     where: {
//       OR: [
//         {
//           email,
//         },
//         {
//           user_name,
//         },
//       ],
//     },
//   });

//   // console.log(emailStatus);

//   // return 0;

//   // const emailStatus = false;

//   console.log("Hi");

//   if (emailStatus) {
//     res.json({ error: "Email Already Registered! Please Login" });
//   } else {
//     bycrypt.hash(password, 10).then(async (hash) => {
//       const newUser = await user.create({
//         data: {
//           user_name,
//           user_type,
//           f_name,
//           l_name,
//           password: hash,
//           email,
//         },
//       });

//       const accessToken = sign(
//         { email: newUser.email, user_name: newUser.user_name },
//         process.env.JWT_SECRET
//       );

//       const returnData = {
//         user_type: newUser.user_type,
//         f_name: newUser.f_name,
//         l_name: newUser.l_name,
//         email: newUser.email,
//         emailStatus: newUser.emailStatus,
//         user_name: newUser.user_name,
//         accessToken: accessToken,
//       };

//       res.status(StatusCodes.CREATED).json(returnData);
//     });
//   }
// });

const emailCheck = asyncHandler(async (req, res) => {
  const { email } = req.body;

  connection.query(
    `SELECT email FROM user WHERE email=${email}`,
    function (error, results, fields) {
      if (error) throw error;

      if (results.length == 0) {
        res.json({ isUnique: true });
      } else {
        res.json({ isUnique: false });
      }
    }
  );
});

const logOut = asyncHandler(async (req, res) => {
  const user_id = parseInt(req.params.id);
  console.log("Logout");

  let auditData = {
    user_id: user_id,
    type: "Log Out",
    success: "Success",
  };

  auditGenerator(auditData);
});

// const emailCheck = asyncHandler(async (req, res) => {
//   const { email } = req.body;

//   const emailStatus = await user.findUnique({
//     where: {
//       email,
//     },
//   });

//   if (emailStatus) {
//     res.json({ isUnique: false });
//   } else {
//     res.json({ isUnique: true });
//   }
// });

const usernameCheck = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { user_name } = req.body;

  connection.query(
    `SELECT email FROM user WHERE user_name="${user_name}" OR email="${user_name}"`,
    function (error, results, fields) {
      if (error) throw error;

      if (results.length == 0) {
        res.json({ isUnique: true });
      } else {
        res.json({ isUnique: false });
      }
    }
  );
});

const usernamePasswordCheck = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { user_name, password } = req.body;

  bycrypt.hash(password, 10).then(async (hash) => {
    await connection.query(
      `SELECT password FROM user WHERE (user_name="${user_name}" OR email="${user_name}")`,
      function (error, results, fields) {
        if (error) throw error;

        if (results.length == 0) {
          res.json({ isUnique: true });
        } else {
          console.log("Hi from here");
          bycrypt.compare(password, results[0].password).then((match) => {
            if (match) {
              console.log("password fine");
              res.json({ isUnique: false });
            } else {
              res.json({ isUnique: true });
            }
          });
        }
      }
    );
  });
});

// const usernameCheck = asyncHandler(async (req, res) => {
//   const { user_name } = req.body;

//   const existUser = await user.findFirst({
//     where: {
//       OR: [
//         {
//           user_name,
//         },
//       ],
//     },
//   });

//   if (existUser) {
//     res.json({ isExist: true });
//   } else {
//     res.json({ isExist: false });
//   }
// });

const forgotPasswordOtp = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { user_name } = req.body;
  console.log(user_name);

  const numList = [
    Math.floor(Math.random() * 10 + 1),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  const otp = (
    numList[0] * 10000 +
    numList[1] * 1000 +
    numList[2] * 100 +
    numList[3] * 10 +
    numList[4]
  ).toString();

  console.log(otp);

  const status = connection.query(
    `UPDATE user SET forgotPasswordOtp=${otp} WHERE user_name="${user_name}" OR email="${user_name}"`,
    function (err) {
      if (err) throw err;
      // res.json(results);
    }
  );

  // const status = await user.updateMany({
  //   where: {
  //     OR: [
  //       {
  //         user_name: user_name,
  //       },
  //     ],
  //   },

  //   data: {
  //     forgotPasswordOtp: otp,
  //   },
  // });

  connection.query(
    `SELECT * FROM user WHERE user_name="${user_name}"`,
    function (err, results) {
      if (err) throw err;

      const htmlEmail = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="http://localhost:3000/login" style="cursor: pointer;font-size:1.4em;color: #8427e2;text-decoration:none;font-weight:600">UCSC EXRMS</a>
        </div>
        <p style="font-size:1.1em">Hi ${results[0].f_name},</p>
        <p>Use the following OTP to complete your Password Reset procedures. </p>
        <h2 style="background: #8427e2;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
        <p style="font-size:0.9em;">Regards,<br />UCSC EXRMS</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>UCSC EXRMS</p>
          <p>UCSC Building Complex</p>
          <p>35 Reid Ave</p>
          <p>Colombo 00700</p>
        </div>
      </div>
    </div>`;

      const transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: "dinilr123@gmail.com",
          pass: "jjzkyvqgqrcdzqxq",
        },
      });

      // const transporter = nodemailer.createTransport({
      //   service: "gmail",

      //   auth: {
      //     user: "dinilr123@gmail.com",
      //     pass: "#Indexnumber99",
      //   },
      // });

      const mailOptions = {
        from: "dinilr123@gmail.com",
        to: "dinilsratnayake@gmail.com",
        replyTo: "dinilsratnayake@gmail.com",
        subject: "Password Reset - UCSC EXRMS",
        html: htmlEmail,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("error in sending mail", err);
          return res.status(400).json({
            message: `error in sending the mail${err}`,
          });
        } else {
          return res.json({ message: "Email Sent Successfully! " });
        }
      });
    }
  );

  // const existUser = await user.findFirst({
  //   where: {
  //     OR: [
  //       {
  //         user_name: user_name,
  //       },
  //     ],
  //   },
  // });

  // const htmlEmail = otpEmail(existUser.f_name, otp);

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",

  //   auth: {
  //     user: "exrmsofficial@gmail.com",
  //     pass: "$exrms99official#01",
  //   },
  // });

  // const mailOptions = {
  //   from: "exrmsofficial@gmail.com",
  //   to: existUser.email,
  //   replyTo: existUser.email,
  //   subject: "Password Reset - UCSC EXRMS",
  //   html: htmlEmail,
  // };

  // transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     console.log("error in sending mail", err);
  //     return res.status(400).json({
  //       message: `error in sending the mail${err}`,
  //     });
  //   } else {
  //     return res.json({ message: "Email Sent Successfully! " });
  //   }
  // });

  if (status) {
    res.json({
      statusCode: 1,
      msg: "OTP generated",
    });
  } else {
    res.json({
      statusCode: 2,
      msg: "Error in OTP",
    });
  }
});

const forgetPasswordOtpCheck = asyncHandler(async (req, res) => {
  const { user_name, otp } = req.body;
  console.log("forgotpasswordotpcheck");
  console.log(otp);
  console.log(user_name);

  connection.query(
    `SELECT forgotPasswordOtp from user WHERE user_name="${user_name}" OR email="${user_name}"`,
    function (error, results) {
      if (error) throw error;
      console.log(results);
      if (otp === results[0].forgotPasswordOtp) {
        console.log("success");
        res.json({
          statusCode: 1,
          msg: "Valid Access",
        });
      } else {
        res.json({
          statusCode: 2,
          msg: "Invalid Access",
        });
      }
    }
  );

  // const existUser = await user.findFirst({
  //   where: {
  //     OR: [
  //       {
  //         user_name: user_name,
  //       },
  //     ],
  //   },
  //   select: {
  //     forgotPasswordOtp: true,
  //   },
  // });

  // if (OTP === existUser.forgotPasswordOtp) {
  //   res.json({
  //     statusCode: 1,
  //     msg: "Valid Access",
  //   });
  // } else {
  //   res.json({
  //     statusCode: 2,
  //     msg: "Invalid Access",
  //   });
  // }
});

const resetPassword = asyncHandler(
  asyncHandler(async (req, res) => {
    const { user_name, password } = req.body;

    bycrypt.hash(password, 10).then(async (hash) => {
      const status = await connection.query(
        `UPDATE user SET password="${hash}" WHERE user_name= "${user_name}" OR email="${user_name}"`,
        function (error, results) {
          if (error) throw error;
        }
      );

      // user.updateMany({
      //   where: {
      //     OR: [
      //       {
      //         user_name: user_name,
      //       },
      //     ],
      //   },
      //   data: {
      //     password: hash,
      //   },
      // });

      if (status) {
        console.log("success reset");
        res.json({
          statusCode: 1,
          msg: "Password Changed",
        });
      } else {
        res.json({
          statusCode: 2,
          msg: "Error in Password Changed",
        });
      }
    });
  })
);

module.exports = {
  login,
  register,
  emailCheck,
  usernameCheck,
  forgotPasswordOtp,
  forgetPasswordOtpCheck,
  resetPassword,
  usernamePasswordCheck,
  logOut,
};
