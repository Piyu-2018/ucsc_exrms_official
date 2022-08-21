import React, { useState } from "react";
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
import AddBoxIcon from "@mui/icons-material/AddBox";
// import { useState } from "react";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

import axios from "axios";
import { API_URL } from "../../../src/constants/globalConstants";
import {
  ASSIGN_ADD_FAIL,
  ASSIGN_ADD_SUCCESS,
} from "../../../src/constants/userConstants";
import { useForm } from "react-hook-form";

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

function LecAddAssign(params) {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [value, setValue] = React.useState(null);

  const dispatch = useDispatch();
  const course_id = params.CourseId;

  const userInfo = useSelector((state) => state.userInfo);
  const { user_id } = userInfo.user;
  const lecturer_id = user_id;

  const addAssign = async (data) => {
    console.log("Hi");
    if (data.name && data.description && data.contribution) {
      setOpen(false);

      const name = data.name;
      const description = data.description;
      const contribution = data.contribution;

      console.log(user_id);
      // const lecturer_id = user_id.toString();

      const inputData = {
        name,
        description,
        contribution,
        lecturer_id,
        course_id,
      };

      await axios
        .post(API_URL + "/settings/assignAdd", inputData)
        .then((response) => {
          params.assignDataFunc((list) => [...list, response.data]);
          // if (!response.data.error) {
          // }
        });
    }
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
              <form onSubmit={handleSubmit(addAssign)}>
                <TextField
                  id="outlined-textarea"
                  label="Assignment Name"
                  placeholder="Enter Assignment Name"
                  multiline
                  fullWidth
                  inputProps={register("name")}
                />

                <TextField
                  id="outlined-textarea"
                  label="Description"
                  placeholder="Enter Description"
                  multiline
                  rows={3}
                  fullWidth
                  sx={{ mt: "20px" }}
                  inputProps={register("description")}
                />

                <TextField
                  id="outlined-textarea"
                  label="Contribution"
                  placeholder="Enter Contribution in %"
                  multiline
                  fullWidth
                  sx={{ mt: "20px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  inputProps={register("contribution")}
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

export default LecAddAssign;
