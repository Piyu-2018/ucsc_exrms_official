import React from "react";
import "./../style/login.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { API_URL } from "../constants/globalConstants";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

function ResetPassword() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  console.log(location);

  const submitPassword = async (data) => {
    console.log(data);
    if (data.password === data.confirm_password) {
        console.log("Same password");
      const inputData = {
        user_name: location.state.user_name,
        password: data.password,
      };

      await axios
        .post(API_URL + "/auth/resetPassword", inputData)
        .then((response) => {
            if (response.data.statusCode === 1) {
              navigate("/login");
            }
          })
          .catch((error) => console.log(error));
      };


    }



    
    
  return (
    <>
      <div className="body">
        <Helmet>
          <style>
            {
              'body { background-image: url("./pubImgs/loginBackground.png") !important; }'
            }
          </style>
        </Helmet>
        <Navbar />
        <Container maxWidth="lg">
          <Box sx={{ height: "100vh", ml: "60%" }}>
            <Typography
              sx={{ mb: "5%" }}
              variant="h3"
              color="#06283D"
              gutterBottom
              component="div"
            >
              Create a new password
            </Typography>
            <Typography
              sx={{ mb: "15%" }}
              variant="h6"
              color="#06283D"
              gutterBottom
              component="div"
            >
              Please enter a new password for your account.
            </Typography>
            <Box>
              <form onSubmit={handleSubmit(submitPassword)}>
                <TextField
                  id="outlined-password-input-1"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  inputProps={register("password")}
                  fullWidth
                  sx={{ mb: "10px" }}
                />

                <TextField
                  id="outlined-password-input-2"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  inputProps={register("confirm_password")}
                  fullWidth
                  sx={{ mb: "10px" }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: "50%", mt: "5%", borderRadius: "10em" }}
                  size="large"
                >
                  Change password
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default ResetPassword;
