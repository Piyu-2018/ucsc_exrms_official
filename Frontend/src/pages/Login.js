import React from "react";
import "./../style/login.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
// import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { initialLoginValues, loginValidation } from "./Validation";
import { login } from "../actions/userActions";
import { TextField } from "formik-material-ui";
import Navbar from "../Component/Navbar";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "axios";
import { API_URL } from "../constants/globalConstants";
import { Alert } from "@mui/material";

function Login() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const location = useLocation();
  // const [success, setSuccess] = useState(true);
  // if (location.state.reset == "success") {
  // console.log(location.state.reset);
  // setSuccess(location.state.reset);
  // const success = location.state.reset;

  // }
  var success = false;
  if (location.state) {
    success = true;
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;
  // setSuccess(true);

  useEffect(() => {
    if (user) {
      if (user.error) {
        setUsernameError(user.error.username);
        setPasswordError(user.error.password);
      } else {
        setUsernameError("");
        setPasswordError("");

        // if((location.state)){

        // }

        if (user.user_type === "lecturer") {
          navigate("/lec_home");
        } else if (user.user_type === "director") {
          navigate("/directorDash");
        } else if (user.user_type === "sar") {
          navigate("/sar-dash");
        } else if (user.user_type === "hox") {
          navigate("/hoEDash");
        } else {
          navigate("/ma_undergraduates");
        }
      }
    }
  }, [user]);

  // const errorLogin = async (data) => {
  //   const inputData = {user_name: data.username}
  //   await axios
  //   .post(API_URL + "/auth/usernameCheck",inputData)
  //   .then((response) => {
  //     if(response.data.isUnique === ture){
  //       setUsernameError(true);
  //     }
  //   })
  // }

  const loginUser = async (data) => {
    const inputData = { user_name: data.username, password: data.password };
    await axios
      .post(API_URL + "/auth/usernamePasswordCheck", inputData)
      .then((response) => {
        if (response.data.isUnique === true) {
          setLoginError(true);
        } else {
          console.log("Match");
          dispatch(login(data.username, data.password));
        }
      });
  };

  console.log(success);

  return (
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
            sx={{ mb: "3%" }}
            variant="h3"
            color="#06283D"
            gutterBottom
            component="div"
          >
            Login
          </Typography>
          {success && (
            <box>
              <Alert severity="success" sx={{ mb: "3%" }}>
                Password has been changed successfully
              </Alert>
            </box>
          )}
          <Formik
            initialValues={initialLoginValues}
            validationSchema={loginValidation}
            onSubmit={loginUser}
          >
            {({ isSubmitting }) => (
              <Form>
                <span className="authenticationField">
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Email or Username
                    </label>
                    <Field
                      type="text"
                      className="form-control form-control-update fcup"
                      id="username"
                      name="username"
                      placeholder="Enter Email or Username"
                      component={TextField}
                      margin="normal"
                      fullWidth
                    />

                    {/* <ErrorMessage
                    name="username"
                    component="div"
                    className="error-msg"
                  /> */}
                    {/* <p class="error-msg">{usernameError}</p>
                     */}
                  </div>
                </span>

                <span className="authenticationField">
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      type="password"
                      className="form-control form-control-update fcup"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      component={TextField}
                      margin="normal"
                      fullWidth
                    />

                    {/* <ErrorMessage
                    name="password"
                    component="div"
                    className="error-msg"
                  />
                  <p class="error-msg">{passwordError}</p> */}
                  </div>
                </span>

                {loginError && (
                  <box>
                    <Typography variant="caption" display="block" color="red">
                      <Box sx={{ mt: "10px" }}>
                        <ErrorIcon />
                      </Box>
                      The email or password you entered did not match our
                      records. Please double-check and try again.
                    </Typography>
                  </box>
                )}

                <div class="col-12 Froget-password">
                  <p class="text-end">
                    <Link to="/forgot_password" className="theme">
                      <small>Forgot Password</small>
                    </Link>
                  </p>
                </div>

                <div class="text-center">
                  <div class="col-12">
                    <Button
                      type="submit"
                      size="large"
                      variant="contained"
                      color="primary"
                      sx={{ width: "50%", mt: "5%", borderRadius: "10em" }}
                    >
                      Sign In
                    </Button>
                  </div>
                  <div class="col-12">
                    <p class="signup">
                      Don’t have an account?{" "}
                      <Link class="theme" to="/signupoption">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
