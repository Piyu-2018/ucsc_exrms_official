import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

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

function createData(IndexNumber,  Name, Registration) {
  return { IndexNumber,  Name , Registration };
}

const rows = [
    createData(19001411,'Dinil Seniru Ratnayake','Registered'),
    createData(19001428,'Janitha Ratnayake','Not-Registered'),
    createData(19001381,'Piyumi Rathnayaka','Registered'),
    createData(19001411,'Dinil Seniru Ratnayake','Registered'),
];

export default function CustomizedTables(props) {
  console.log(props.option);
  console.log(props.year);
  const [registrationData, setRegistrationData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;
  // console.log(user_id);

  const acYear = props.option;
  const cuYear = props.year;
 

  useEffect(() => {
   
    getRegistration();

  }, [acYear,cuYear])

  const getRegistration = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
  console.log("Hi");

    await axios
      .get(API_URL + "/settings/getRegistration/"+acYear+"/"+cuYear,config)
      .then((response) => {
        setRegistrationData(response.data);
        console.log(response.data);
        console.log("Hi");
      });
  };

  useEffect(() => {
    getRegistration();
  }, []);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Index Number</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Registered / Not</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {registrationData.map((data) => (
            <StyledTableRow>
              <StyledTableCell align="left">{data.index_no}</StyledTableCell>
              <StyledTableCell align="left">{data.fName + " " +data.lName}</StyledTableCell>
              <StyledTableCell>{data.ma_pa_status == "approved" ? (<Typography>Registered</Typography>) : (<Typography>Not Registered</Typography>)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
