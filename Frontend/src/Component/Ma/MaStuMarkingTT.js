import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid, Stack, Typography,Item, Button, } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#06283D',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#C4DDFF',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(date,time,subCode, subName, venue, action1, action2) {
  return { date,time, subCode, subName, venue, action1, action2 };
}



const rows = [
  createData('18-08-2022','2.00pm-4.00pm','SCS 2201', 'Data Structures & Algorithm III', "4th floor", "VERIFIED"),
  createData('19-08-2022','2.00pm-4.00pm','SCS 2203', 'Software Engineering III', "4th floor", "VERIFIED"),
  createData('22-08-2022','10.00am-12.00am','SCS 2204', 'Functional Programming', "4th floor", <Button variant="text" sx={{color:"green", height:"18px"}}>Verify</Button>,<Button variant="text" sx={{color:"red",height:"18px"}}>Not Verify</Button>),
  createData('23-08-2022','2.00pm-4.00pm','SCS 2205', 'Computer Network I', "4th floor", <Button disabled>Disabled</Button>),
  createData('24-08-2022','10.00am-12.00am','SCS 2206', 'Mathematical Methods II', "4th floor", <Button disabled>Disabled</Button>),
  createData('25-08-2022','10.00am-12.00am','SCS 2207', 'Programming Language', "4th floor", <Button disabled>Disabled</Button>),
  createData('26-08-2022','2.00pm-4.00pm','SCS 2208', 'RAD', "4th floor", <Button disabled>Disabled</Button>),
];

function StuAttMarkingTT() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date & Time</StyledTableCell>
            <StyledTableCell align="left">Subject Code</StyledTableCell>
            <StyledTableCell align="left">Subject Name</StyledTableCell>
            <StyledTableCell align="left">Exam Hall</StyledTableCell>
            <StyledTableCell align="left">Verification</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.date}<br/>{row.time}
              </StyledTableCell>
              <StyledTableCell align="left">{row.subCode}</StyledTableCell>
              <StyledTableCell align="left">{row.subName}</StyledTableCell>
              <StyledTableCell align="center">{row.venue}</StyledTableCell>
              <StyledTableCell align="center">{row.action1}<br/>{row.action2}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StuAttMarkingTT
