import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(tindexNumber,  name, moreActions) {
  return { tindexNumber,  name , moreActions};
}


export default function CustomizedTables() {

  const [intakeData, setIntakeData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;

  const getNewIntake = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
  console.log("Hi");

    await axios
      .get(API_URL + "/settings/getNewIntake/",config)
      .then((response) => {
        setIntakeData(response.data);
        console.log(response.data);
      });
  };
  
  useEffect(() => {
    getNewIntake();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Typography sx={{ fontSize: 24  , fontFamily: "Montserrat",fontWeight: 400 , textAlign: 'center' }} color="text.secondary">New Intake Student List in 2022/2023</Typography><br></br>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Tempory Index Number</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">More Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {intakeData.map((data) => (
            <StyledTableRow >
              <StyledTableCell align="left">{data.student_temp_no}</StyledTableCell>
              <StyledTableCell align="left">{data.fName + " " +data.lName}</StyledTableCell>
              <StyledTableCell align="left"><Button variant="contained">View Profile</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
