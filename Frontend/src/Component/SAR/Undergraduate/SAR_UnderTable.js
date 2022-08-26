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

const rows = [
    createData(19001411,'2019/CS/141','Dinil Seniru Ratnayake'),
    createData(19001428,'2019/CS/142','Janitha Ratnayake'),
    createData(19001381,'2019/CS/138','Piyumi Rathnayaka'),
    createData(19001411,'2019/CS/141','Dinil Seniru Ratnayake'),
];

export default function CustomizedTables() {
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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.IndexNumber}</StyledTableCell>
              <StyledTableCell align="left">{row.RegistrationNumber}</StyledTableCell>
              <StyledTableCell align="left">{row.Name}</StyledTableCell>
              <StyledTableCell align="left">{row.MoreAction}<Button variant="contained">View Profile</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
