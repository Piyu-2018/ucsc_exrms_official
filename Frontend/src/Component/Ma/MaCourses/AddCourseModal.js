import * as React from 'react';
import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import CourseModalContains from "./AddCourseModalContains";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const buttonStyles = {
    backgroundColor: '#114CA7',
    width:"250px",
    color: 'white',
    '&:hover': {
      backgroundColor: '#1363DF',
  }
};

function AddCourseModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={buttonStyles} onClick={handleOpen} >Add Course</Button>
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
              Add Course
            </Typography>
            <CourseModalContains/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddCourseModal