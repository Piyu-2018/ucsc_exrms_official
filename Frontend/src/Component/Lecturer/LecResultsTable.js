import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  createTheme,
  Typography,
} from "@mui/material";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// const UsFormatter = new Intl.DateTimeFormat('en-US')

const theme = createTheme({
  typography: {
    h6: {
      color: "#06283D",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#06283D",
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

function createData(Position, IndexNumber, Marks, Grading) {
  return { Position, IndexNumber, Marks, Grading };
}

function LecResultsTable() {
  // console.log(props.AssignData);

  // console.log(assign[0].name);

  const rows = [
    createData(
      <Typography variant="h6" theme={theme}>
        1
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001428
      </Typography>,
      <Typography variant="h6" theme={theme}>
        90
      </Typography>,
      <Typography variant="h6" theme={theme}>
        A+
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        2
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001821
      </Typography>,
      <Typography variant="h6" theme={theme}>
        88
      </Typography>,
      <Typography variant="h6" theme={theme}>
        A
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        3
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001378
      </Typography>,
      <Typography variant="h6" theme={theme}>
        70
      </Typography>,
      <Typography variant="h6" theme={theme}>
        B
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        4
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001114
      </Typography>,
      <Typography variant="h6" theme={theme}>
        60
      </Typography>,
      <Typography variant="h6" theme={theme}>
        C+
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        5
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001625
      </Typography>,
      <Typography variant="h6" theme={theme}>
        65
      </Typography>,
      <Typography variant="h6" theme={theme}>
        C
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        6
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001428
      </Typography>,
      <Typography variant="h6" theme={theme}>
        60
      </Typography>,
      <Typography variant="h6" theme={theme}>
        C-
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        7
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001851
      </Typography>,
      <Typography variant="h6" theme={theme}>
        55
      </Typography>,
      <Typography variant="h6" theme={theme}>
        D
      </Typography>
    ),
  ];
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: "20px", ml: "240px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Typography variant="h6">Position</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Index Number</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Marks</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Grading</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row.Position}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.IndexNumber}
                </StyledTableCell>
                <StyledTableCell align="left">{row.Marks}</StyledTableCell>
                <StyledTableCell align="left">{row.Grading}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default LecResultsTable;
