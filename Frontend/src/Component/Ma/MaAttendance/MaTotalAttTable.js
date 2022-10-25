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

function createData(subCode, subName, stuRegistered, stuAttend) {
  return { subCode, subName, stuRegistered, stuAttend };
}

const rows = [
  createData('SCS 2201', 'Data Structures & Algorithm III', 190, 186),
  createData('SCS 2203', 'Software Engineering III', 190, 186),
  createData('SCS 2204', 'Functional Programming', 190, 186),
  createData('SCS 2205', 'Computer Network I', 190, 186),
  createData('SCS 2206', 'Mathematical Methods II', 190, 186),
  createData('SCS 2207', 'Programming Language', 190, 186),
  createData('SCS 2208', 'RAD', 190, 186),
];

function TotalAttendanceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject Code</StyledTableCell>
            <StyledTableCell align="left">Subject Name</StyledTableCell>
            <StyledTableCell align="left">NO: of students registered</StyledTableCell>
            <StyledTableCell align="left">NO: of students attended</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.subCode}
              </StyledTableCell>
              <StyledTableCell align="left">{row.subName}</StyledTableCell>
              <StyledTableCell align="center">{row.stuRegistered}</StyledTableCell>
              <StyledTableCell align="center">{row.stuAttend}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TotalAttendanceTable
