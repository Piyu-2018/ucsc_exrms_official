import {
  Backdrop,
  Box,
  Button,
  Fade,
  InputAdornment,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../../constants/globalConstants";
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

const user_types = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "ma",
    label: "Ma",
  },
  {
    value: "lecturer",
    label: "lecturer",
  },
  {
    value: "director",
    label: "Director",
  },
  {
    value: "hox",
    label: "Head of examinations",
  },
  {
    value: "sar",
    label: "SAR",
  },
];
function AdminAddUser() {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userType, setUserType] = React.useState("Student");

  const addAssign = async (data) => {
    console.log("Hi");
    console.log(data);
    if (
      data.user_name &&
      data.f_name &&
      data.l_name &&
      data.email &&
      data.user_type &&
      data.password
    ) {
      var data = {
        user_name: data.user_name,
        user_type: data.user_type,
        f_name: data.f_name,
        l_name: data.l_name,
        password: data.password,
        email: data.email,
      };

      console.log("inside");
      setOpen(false);

      // const name = data.name;
      // const description = data.description;
      // const contribution = data.contribution;

      // const lecturer_id = user_id.toString();

      await axios.post(API_URL + "/auth/register", data).then((response) => {
        // if (!response.data.error) {
        // }
      });
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Create User
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
              Create New User
            </Typography>
            <Box sx={{ mt: "20px", padding: "5%" }}>
              <form onSubmit={handleSubmit(addAssign)}>
                <TextField
                  id="outlined-textarea"
                  label="User Name"
                  placeholder="Enter User Name (EX: lec00001)"
                  multiline
                  fullWidth
                  sx={{ mb: "10px" }}
                  inputProps={register("user_name")}
                />

                <TextField
                  id="outlined-textarea"
                  label="First Name"
                  placeholder="Enter First Name"
                  multiline
                  fullWidth
                  sx={{ mb: "10px" }}
                  inputProps={register("f_name")}
                />

                <TextField
                  id="outlined-textarea"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  multiline
                  fullWidth
                  sx={{ mb: "10px" }}
                  inputProps={register("l_name")}
                />

                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Enter Email"
                  multiline
                  fullWidth
                  sx={{ mb: "10px" }}
                  inputProps={register("email")}
                />

                <TextField
                  id="outlined-select-currency"
                  select
                  label="User Type"
                  placeholder="Select User Type"
                  multiline
                  fullWidth
                  sx={{ mb: "10px" }}
                  inputProps={register("user_type")}
                >
                  {user_types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-password-input-1"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  inputProps={register("password")}
                  fullWidth
                  sx={{ mb: "10px" }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ mt: "20px", ml: "40%" }}
                  size="large"
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AdminAddUser;
