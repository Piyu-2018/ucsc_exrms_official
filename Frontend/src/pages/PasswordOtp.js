import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Component/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import OtpInput from "react-otp-input";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/globalConstants";

function PasswordOtp() {
  const [code, setCode] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const [optError, setOtpError] = useState("");
  const [username, setUsername] = useState(location.state.user_name);

  const generateOtp = async () => {
    const inputData = { user_name: location.state.user_name };
    await axios
      .post(API_URL + "/auth/forgotPasswordOtp", inputData)
      .catch((error) => console.log(error));
  };

  const submitOtp = async () => {
    if (code && code.length == 5) {
      console.log(code);
      setOtpError("");


      const inputData = { user_name: location.state.user_name, otp: code };
      await axios
        .post(API_URL + "/auth/forgetPasswordOtpCheck", inputData)
        .then((response) => {
          if (response.data.statusCode === 1) {
            setOtpError("");
            navigate("/reset_password", {
              state: { user_name: location.state.user_name },
            });
          } else {
            setOtpError("Invalid OTP entered");
          }
        })
        .catch((error) => console.log(error));
    } else if (code.length > 0) {
      setOtpError("OTP is not complete");
    } else {
      setOtpError("OTP is required");
    }
  };

  const handleChange = (code) => setCode(code);

  useEffect(() => {
    if (!location.state) {
      navigate("/forgot_password");
    } else {
      generateOtp();
    }
  }, []);
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
              OTP Verification
            </Typography>
            <Typography
              sx={{ mb: "15%" }}
              variant="h6"
              color="#06283D"
              gutterBottom
              component="div"
            >
              Enter the OTP you received
            </Typography>
            <Box sx={{ ml: "20%" }}>
              <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={5}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid #000",
                  borderRadius: "8px",
                  width: "54px",
                  height: "54px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue",
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none",
                }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: "50%", mt: "5%", borderRadius: "10em" }}
              size="large"
              onClick={submitOtp}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default PasswordOtp;
