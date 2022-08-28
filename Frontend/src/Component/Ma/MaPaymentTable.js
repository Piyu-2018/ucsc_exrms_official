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
  Chip,
} from "@mui/material";
import React from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import LecYears from "../Lecturer/Gradings/LecYears";
import { Box } from "@mui/system";
import MaPayStatus from "./MaPayStatus";

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

function MaPaymentTable(props) {
  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
  // console.log(assign[0].name);

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: "20px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Typography variant="h6">Index Number</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Process</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Amount</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Payment Status</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Actions</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  19001134
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  Transcript Letter Request
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  400
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Chip label="Pending" sx={{ backgroundColor: "#fcc603" }} />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Box>
                  <Button variant="contained" endIcon={<DoubleArrowIcon />}>
                    <a href="./slip.jpeg" target="_blank">
                      <Typography variant="p" sx={{ color: "white" }}>
                        View Slip
                      </Typography>
                    </a>
                  </Button>
                  <MaPayStatus />
                </Box>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  19001234
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  Registration Payment
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  1500
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Chip label="Approved" color="success" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Box>
                  <Button variant="contained" endIcon={<DoubleArrowIcon />}>
                    <a href="./slip.jpeg" target="_blank">
                      <Typography variant="p" sx={{ color: "white" }}>
                        View Slip
                      </Typography>
                    </a>
                  </Button>
                  <MaPayStatus />
                </Box>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  19001444
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  Rescrutinization payment
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  200
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Chip label="Rejected" color="error" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Box>
                  <Button variant="contained" endIcon={<DoubleArrowIcon />}>
                    <a href="./slip.jpeg" target="_blank">
                      <Typography variant="p" sx={{ color: "white" }}>
                        View Slip
                      </Typography>
                    </a>
                  </Button>
                  <MaPayStatus />
                </Box>
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  19001851
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  Status Letter
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  200
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Chip label="Approved" color="success" />
              </StyledTableCell>
              <StyledTableCell align="left">
                <Box>
                  <Button variant="contained" endIcon={<DoubleArrowIcon />}>
                    <a href="./slip.jpeg" target="_blank">
                      <Typography variant="p" sx={{ color: "white" }}>
                        View Slip
                      </Typography>
                    </a>
                  </Button>
                  <MaPayStatus />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MaPaymentTable;
