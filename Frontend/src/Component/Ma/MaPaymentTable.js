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
import { Box } from "@mui/system";
import MaPayStatus from "./MaPayStatus";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants/globalConstants";

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

// function createData(Position, IndexNumber, GPA, Action) {
//   return { Position, IndexNumber, GPA, Action };
// }

function MaPaymentTable(props) {
  
  const [paymentData, setPaymentData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getPayment = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getPayment/", config)
      .then((response) => {
        setPaymentData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getPayment();
  }, []);

  console.log(props);


  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
  // console.log(assign[0].name);

  function statusDisplay(param) {
    switch (param) {
      case 'Pending':
        return <Chip label={param} sx={{ backgroundColor: "#fcc603" }} /> ;
      case 'Approved':
        return <Chip label={param} color="success" /> ;
      case 'Rejected':
        return <Chip label={param} color="error" /> ;
    }
  }

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
            {paymentData.map((data) => (
            <StyledTableRow >
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  {data.index_no}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  {data.process}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6" theme={theme}>
                  {data.amount}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                {statusDisplay(data.status)}
                
              </StyledTableCell>
              
              <StyledTableCell align="left">
                <Box>
                  <Button variant="contained" endIcon={<DoubleArrowIcon />}>
                    <a href={'./slips/' + data.uploaded_img} target="_blank">
                      <Typography variant="p" sx={{ color: "white" }}>
                        View Slip
                      </Typography>
                    </a>
                  </Button>
                  <MaPayStatus />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
            ))}
            
  
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MaPaymentTable;
