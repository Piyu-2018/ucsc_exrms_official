import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, createTheme, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(index, marks1, marks2, more) {
  return { index, marks1, marks2, more };
}

const rows = [
  createData(
    <Typography variant="h6" theme={theme}>
      19001411
    </Typography>,
    <Typography variant="h6" theme={theme}>
      90
    </Typography>,
    <Typography variant="h6" theme={theme}>
      -
    </Typography>,
    <Button variant="contained" endIcon={<DoubleArrowIcon />}>
      View More Details
    </Button>
  ),
  createData(
    <Typography variant="h6" theme={theme}>
      19001428
    </Typography>,
    <Typography variant="h6" theme={theme}>
      80
    </Typography>,
    <Typography variant="h6" theme={theme}>
      -
    </Typography>,
    <Button variant="contained" endIcon={<DoubleArrowIcon />}>
      View More Details
    </Button>
  ),
  createData(
    <Typography variant="h6" theme={theme}>
      19001411
    </Typography>,
    <Typography variant="h6" theme={theme}>
      67
    </Typography>,
    <Typography variant="h6" theme={theme}>
      67
    </Typography>,
    <Button variant="contained" endIcon={<DoubleArrowIcon />}>
      View More Details
    </Button>
  ),
];

function LecExamMarkTable(props) {
  const QuestionData = props.QuestionData;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Index Number</StyledTableCell>
            <StyledTableCell colSpan={QuestionData.length}>Marks (1st Marking)</StyledTableCell>
            <StyledTableCell colSpan={QuestionData.length}>Marks (2nd Marking)</StyledTableCell>
            <StyledTableCell>Total Marks</StyledTableCell>
            </TableRow>
            <TableRow>
            <StyledTableCell >  </StyledTableCell>
            {
              QuestionData.map((row)=> (
                <>
                
                <StyledTableCell>Question {row.question_number}</StyledTableCell>
                
                </>
              ))
            }

{
              QuestionData.map((row)=> (
                <>
                
                <StyledTableCell>Question {row.question_number}</StyledTableCell>
                
                </>
              ))
            }
            <StyledTableCell >  </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.index}>
              <StyledTableCell component="th" scope="row">
                {row.index}
              </StyledTableCell>
              <StyledTableCell>{row.marks1}</StyledTableCell>
              <StyledTableCell>{row.marks2}</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LecExamMarkTable;
