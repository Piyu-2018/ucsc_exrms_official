import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link } from '@mui/material';

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

function createData(subCode, subName, credits,lecturers,instructors) {
  return { subCode, subName, credits,lecturers,instructors };
}

const data = [
  createData('SCS 2201', 'Data Structures & Algorithm III', '3','Mr. A. K. Saman','Mr. K. G. Lakshan'),
  createData('SCS 2203', 'Software Engineering III', '2','Mrs. P. Sanduni','Miss. S. S. Malsha'),
  createData('SCS 2204', 'Functional Programming', '3','Mrs. G. Nimali','Mr. K. G. Lakshan'),
  createData('SCS 2205', 'Computer Network I', '2','Mr. A. K. Saman','Miss. S. S. Malsha'),
  createData('SCS 2206', 'Mathematical Methods II', '2','Mr. S. Shanaka','Mr. K. G. Lakshan'),
  createData('SCS 2207', 'Programming Language', '3','Mr. Namal Perera','Miss. S. S. Malsha'),
  createData('SCS 2208', 'RAD', '3','Mr. Kasun Gamage','Miss. S. S. Malsha'),
];

function LecturerDetails() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subject Code</StyledTableCell>
            <StyledTableCell align="left">Subject Name</StyledTableCell>
            <StyledTableCell align="left">Credits</StyledTableCell>
            <StyledTableCell align="left">Lecturers</StyledTableCell>
            <StyledTableCell align="left">Instructors</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.subCode}
              </StyledTableCell>
              <StyledTableCell align="left">{row.subName}</StyledTableCell>
              <StyledTableCell align="left">{row.credits}</StyledTableCell>
              <StyledTableCell align="left">{row.lecturers}</StyledTableCell>
              <StyledTableCell align="left">{row.instructors}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {LecturerDetails};
