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

function createData(IndexNumber,  Name, SARAction) {
  return { IndexNumber,  Name , SARAction };
}

/* const rows = [
    createData(19001428,'Janitha Ratnayake'),
    createData(19001411,'Dinil Seniru Ratnayake'),
    createData(19020945,'Sasani Samanga'),
]; */

export default function CustomizedTables(props) {
  console.log(props.acYear);
  console.log(props.yearSem);
  console.log(props.degree);
  console.log(props.subject);
  const [recruthinizationData, setRecruthinizationData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;

  const acYear = props.acYear;
  const yearSem = props.yearSem;
  const degree = props.degree;
  const subject = props.subject;

  useEffect(() => {
   
    getRescrutinization();

  }, [acYear,yearSem, degree, subject])
 

  const getRescrutinization = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
  console.log("Hi");

  await axios
      .get(API_URL + `/settings/getRescrutinization/${acYear}/${yearSem}/${degree}/${subject}`,config)
      .then((response) => {
        setRecruthinizationData(response.data);
        console.log(response.data);
        console.log("siuvnfiv");
      });
  };

  useEffect(() => {
    getRescrutinization();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Index Number</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            {/* <StyledTableCell align="left">SAR Action</StyledTableCell> */}
            {/* <StyledTableCell align="left"></StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {recruthinizationData.map((data) => (
            <StyledTableRow>
              <StyledTableCell align="left">{data.index_no}</StyledTableCell>
              <StyledTableCell align="left">{data.name}</StyledTableCell>
              {/* <StyledTableCell align="left">{data.SARAction}<Button variant="contained" color='success'>Accept</Button></StyledTableCell> */}
              {/* <StyledTableCell align="left">{data.SARAction}<Button variant="contained" color='error'>Pending</Button></StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
