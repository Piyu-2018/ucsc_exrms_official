const { PrismaClient } = require("@prisma/client");
const { StatusCodes } = require("http-status-codes");
const bycrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const { sign } = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const { user } = new PrismaClient();

const login = asyncHandler(async (req, res) => {
  console.log("Ice kata 2");
  const { user_name, password } = req.body;

  const existUser = await user.findFirst({
    where: {
      OR: [
        {
          user_name: username,
        },
      ],
    },
  });

  if (existUser) {
    bycrypt.compare(passowrd, existUser.password).then((match) => {
      if (match) {
        const accessToken = sign(
          {
            email: existUser.email,
            user_id: existUser.userId,
          },
          process.env.JWT_SECRET
        );

        let returnData = {
          user_id: existUser.userId,
          name: existUser.name,
          email: existUser.email,
          user_name: existUser.username,
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
  const { user_name, user_type, name, password, email } = req.body;

  const emailStatus = await user.findUnique({
    where: {
      email,
    },
  });

  console.log(emailStatus);

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
          name,
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
        name: newUser.name,
        email: newUser.email,
        // emailStatus: newUser.emailStatus,
        user_name: newUser.user_name,
        accessToken: accessToken,
      };

      res.status(StatusCodes.CREATED).json(returnData);
    });
  }
});

module.exports = { login, register };
