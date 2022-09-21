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
import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import readXlsxFile from "read-excel-file";
import axios from "axios";
import { API_URL } from "../../constants/globalConstants";
import LoadingButton from "@mui/lab/LoadingButton";



// import { useState } from "react";
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

const styleSuccess = {
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

function LecAssignAdd(props) {
  console.log(props.assignmentId);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  const [fileName, setFileName] = useState(null);
  const handleCloseUpload = () => {
    setOpenUpload(false);
    window.location.reload();
  };
  
  const schema = {
    index_number: {
      prop: "index_number",
      type: Number,
    },
    marks: {
      prop: "marks",
      type: Number,
    },
  };

  

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
    // console.log(file.name);

    readXlsxFile(file, { schema }).then(async (rows, errors) => {
      const data = {
        assignment_id: `${props.assignmentId}`,
        dataMarks: rows.rows,
      };
      console.log(data);
      await axios
        .post(API_URL + "/settings/assignMarkAdd", data)
        .then((response) => {
          console.log(response);

          // setButtonState("loading");
          // console.log(buttonState);

          // setButtonState("clicked")
          // console.log(buttonState);
        });
    });
  };
  // const [value, setValue] = React.useState(null);

  return (
    <Box sx={{ mb: "10px" }}>
      <Box>
        <Button
          onClick={handleOpen}
          sx={{ mt: "50px" }}
          variant="contained"
          startIcon={<AddBoxIcon />}
        >
          Add Assignment Marks Individually
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

        {/* {!buttonState && (
          <LoadingButton
            variant="contained"
            component="label"
            sx={{ mt: "50px", ml: "5%" }}
          ></LoadingButton>
        )} */}
      </Box>

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
                label="Marks"
                placeholder="Enter Marks in %"
                multiline
                fullWidth
                sx={{ mt: "20px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />

              <Button
                variant="contained"
                color="success"
                sx={{ mt: "20px", ml: "40%" }}
                size="large"
              >
                Submit Marks
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openUpload}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleSuccess}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            The Excel file uploaded successfully
          </Typography>
          
          <Button
          onClick={handleCloseUpload}
          sx={{ mt: "50px" }}
          variant="contained"
          color="success"
          size="large"
        >
          OK
        </Button>
          
        </Box>
      </Modal>
    </Box>
  );
}

export default LecAssignAdd;
