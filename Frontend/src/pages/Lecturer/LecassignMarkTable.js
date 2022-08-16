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

function createData(index, name, marks, more) {
  return { index, name, marks, more };
}

const rows = [
  createData(
    <Typography variant="h6" theme={theme}>
      19001411
    </Typography>,
    <Typography variant="h6" theme={theme}>
      B.G.D.S.B. Ratnayake
    </Typography>,
    <Typography variant="h6" theme={theme}>
      90
    </Typography>,
    <Button variant="contained" endIcon={<DoubleArrowIcon />}>
      Enter Marks
    </Button>
  ),
  createData(
    <Typography variant="h6" theme={theme}>
      19001428
    </Typography>,
    <Typography variant="h6" theme={theme}>
      J.D. Ratnayake
    </Typography>,
    <Typography variant="h6" theme={theme}>
      80
    </Typography>,
    <Button variant="contained" endIcon={<DoubleArrowIcon />}>
      Enter Marks
    </Button>
  ),
  createData(
    <Typography variant="h6" theme={theme}>
      19001411
    </Typography>,
    <Typography variant="h6" theme={theme}>
      B.G.D.S.B. Ratnayake
    </Typography>,
    <Typography variant="h6" theme={theme}>
      -
    </Typography>,
    <Button variant="contained" endIcon={<DoubleArrowIcon />}>
      Enter Marks
    </Button>
  ),
];

function LecassignMarkTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index Number</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Marks</StyledTableCell>
            <StyledTableCell>More Options</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.index}>
              <StyledTableCell component="th" scope="row">
                {row.index}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.marks}</StyledTableCell>
              <StyledTableCell>{row.more}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LecassignMarkTable;
