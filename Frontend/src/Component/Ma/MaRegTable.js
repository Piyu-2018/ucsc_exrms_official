import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link, Paper,TableRow,TableHead,TableContainer,TableBody,Table } from '@mui/material';


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

function createData( name, email, address, telephone,option) {
  return { name, email, address, telephone,option };
}
const btn = <Link sx={{color:"black"}}>View More</Link>;

const rows = [
  createData('M. S. Dewanarayana', 'ewanarayana@gmail.com', 'Uyanwatta, Matara', '0766824511',btn),
  createData('B. A. P. Hiruthma', 'iruthm@gmail.com', 'Ambalangoda, Galle', '0713486873',btn),
  createData('H. D. A. Dhanapala', 'dilsithmiabeywickrama@gmail.com', 'Telijjawila, Matara', '0783457128',btn),
  createData('A. B. C. Kasun', 'asun@gmail.com', 'Karapitiya,Galle', '07198746271',btn),
  createData('K. P. Saman', 'aman@gmail.com', 'Kamburupitiya, Matara', '0702985461',btn),
  createData('D. D. Damitha', 'amitha@gmail.com', '1st Lane, Colombo 07', '0761267387',btn),
  createData('A. B. Nimal', 'nimal@gmail.com', 'Rose, Angoda', '0789063275',btn),
  createData('G. A. Sanduni', 'anduni@gmail.com', '1/117, Galewela', '0719876543',btn),
  createData('W. A. Hirushika', 'irushik@gmail.com', '10, WR street, Kohuwala', '0761235678',btn),
  createData('S. D. Perera', 'erera@gmail.com', 'Dondra, Matara', '0766824511',btn),
  
];

function MaRegTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Telephone</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
              {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.email}</StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
              <StyledTableCell align="left">{row.telephone}</StyledTableCell>
              <StyledTableCell align="left">{row.option}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaRegTable
