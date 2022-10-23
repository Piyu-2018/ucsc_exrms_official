import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  Fade,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import readXlsxFile from "read-excel-file";
import axios from "axios";
import { API_URL } from "../../constants/globalConstants";
import LoadingButton from "@mui/lab/LoadingButton";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit } = useForm();
  console.log(props.assignmentId);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  const [indexNumbers, setIndexNumbers] = useState([]);
  const [fileName, setFileName] = useState(null);
  const handleCloseUpload = () => {
    setOpenUpload(false);
    window.location.reload();
  };

  // const handleClick = () => {
  //   window.location.reload();
  // };
  // const handleClose = () => {
  //   setOpen(false);
  //   window.location.reload();
  // };
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;

  const getIndex = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getIndexAssign/${props.assignmentId}`, config)
      .then((response) => {
        setIndexNumbers(response.data);
        console.log(`index numbers`);
        console.log(response.data);

        // console.log(response.data);
      });
  };

  useEffect(() => {
    getIndex();
  }, []);

  const addAssign = async (data1) => {
    if (data1) {
      console.log("HI");
      console.log(data1.marks);
      console.log(data1.index_number);
      const data = {
        assignment_id: `${props.assignmentId}`,
        index_number: data1.index_number,
        marks: data1.marks,
        user_id: user_id,
      };

      console.log(data);
      window.location.reload();

      await axios
        .post(API_URL + "/settings/assignMarkAdd1", data)
        .then((response) => {
          console.log(response);
          // setOpen(false);
          // window.location.reload();

          // setButtonState("loading");
          // console.log(buttonState);

          // setButtonState("clicked")
          // console.log(buttonState);
        });
    }
  };

  const index_numbers = [
    {
      index_number: "19001411",
    },
    {
      index_number: "19001428",
    },
  ];

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
        user_id: user_id,
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
              <form onSubmit={handleSubmit(addAssign)}>
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 530 }}
                  options={indexNumbers}
                  autoHighlight
                  fullWidth
                  inputProps={register("index_number")}
                  getOptionLabel={(option) => option.index_no}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <Typography>{option.index_no}</Typography>
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      id="outlined-textarea"
                      {...params}
                      fullWidth
                      label="Index Number"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                        // disable autocomplete and autofill
                      }}
                      {...register("index_number")}
                      // inputProps={register("index_number")}
                    />
                  )}
                />
                {/* <TextField
                id="outlined-textarea"
                label="Index Number"
                placeholder="Enter Index Number"
                multiline
                fullWidth
              /> */}

                <TextField
                  id="outlined-textarea"
                  label="Marks"
                  placeholder="Enter Marks in %"
                  multiline
                  fullWidth
                  inputProps={register("marks")}
                  sx={{ mt: "20px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ mt: "20px", ml: "40%" }}
                  size="large"
                >
                  Submit Marks
                </Button>
              </form>
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
