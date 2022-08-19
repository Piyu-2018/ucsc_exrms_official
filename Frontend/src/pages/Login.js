import React from "react";
import "./../style/login.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Helmet } from "react-helmet";
// import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { initialLoginValues, loginValidation } from "./Validation";
import { login } from "../actions/userActions";
import { TextField } from "formik-material-ui";
import Navbar from "../Component/Navbar";

function Login() {
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  useEffect(() => {
    if (user) {
      if (user.error) {
        setUsernameError(user.error.username);
        setPasswordError(user.error.password);
      } else {
        setUsernameError("");
        setPasswordError("");

        if (user.user_type === "lecturer") {
          navigate("/lecturer_assignments");
        } else {
          navigate("/directorDash");
        }
      }
    }
  }, [user]);

  const loginUser = (data) => {
    console.log(data.password);
    dispatch(login(data.username, data.password));
  };

  return (
    <div className="body">
      <Helmet>
        <style>
          {
            'body { background-image: url("./pubImgs/loginBackground.png") !important; }'
          }
        </style>
      </Helmet>
      <Navbar/>
      <Container maxWidth="lg">
        <Box sx={{ height: "100vh", ml: "60%" }}>
          <Typography
            sx={{ mb: "15%" }}
            variant="h3"
            color="#06283D"
            gutterBottom
            component="div"
          >
            Login
          </Typography>
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

                <div class="col-12 Froget-password">
                  <p class="text-end">
                    <Link to="/frogotpassword/username" className="theme">
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
