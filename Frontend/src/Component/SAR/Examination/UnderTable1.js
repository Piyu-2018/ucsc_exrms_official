import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';


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

function createData(IndexNumber, SubMarks, AssignMarks,TotalMarks, Grade, Edit) {
  return { IndexNumber, SubMarks, AssignMarks,TotalMarks , Grade, Edit};
}

const rows = [
    createData(19001411,'2019|CS|141','80','70','B ',''),
    createData(19001428,'2019/CS/142','90','80 ','A',''),
    createData(19001381,'2019/CS/138','85',' 76','A',''),
    createData(19001411,'2019/CS/141','70',' 57','C',''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Index Number</StyledTableCell>
            <StyledTableCell align="left"> Subject Marks</StyledTableCell>
            <StyledTableCell align="left">Assigent nMarks </StyledTableCell>
            <StyledTableCell align="left">Total Marks</StyledTableCell>
            <StyledTableCell align="left">Grade </StyledTableCell>
            <StyledTableCell align="left"> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.IndexNumber}</StyledTableCell>
              <StyledTableCell align="left">{row.SubMarks}</StyledTableCell>
              <StyledTableCell align="left">{row.AssignMarks}</StyledTableCell>
              <StyledTableCell align="left">{row.TotalMarks}</StyledTableCell>
              <StyledTableCell align="left">{row.Grade}  </StyledTableCell>
              <StyledTableCell align="left">{row.Edit}<CreateIcon fontSize="small" sx={{Floatleft: 50}} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
