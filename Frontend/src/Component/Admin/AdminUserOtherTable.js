import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  createTheme,
  Typography,
  Modal,
  Box,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../constants/globalConstants";
import DeleteIcon from "@mui/icons-material/Delete";

// const UsFormatter = new Intl.DateTimeFormat('en-US')

const theme = createTheme({
  typography: {
    h6: {
      color: "#06283D",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#06283D",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  AssignmentName,
  Description,
  Contribution,
  Deadline,
  Action
) {
  return { AssignmentName, Description, Contribution, Deadline, Action };
}

function AdminUserOtherTable() {
  // console.log(props.AssignData);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [userData, setUserData] = useState([]);
  let date = [];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = async (data) => {
    console.info(data);
    // const config = {
    //   headers: {
    //     authorization: accessToken,
    //   },
    // };

    setOpen(data);

    // await axios
    //   .get(API_URL + `/settings/getUserOther/${data}`, config)
    //   .then((response) => {
    //     setUserData(response.data);

    //     // console.log(response.data);
    //   });
  };

  const handleClick1 = async (data) => {
    console.info(data);
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/deleteUser/${data}`, config)
      .then((response) => {
        setOpen(null);
        window.location.reload();

        // console.log(response.data);
      });
  };

  const getUserLecturer = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getUserOther", config)
      .then((response) => {
        setUserData(response.data);

        // console.log(response.data);
      });
  };

  useEffect(() => {
    getUserLecturer();
  }, []);

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: "20px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Typography variant="h6">User_Name</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Name</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Email</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">More Actions</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <StyledTableRow key={row.user_name}>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.user_name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.f_name} {row.l_name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.email}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Button
                    variant="outlined"
                    onClick={() => handleClick(row.user_name)}
                    startIcon={<DeleteIcon />}
                  >
                    Delete User
                  </Button>
                  {open === row.user_name && (
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography
                          sx={{ mb: "30px" }}
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Are you sure you want to delete user {row.user_name}?
                        </Typography>
                        <Stack spacing={3} direction="row">
                          <Button
                            variant="contained"
                            onClick={() => handleClick1(row.user_name)}
                          >
                            Yes
                          </Button>
                          <Button variant="contained">No</Button>
                        </Stack>
                      </Box>
                    </Modal>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminUserOtherTable;
