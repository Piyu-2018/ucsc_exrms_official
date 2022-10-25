import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../../constants/globalConstants";

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

function createData(IndexNumber, Name, CurrentRank, CurrentGPA) {
  return { IndexNumber, Name, CurrentRank, CurrentGPA };
}

const rows = [
  createData(19001411, "Dinil Seniru Ratnayake", 37, 3.7868),
  createData(19001428, "Janitha Ratnayake", 10, 3.8504),
  createData(19001381, "Piyumi Rathnayaka", 60, 3.5508),
];

export default function CustomizedTables(props) {
  console.log(props.option);
  // console.log(props.year);
  const [fourthData, setFourthData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  // const { accessToken } = userInfo.user;
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const acYear = props.option;
  // const cuYear = props.year;

  useEffect(() => {
    getFourth();
  }, [acYear]);

  const getFourth = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
    console.log("Hi");

    await axios
      .get(API_URL + "/settings/getFourth/" + acYear, config)
      .then((response) => {
        setFourthData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getFourth();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Index Number</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Current Rank</StyledTableCell>
            <StyledTableCell align="left">Current GPA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fourthData.map((data) => (
            <StyledTableRow>
              <StyledTableCell align="left">{data.index_no}</StyledTableCell>
              <StyledTableCell align="left">
                {data.name_initial}
              </StyledTableCell>
              <StyledTableCell align="left">{data.rank}</StyledTableCell>
              <StyledTableCell align="left">{data.GPA}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
