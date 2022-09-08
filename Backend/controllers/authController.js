const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { user } = new PrismaClient();

const {generateOtp,otpEmail} = require("./helpers/authControllerHelper");

const login = asyncHandler(async (req, res) => {
  console.log("Login");
  const { user_name, password } = req.body;
  // console.log(req.body);

  const existUser = await user.findUnique({
    where: {
      user_name: user_name,
    },
  });

  console.log("existuser");

  if (existUser) {
    bycrypt.compare(password, existUser.password).then((match) => {
      console.log(password);
      console.log(existUser.password);
      if (match) {
        console.log("Hi");
        const accessToken = sign(
          {
            email: existUser.email,
            user_id: existUser.user_id,
          },
          process.env.JWT_SECRET
        );

        let returnData = {
          user_id: existUser.user_id,
          f_name: existUser.f_name,
          l_name: existUser.l_name,
          email: existUser.email,
          user_type: existUser.user_type,
          user_name: existUser.user_name,
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
  } else {
    res.json({
      error: {
        user_name: "Username Doesn't exist",
        password: "",
      },
    });
  }
});

const register = asyncHandler(async (req, res) => {
  const { user_name, user_type, f_name, l_name, password, email } = req.body;

  // console.log(req.body);

  const emailStatus = await user.findFirst({
    where: {
      OR: [
        {
          email,
        },
        {
          user_name,
        },
      ],
    },
  });

  // console.log(emailStatus);

  // return 0;

  // const emailStatus = false;

  console.log("Hi");

  if (emailStatus) {
    res.json({ error: "Email Already Registered! Please Login" });
  } else {
    bycrypt.hash(password, 10).then(async (hash) => {
      const newUser = await user.create({
        data: {
          user_name,
          user_type,
          f_name,
          l_name,
          password: hash,
          email,
        },
      });

      const accessToken = sign(
        { email: newUser.email, user_name: newUser.user_name },
        process.env.JWT_SECRET
      );

      const returnData = {
        user_type: newUser.user_type,
        f_name: newUser.f_name,
        l_name: newUser.l_name,
        email: newUser.email,
        emailStatus: newUser.emailStatus,
        user_name: newUser.user_name,
        accessToken: accessToken,
      };

      res.status(StatusCodes.CREATED).json(returnData);
    });
  }
});

const emailCheck = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const emailStatus = await user.findUnique({
    where: {
      email,
    },
  });

  if (emailStatus) {
    res.json({ isUnique: false });
  } else {
    res.json({ isUnique: true });
  }
});

const usernameCheck = asyncHandler(async (req, res) => {
  const { user_name } = req.body;

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          user_name,
        },
      ],
    },
  });

  if (existUser) {
    res.json({ isExist: true });
  } else {
    res.json({ isExist: false });
  }
});

forgotPasswordOtp = asyncHandler(async (req, res) => {
  const { user_name } = req.body;
  const otp = generateOtp();

  const status = await user.updateMany({
    where: {
      OR: [
        {
          user_name: user_name,
        },
      ],
    },

    data: {
      forgotPasswordOtp: otp,
    },
  });

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          user_name: user_name,
        },
      ],
    },
  });

  const htmlEmail = otpEmail(existUser.f_name, otp);

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "exrmsofficial@gmail.com",
      pass: "$exrms99official#01",
    },
  });

  const mailOptions = {
    from: "exrmsofficial@gmail.com",
    to: existUser.email,
    replyTo: existUser.email,
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

  if(status) {
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

const forgetPasswordOtpCheck = asyncHandler(async(req,res) => {
  const {user_name,otp} = req.body;

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          user_name : user_name,
        },
      ],
    },
    select: {
      forgotPasswordOtp: true,
    },
  });

  if(OTP === existUser.forgotPasswordOtp) {
    res.json({
      statusCode: 1,
      msg:"Valid Access",
    });
  } else {
    res.json({
      statusCode: 2,
      msg: "Invalid Access",
    });
  }
});

const resetPassowrd = asyncHandler(asyncHandler(async (req,res) => {
  const {user_name,password} = req.body;

  bycrypt.hash(password,10).then(async (hash)=>{
    const status = await user.updateMany({
      where: {
        OR: [
          {
            user_name: user_name,
          },
        ],
      },
      data: {
        password: hash,
      },
    });

    if(status) {
      res.json({
        statusCode: 1,
        msg: "Password Changed",
      });
    }else {
      res.json({
        statusCode: 2,
        msg: "Error in Password Changed",
      });

    }
  });
}));

module.exports = { login, register, emailCheck };
