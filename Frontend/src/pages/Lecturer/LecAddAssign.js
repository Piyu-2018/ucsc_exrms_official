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
import { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

function LecAddAssign() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(null);

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
              <TextField
                id="outlined-textarea"
                label="Assignment Name"
                placeholder="Enter Assignment Name"
                multiline
                fullWidth
              />

              <TextField
                id="outlined-textarea"
                label="Description"
                placeholder="Enter Description"
                multiline
                rows={3}
                fullWidth
                sx={{ mt: "20px" }}
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
              />
              <Box sx={{ mt: "20px" }}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  sx={{ mt: "20px" }}
                >
                  <DatePicker
                    label="Deadline"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>

              <Button
                variant="contained"
                color="success"
                sx={{ mt: "20px", ml: "40%" }}
                size="large"
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default LecAddAssign;
