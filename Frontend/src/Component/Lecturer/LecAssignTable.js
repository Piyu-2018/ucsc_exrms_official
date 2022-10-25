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
import { Link } from "react-router-dom";

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

function createData(
  AssignmentName,
  Description,
  Contribution,
  Deadline,
  Action
) {
  return { AssignmentName, Description, Contribution, Deadline, Action };
}

function LecAssignTable(props) {
  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: "20px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Typography variant="h6">Assignment Name</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Description</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Contribution(%)</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">More Actions</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assign.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.name}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.description}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Typography variant="h6" theme={theme}>
                    {row.contribution}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Button variant="contained" endIcon={<DoubleArrowIcon />}>
                    <Link to={"/lec_assign_marking/"+ row.assignment_id} sx={{ color: "white" }}>
                      <Typography
                        variant="h6"
                        theme={theme}
                        sx={{ color: "white" }}
                      >
                        Mark Assigment
                      </Typography>
                    </Link>
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default LecAssignTable;
