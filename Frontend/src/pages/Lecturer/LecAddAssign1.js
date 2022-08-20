import {
  Backdrop,
  Box,
  Button,
  Fade,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useEffect } from "react";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialAssignValues, assignValidation } from "./../Validation";
import { addAssignment } from "../../actions/userActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function LecAddAssign1(params) {
  const [open, setOpen] = React.useState(false);
  const [nameError, setNameError] = useState("");
  const userInfo = useSelector((state) => state.userInfo);
  const { user } = userInfo;

  useEffect(() => {
    if (user) {
      if (user.error) {
        setNameError(user.error.username);
      } else {
        setNameError("");
      }
    }
  }, [user]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [value, setValue] = React.useState(null);

  const dispatch = useDispatch();
  const CourseId = params.CourseId;

  const { userId, accessToken } = userInfo.user;

  const addAssign = (data) => {
    console.log(data);
    // dispatch(login(data.username, data.password));
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{ mt: "50px" }}
        variant="contained"
        startIcon={<AddBoxIcon />}
      >
        Add Assignment
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              New Assignment
            </Typography>
            <Box sx={{ mt: "20px" }}>
              <Formik
                initialValues={initialAssignValues}
                validationSchema={assignValidation}
                onSubmit={console.log("Hi")}
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
                          id="name"
                          name="name"
                          placeholder="Enter Assignment name"
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

                    {/* <span className="authenticationField">
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
  
                          <ErrorMessage
                      name="password"
                      component="div"
                      className="error-msg"
                    />
                    <p class="error-msg">{passwordError}</p>
                        </div>
                      </span> */}

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
                    </div>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default LecAddAssign1;
