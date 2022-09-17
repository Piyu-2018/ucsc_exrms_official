import React from "react";
import "./../style/login.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../Component/Navbar";
import axios from "axios";
import { API_URL } from "../constants/globalConstants";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
// import { ErrorMessage } from "@hookform/error-message";

function ForgotPassword() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const userInfo = useSelector((state) => state.userInfo);
  const initState = {
    email: "",
  };

  const [usernameError, setUsernameError] = useState("");

  const submitUsername = async (data) => {
    if (data.name) {
      console.log("Data in");
      const inputData = { user_name: data.name };
      console.log(inputData);
      await axios
        .post(API_URL + "/auth/usernameCheck", inputData)
        .then((response) => {
          if (response.data.isUnique === false) {
            setUsernameError("");
            navigate("/password_otp", { state: inputData });
          } else {
            setUsernameError("Email or Username Doesn't Exist");
          }
        })
        .catch((error) => console.log(error));
    }
  };

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
              sx={{ mb: "15%" }}
              variant="h3"
              color="#06283D"
              gutterBottom
              component="div"
            >
              Reset Password
            </Typography>
            <Box>
              <form onSubmit={handleSubmit(submitUsername)}>
                <TextField
                  required
                  id="outlined-textarea"
                  label="Username or Email"
                  placeholder="Enter Username or Email"
                  multiline
                  fullWidth
                  inputProps={register("name")}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ width: "50%", mt: "5%", borderRadius: "10em" }}
                  size="large"
                >
                  Next
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default ForgotPassword;
