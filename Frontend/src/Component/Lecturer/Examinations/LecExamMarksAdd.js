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
import React, { useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import readXlsxFile from "read-excel-file";
import axios from "axios";
import { API_URL } from "../../../constants/globalConstants";
import { useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

function LecExamMarksAdd(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [buttonState, setButtonState] = useState(true);
  const [openUpload, setOpenUpload] = useState(false);
  const [fileName, setFileName] = useState(null);
  const [question, setQuestion] = useState(null);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;

  const schema = {
    index_number_of_students: {
      prop: "index_number_of_students",
      type: Number,
    },
    question_1_marks: {
      prop: "question_1_marks",
      type: Number,
    },
    question_2_marks: {
      prop: "question_2_marks",
      type: Number,
    },
    question_3_marks: {
      prop: "question_3_marks",
      type: Number,
    },
    question_4_marks: {
      prop: "question_4_marks",
      type: Number,
    },
  };

  // const getQuestion  = async () => {
  //   const config = {
  //     headers: {
  //       authorization: accessToken,
  //     },
  //   };

  //   await axios
  //     .get(
  //       API_URL + `/settings/getQuestionFromIndex/${props.course_id}`,
  //       config
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log(response.data.length);
  //       setQuestion(response.data);
  //     });

  // };

  // useEffect(() => {
  //   getQuestion();
  // }, []);

  const handleFile = async (e) => {
    // console.log(e);
    setButtonState(false);

    setTimeout(() => {
      setOpenUpload(true);
    }, 2000);

    setTimeout(() => {
      setButtonState(true);
    }, 2000);

    const file = e.target.files[0];
    setFileName(file.name);
    console.log(file.name);

    readXlsxFile(file, { schema }).then(async (rows, errors) => {
      console.log(rows.rows);
      const data = {
        course_id: `${props.course_id}`,
        dataMarks: rows.rows,
        user_id: user_id,
      };
      console.log(data);
      await axios
        .post(API_URL + "/settings/examMarksAdd", data)
        .then((response) => {
          console.log(response);

          // setButtonState("loading");
          // // console.log(buttonState);

          // setButtonState("clicked");
          // //       // console.log(buttonState);
        });
    });
  };
  // const [value, setValue] = React.useState(null);

  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <Box sx={{ mb: "10px" }}>
      <Button
        onClick={handleOpen}
        sx={{ mt: "50px" }}
        variant="contained"
        startIcon={<AddBoxIcon />}
      >
        1st Marking Add Individually
      </Button>
      <Button
        onClick={handleOpen}
        sx={{ mt: "50px", ml: "10px" }}
        variant="contained"
        startIcon={<AddBoxIcon />}
        disabled
      >
        2nd Marking Add Individually
      </Button>
      <LoadingButton
        variant="contained"
        component="label"
        sx={{ mt: "50px", ml: "5%" }}
        loading={!buttonState}
        loadingPosition="start"
      >
        {buttonState && (
          <>
            <Typography>Upload (.xlsx format)</Typography>
            <input
              hidden
              accept=".xlsx"
              onChange={(e) => handleFile(e)}
              multiple
              type="file"
            />
          </>
        )}
        {!buttonState && (
          <>
            <Typography>&nbsp; &nbsp; &nbsp; Loading</Typography>
          </>
        )}
      </LoadingButton>
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
              Add Marks
            </Typography>
            <Box sx={{ mt: "20px" }}>
              <TextField
                id="outlined-textarea"
                label="Index Number"
                placeholder="Enter Index Number"
                multiline
                fullWidth
              />

              <TextField
                id="outlined-textarea"
                label="Question 1"
                placeholder="Marks to Question 1"
                multiline
                fullWidth
                sx={{ mt: "20px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />

              <TextField
                id="outlined-textarea"
                label="Question 2"
                placeholder="Marks to Question 2"
                multiline
                fullWidth
                sx={{ mt: "20px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />

              {Array.from(Array(counter)).map((c, index) => {
                const a = index + 3;
                const string1 = "Marks to Question " + a;
                const string2 = "Question " + a;
                return (
                  <TextField
                    id="outlined-textarea"
                    label={string2}
                    placeholder={string1}
                    multiline
                    fullWidth
                    sx={{ mt: "20px" }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">%</InputAdornment>
                      ),
                    }}
                  />
                );
              })}

              <IconButton
                aria-label="add"
                sx={{ mt: "20px", ml: "45%" }}
                onClick={handleClick}
              >
                <AddCircleIcon />
              </IconButton>

              <br></br>

              <Button
                variant="contained"
                color="success"
                sx={{ mt: "20px", ml: "35%" }}
                size="large"
              >
                Submit Marks
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}

export default LecExamMarksAdd;
