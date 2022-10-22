import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button, Paper,TableRow,TableHead,TableContainer,TableBody,Table } from '@mui/material';

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

function createData(index,regNo, name, option) {
  return { index,regNo, name, option };
}
const btn = <Button variant="contained" href="/ma_admission_card" sx={{color:"white", backgroundColor:"#8dabd8", height:"30px"}}>View Admission&nbsp;&nbsp;&nbsp;<KeyboardDoubleArrowRightIcon/></Button>;

const rows = [
  createData('19001381', '2019/CS/138', 'P. D. P. P. Rathnayaka', btn),
  createData('19000596', '2019/CS/059', 'B. A. P. Hiruthma', btn),
  createData('19000324', '2019/CS/032', 'H. D. A. Dhanapala', btn),
  createData('19000208', '2019/CS/020', 'A. B. C. Kasun',btn),
  createData('19000104', '2019/CS/010', 'K. P. Saman',btn),
  createData('19001861', '2019/CS/186', 'D. D. Damitha',btn),
  createData('19000324', '2019/CS/232', 'A. B. Nimal',btn),
  createData('19001324', '2019/CS/132', 'G. A. Sanduni', btn),
  createData('19000464', '2019/CS/046', 'W. A. Hirushika', btn),
  createData('19001784', '2019/CS/178', 'S. D. Perera', btn),
  
  
];

function MaAdmissionTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index NO:</StyledTableCell>
            <StyledTableCell align="left">Registration NO:</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Option</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.index}
              </StyledTableCell>
              <StyledTableCell align="left">{row.regNo}</StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.option}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaAdmissionTable
