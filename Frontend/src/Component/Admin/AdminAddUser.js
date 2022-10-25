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
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const user_types = [
  {
    value: "Student",
    label: "Student",
  },
  {
    value: "Ma",
    label: "Ma",
  },
  {
    value: "Lecturer",
    label: "lecturer",
  },
  {
    value: "Director",
    label: "Director",
  },
  {
    value: "Head of examinations",
    label: "Head of examinations",
  },
  {
    value: "SAR",
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
    if (data.name && data.description && data.contribution) {
      setOpen(false);

      const name = data.name;
      const description = data.description;
      const contribution = data.contribution;

      // const lecturer_id = user_id.toString();

      //   await axios
      //     .post(API_URL + "/settings/assignAdd", inputData)
      //     .then((response) => {
      //       params.assignDataFunc((list) => [...list, response.data]);
      //       // if (!response.data.error) {
      //       // }
      //     });
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
            <Box sx={{ mt: "20px" }}>
              <form onSubmit={handleSubmit(addAssign)}>
                <TextField
                  id="outlined-textarea"
                  label="User Name"
                  placeholder="Enter User Name (EX: lec00001)"
                  multiline
                  fullWidth
                  inputProps={register("user_name")}
                />

                <TextField
                  id="outlined-textarea"
                  label="First Name"
                  placeholder="Enter First Name"
                  multiline
                  fullWidth
                  inputProps={register("f_name")}
                />

                <TextField
                  id="outlined-textarea"
                  label="Last Name"
                  placeholder="Enter Last Name"
                  multiline
                  fullWidth
                  inputProps={register("l_name")}
                />

                <TextField
                  id="outlined-textarea"
                  label="Email"
                  placeholder="Enter Email"
                  multiline
                  fullWidth
                  inputProps={register("email")}
                />

                <TextField
                  id="outlined-select-currency"
                  select
                  label="User Type"
                  placeholder="Select User Type"
                  multiline
                  fullWidth
                  inputProps={register("user_type")}
                >
                  {user_types.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  id="outlined-textarea"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  multiline
                  fullWidth
                  inputProps={register("password")}
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
