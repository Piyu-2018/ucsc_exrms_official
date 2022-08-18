import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(date,subCode, subName, venue, action) {
  return { date, subCode, subName, venue, action };
}

const rows = [
  createData('01-09-2022 2.00pm-4.00pm','SCS 2201', 'Data Structures & Algorithm III', "4th floor", 186),
  createData('01-09-2022 2.00pm-4.00pm','SCS 2203', 'Software Engineering III', "4th floor", 186),
  createData('01-09-2022 2.00pm-4.00pm','SCS 2204', 'Functional Programming', "4th floor", 186),
  createData('01-09-2022 2.00pm-4.00pm','SCS 2205', 'Computer Network I', "4th floor", 186),
  createData('01-09-2022 2.00pm-4.00pm','SCS 2206', 'Mathematical Methods II', "4th floor", 186),
  createData('01-09-2022 2.00pm-4.00pm','SCS 2207', 'Programming Language', "4th floor", 186),
  createData('01-09-2022 2.00pm-4.00pm','SCS 2208', 'RAD', "4th floor", 186),
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
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="left">{row.subCode}</StyledTableCell>
              <StyledTableCell align="left">{row.subName}</StyledTableCell>
              <StyledTableCell align="center">{row.venue}</StyledTableCell>
              <StyledTableCell align="center">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StuAttMarkingTT
