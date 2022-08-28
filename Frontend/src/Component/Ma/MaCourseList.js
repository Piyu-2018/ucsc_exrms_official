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
    fontSize: 16,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: "black",
    fontWeight: 500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  
    backgroundColor: '#d3eaf2',
  
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(subCode, subName, credits,lecturers) {
  return { subCode, subName, credits,lecturers };
}

const reportLink = <Link href="#" underline="always" sx={{fontWeight:"600"}}>view report</Link>;


const rowscs1 = [
  createData('SCS 2201', 'Data Structures & Algorithm III', '3','Mr. A. K. Saman'),
  createData('SCS 2203', 'Software Engineering III', '2','Mrs. P. Sanduni'),
  createData('SCS 2204', 'Functional Programming', '3','Mrs. G. Nimali'),
  createData('SCS 2205', 'Computer Network I', '2','Mr. A. K. Saman'),
  createData('SCS 2206', 'Mathematical Methods II', '2','Mr. S. Shanaka'),
  createData('SCS 2207', 'Programming Language', '3','Mr. Namal Perera'),
  createData('SCS 2208', 'RAD', '3','Mr. Kasun Gamage'),
];
const rowscs2 = [
  createData('SCS 2201', 'Data Structures & Algorithm III', reportLink),
  createData('SCS 2203', 'Software Engineering III', reportLink),
  createData('SCS 2204', 'Functional Programming', reportLink),
  createData('SCS 2205', 'Computer Network I', reportLink),
  createData('SCS 2206', 'Mathematical Methods II', reportLink),
  createData('SCS 2207', 'Programming Language', reportLink),
  createData('SCS 2208', 'RAD', reportLink),
];
const rowsis1 = [
  createData('SIS 2201', 'Data Structures & Algorithm III', reportLink),
  createData('SIS 2203', 'Software Engineering III', reportLink),
  createData('SIS 2204', 'Functional Programming', reportLink),
  createData('SIS 2205', 'Computer Network I', reportLink),
  createData('SIS 2206', 'Mathematical Methods II', reportLink),
  createData('SIS 2207', 'Programming Language', reportLink),
  createData('SIS 2208', 'RAD', reportLink),
];
const rowsis2 = [
  createData('SIS 2201', 'Data Structures & Algorithm III', reportLink),
  createData('SIS 2203', 'Software Engineering III', reportLink),
  createData('SIS 2204', 'Functional Programming', reportLink),
  createData('SIS 2205', 'Computer Network I', reportLink),
  createData('SIS 2206', 'Mathematical Methods II', reportLink),
  createData('SIS 2207', 'Programming Language', reportLink),
  createData('SIS 2208', 'RAD', reportLink),
];

function CsFirstSemSubjects() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="a dense table">
        <TableHead >
          <TableRow sx={{backgroundColor:"#51abcd"}}>
            <TableCell sx={{fontWeight:"600"}}>Subject Code</TableCell>
            <TableCell align="left" sx={{fontWeight:"600"}}>Subject Name</TableCell>
            <TableCell align="left" sx={{fontWeight:"600"}}>Credits</TableCell>
            <TableCell align="left" sx={{fontWeight:"600"}}>Lecturers</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rowscs1.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.subCode}
              </StyledTableCell>
              <StyledTableCell align="left">{row.subName}</StyledTableCell>
              <StyledTableCell align="left">{row.credits}</StyledTableCell>
              <StyledTableCell align="left">{row.lecturers}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function CsSecondSemSubjects() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        
        <TableBody>
          {rowsis1.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.subCode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.subName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function IsFirstSemSubjects() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        
        <TableBody>
          {rowscs2.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.subCode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.subName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function IsSecondSemSubjects() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        
        <TableBody>
          {rowsis2.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.subCode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row.subName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export {CsFirstSemSubjects,CsSecondSemSubjects,IsFirstSemSubjects,IsSecondSemSubjects};
