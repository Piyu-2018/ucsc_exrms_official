import * as React from "react";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import CourseModalContains from "./AddCourseModalContains";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../../constants/globalConstants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const buttonStyles = {
  backgroundColor: "#06283D",
  width: "250px",
  color: "white",
  "&:hover": {
    backgroundColor: "#114CA7",
  },
};

function AddCourseModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [lecturer, setLecturer] = useState([]);

  const getLec = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getLecturer`, config)
      .then((response) => {
        setLecturer(response.data);
        console.log(`index numbers`);
        console.log(response.data);

        // console.log(response.data);
      });
  };

  React.useEffect(() => {
    getLec();
  }, []);

  return (
    <div>
      <Button sx={buttonStyles} onClick={handleOpen}>
        Add Course
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
              Add Course
            </Typography>
            <CourseModalContains lecturer={lecturer} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddCourseModal;
