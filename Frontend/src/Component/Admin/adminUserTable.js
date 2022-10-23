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

function AdminUserTable() {
  // console.log(props.AssignData);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [userData, setUserData] = useState([]);
  let date = [];

  const getUserLecturer = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getUserLecturer", config)
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
                  <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete User
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminUserTable;
