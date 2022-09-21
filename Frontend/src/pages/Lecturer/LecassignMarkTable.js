import * as React from "react";
import {useState,useEffect} from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createTheme, Typography } from "@mui/material";
import { API_URL } from "../../constants/globalConstants";
import { useSelector } from "react-redux";
import axios from "axios";
// import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function createData(index, name, marks, more) {
  return { index, name, marks, more };
}

const rows = [
  createData(
    <Typography variant="h6" theme={theme}>
      19001411
    </Typography>,
    <Typography variant="h6" theme={theme}>
      B.G.D.S.B. Ratnayake
    </Typography>,
    <Typography variant="h6" theme={theme}>
      90
    </Typography>
  ),
  createData(
    <Typography variant="h6" theme={theme}>
      19001428
    </Typography>,
    <Typography variant="h6" theme={theme}>
      J.D. Ratnayake
    </Typography>,
    <Typography variant="h6" theme={theme}>
      80
    </Typography>
  ),
  createData(
    <Typography variant="h6" theme={theme}>
      19001411
    </Typography>,
    <Typography variant="h6" theme={theme}>
      B.G.D.S.B. Ratnayake
    </Typography>,
    <Typography variant="h6" theme={theme}>
      Not Added
    </Typography>
  ),
];

function LecassignMarkTable(props) {
  const assignment_id = props.assignmentId;
  const [assignMarks, setAssignMarks] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;
  const getAssignMarks = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
    await axios 
    .get(API_URL+"/settings/getAssignMarks/"+assignment_id,config)
    .then((response)=>{
      setAssignMarks(response.data);
      console.log(response.data);
    });
  };

  useEffect(()=>{
    getAssignMarks();
  },[]);

  console.log(assignMarks);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index Number</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Marks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assignMarks.map((row) => (
            <StyledTableRow key={row.index}>
              <StyledTableCell component="th" scope="row">
                {row.index_number}
              </StyledTableCell>
              <StyledTableCell>{row.f_name} {row.l_name}</StyledTableCell>
              <StyledTableCell>{row.marks}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LecassignMarkTable;
