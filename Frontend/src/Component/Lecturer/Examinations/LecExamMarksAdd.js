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
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
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

function LecExamMarksAdd() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      <Button
        variant="contained"
        component="label"
        sx={{ mt: "50px", ml: "5%" }}
      >
        Upload (.xlsx format)
        <input hidden accept="image/*" multiple type="file" />
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
