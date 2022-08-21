import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, Typography } from '@mui/material';

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

function createData(no, index, regNo, name,year, address,pMethod,pStatus,action ) {
  return { no, index,regNo, name, year, address,pMethod,pStatus,action };
}
const editLetter = <Link href="#" underline="always" sx={{fontWeight:"600"}}>Edit Letter</Link>;
const completed = <Typography sx={{color:"green"}}>Completed</Typography>;
const success = <Typography sx={{color:"green"}}>Successfull</Typography>;
const faild = <Typography sx={{color:"red"}}>Payment Faild</Typography>;
const faildtosend = <Typography sx={{color:"red"}}>Disabled</Typography>;

const rows = [
  createData('1','19000324', '2019/CS/032', 'H. D. A. Dhanapala', '3', 'Telijjawila, Matara', 'Online',success,editLetter),
  createData('2','20000316', '2019/CS/031', 'M. S. Dewanarayana', '2', 'Uyanwatta, Matara', 'Slip Uploaded', success,editLetter),
  createData('3','20000901', '2019/CS/090', 'S. S. Malsha', '2', 'Kamburupitiya, Matara', 'Slip Uploaded', faild,faildtosend),
  createData('4','19000596', '2019/CS/059', 'B. A. P. Hiruthma', '3', 'Ambalangoda, Galle', 'Online', success,completed),
  createData('5','19000208', '2019/CS/020', 'A. B. C. Kasun', '3', 'Karapitiya,Galle', 'Online', success,completed),
  createData('6','18001861', '2019/CS/186', 'D. D. Damitha', '4', '1st Lane, Colombo 07', 'Slip Uploaded', success,completed),
  createData('7','19001324', '2019/CS/132', 'G. A. Sanduni', '3', 'Rose, Angoda', 'Slip Uploaded', faild,faildtosend),
  createData('8','19000464', '2019/CS/046', 'W. A. Hirushika', '3', '1/117, Galewela', 'Online', success,completed),
  createData('9','18001784', '2019/CS/178', 'S. D. Perera', '4', '10, WR street, Kohuwala', 'Online', success,completed),
  createData('10','19000104', '2019/CS/010', 'K. P. Saman', '3', 'Dondra, Matara', 'Online', success,completed),
  
];

function MaLetterReqTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NO</StyledTableCell>
            <StyledTableCell align="left">Index NO:</StyledTableCell>
            <StyledTableCell align="left">Registration NO:</StyledTableCell>
            <StyledTableCell align="left">Study Year</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Payment Method</StyledTableCell>
            <StyledTableCell align="left">Payment Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell align="left">{row.index}</StyledTableCell>
              <StyledTableCell align="left">{row.regNo}</StyledTableCell>
              <StyledTableCell align="center">{row.year}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.address}</StyledTableCell>
              <StyledTableCell align="left">{row.pMethod}</StyledTableCell>
              <StyledTableCell align="left">{row.pStatus}</StyledTableCell>
              <StyledTableCell align="left">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaLetterReqTable
