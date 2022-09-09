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

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../constants/globalConstants";


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

function createData(IndexNumber, RegistrationNumber, Name, MoreActions) {
  return { IndexNumber, RegistrationNumber, Name , MoreActions};
}


export default function CustomizedTables(props) {
  console.log(props.option);
  console.log(props.year);
  console.log(props.degree);
  const [undegraduateData, setUndergraduateData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;

  const acYear = props.year;
  const degree = props.degree;

  const getUndergraduates = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
  console.log("Hi");

  await axios
      .get(API_URL + "/settings/getUndergraduates/"+acYear+"/"+degree,config)
      .then((response) => {
        setUndergraduateData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getUndergraduates();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Index Number</StyledTableCell>
            <StyledTableCell align="left">Registration Number</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">More Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {undegraduateData.map((data) => (
            <StyledTableRow>
              <StyledTableCell align="left">{data.index_no}</StyledTableCell>
              <StyledTableCell align="left">{data.reg_no}</StyledTableCell>
              <StyledTableCell align="left">{data.f_name + " " +data.l_name}</StyledTableCell>
              <StyledTableCell align="left"><Button variant="contained">View Profile</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
