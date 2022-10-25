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

function createData(IndexNumber,  Name, Year, CourseN, Status, MoreAction) {
  return { IndexNumber,  Name , Year, CourseN, Status, MoreAction };
}

const rows = [
    createData(19001411,'Dinil Seniru Ratnayake','3rd Year','Computer Science','Pending' ),
    createData(19001428,'Janitha Ratnayake','3rd Year','Computer Science','Pending'),
    createData(19020945,'Sasani Samanga','3rd Year','Infomation System', 'Issued'),
];

export default function CustomizedTables(props) {
  console.log(props.option);
  console.log(props.year);
  const [confimLData, setConfirmationData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;
  // console.log(user_id);

  const acYear = props.option;
  const cuYear = props.year;
 

  useEffect(() => {
   
    getConfirmation();

  }, [acYear,cuYear])

  const getConfirmation = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
  console.log("Hi");

    await axios
      .get(API_URL + "/settings/getConfirmation/"+acYear+"/"+cuYear,config)
      .then((response) => {
        setConfirmationData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getConfirmation();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          {/* <TableRow>
            <StyledTableCell align="left">Index Number</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Year</StyledTableCell>
            <StyledTableCell align="left">Course Type</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
             <StyledTableCell align="left">More Action</StyledTableCell> 
          </TableRow> */}
        </TableHead>
        <TableBody>
          {confimLData.map((data) => (
            <StyledTableRow>
              <StyledTableCell align="left">{data.index_no}</StyledTableCell>
              <StyledTableCell align="left">{data.fName + " " +data.lName}</StyledTableCell>
              <StyledTableCell align="left">{data.study_year}</StyledTableCell>
              <StyledTableCell align="left">{data.degree_status}</StyledTableCell>
              <StyledTableCell align="left">{data.status}</StyledTableCell>
              {/* <StyledTableCell align="left"><Button variant="contained">View Letter</Button></StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
