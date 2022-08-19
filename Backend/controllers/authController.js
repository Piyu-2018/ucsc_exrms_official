const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { user } = new PrismaClient();

const login = asyncHandler(async (req, res) => {
  console.log("Login");
  const { user_name, password } = req.body;
  console.log(req.body);

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

module.exports = { login, register };
