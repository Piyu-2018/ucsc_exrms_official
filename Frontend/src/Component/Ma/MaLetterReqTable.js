import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, Typography, Chip } from '@mui/material';

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants/globalConstants";


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


function MaLetterReqTable(props) {

  const [reqLetterData, setReqLetterData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getLetterRequest = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getLetterRequest/", config)
      .then((response) => {
        setReqLetterData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getLetterRequest();
  }, []);

  console.log(props);


  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
  // console.log(assign[0].name);

  function paymentStatus(param) {
    switch (param) {
      case 'Pending':
        return <Typography sx={{color:"orange"}}>{param}</Typography> ;
      case 'Approved':
        return <Typography sx={{color:"green"}}>{param}</Typography> ;
      case 'Rejected':
        return <Typography sx={{color:"red"}}>{param}</Typography> ;
    }
  }

  function letterStatus(param2){
    switch (param2) {
      case 'pending':
        return <Chip label="Pending" sx={{ backgroundColor: "ash", fontWeight: "bold", color: "orange" }} />;

      case 'completed':
        return <Chip label="Completed" sx={{ backgroundColor: "#69cb35", fontWeight: "bold" }} />;

      case 'rejected':
        return <Chip label="Disabled" sx={{ backgroundColor: "ash", fontWeight: "bold", color: "red" }} />;

      default :
        return <Chip label ={<Link href="/req_letter" underline="always">Edit Letter</Link>} sx={{ backgroundColor: "orange", fontWeight: "bold", fontWeight:"600", textDecoration:"underline" }} />;

    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NO</StyledTableCell>
            <StyledTableCell align="left">Index NO:</StyledTableCell>
            <StyledTableCell align="left">Registration NO:</StyledTableCell>
            <StyledTableCell align="left">Study Year</StyledTableCell>
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Payment Method</StyledTableCell>
            <StyledTableCell align="left">Payment Status</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reqLetterData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="data">
                {data.letter_id}
              </StyledTableCell>
              <StyledTableCell align="left">{data.index_no}</StyledTableCell>
              <StyledTableCell align="left">{data.reg_no}</StyledTableCell>
              <StyledTableCell align="center">{data.study_year}</StyledTableCell>
              <StyledTableCell align="left">{data.email}</StyledTableCell>
              <StyledTableCell align="left">{data.address}</StyledTableCell>
              <StyledTableCell align="left">{data.payment_voucher}</StyledTableCell>
              <StyledTableCell align="left">{paymentStatus(data.status)}</StyledTableCell>
              <StyledTableCell align="left">{letterStatus(data.letter_status)}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaLetterReqTable
