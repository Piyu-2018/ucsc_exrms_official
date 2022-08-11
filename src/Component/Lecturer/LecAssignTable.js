import { Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

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
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(AssignmentName,Description,Contribution,Deadline) {
    return { AssignmentName,Description,Contribution,Deadline };
  }
  
  const rows = [
    createData('Assignment 1','Coding Assignment group','20%','August 15 2022'),
    createData('Assignment 2','Individual Review Paper','20%','August 17 2022'),
    
  ];

function LecAssignTable() {
  return (
    <>
            <TableContainer component={Paper} sx={{mt:"20px"}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="left">Assignment Name</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
                <StyledTableCell align="left">Contribution(%)</StyledTableCell>
                <StyledTableCell align="left">Deadline</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row.AssignmentName}</StyledTableCell>
                <StyledTableCell align="left">{row.Description}</StyledTableCell>
                <StyledTableCell align="left">{row.Contribution}</StyledTableCell>
                <StyledTableCell align="left">{row.Deadline}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
  )
}

export default LecAssignTable
