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

function createData(Position, IndexNumber, GPA, Action) {
  return { Position, IndexNumber, GPA, Action };
}

function LecGradingTable(props) {
  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
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
        4.0000
      </Typography>,
      <Button variant="contained" endIcon={<DoubleArrowIcon />}>
        View Gradings
      </Button>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        2
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001821
      </Typography>,
      <Typography variant="h6" theme={theme}>
        3.9902
      </Typography>,
      <Button variant="contained" endIcon={<DoubleArrowIcon />}>
        View Gradings
      </Button>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        3
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001378
      </Typography>,
      <Typography variant="h6" theme={theme}>
        3.9500
      </Typography>,
      <Button variant="contained" endIcon={<DoubleArrowIcon />}>
        View Gradings
      </Button>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        4
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001114
      </Typography>,
      <Typography variant="h6" theme={theme}>
        3.8700
      </Typography>,
      <Button variant="contained" endIcon={<DoubleArrowIcon />}>
        View Gradings
      </Button>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        5
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001625
      </Typography>,
      <Typography variant="h6" theme={theme}>
        3.7777
      </Typography>,
      <Button variant="contained" endIcon={<DoubleArrowIcon />}>
        View Gradings
      </Button>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        6
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001428
      </Typography>,
      <Typography variant="h6" theme={theme}>
        3.6565
      </Typography>,
      <Button variant="contained" endIcon={<DoubleArrowIcon />}>
        View Gradings
      </Button>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        7
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001851
      </Typography>,
      <Typography variant="h6" theme={theme}>
        3.6444
      </Typography>,
      <Button variant="contained" endIcon={<DoubleArrowIcon />}>
        View Gradings
      </Button>
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
                <Typography variant="h6">GPA</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">More Actions</Typography>
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
                <StyledTableCell align="left">{row.GPA}</StyledTableCell>
                <StyledTableCell align="left">{row.Action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default LecGradingTable;
