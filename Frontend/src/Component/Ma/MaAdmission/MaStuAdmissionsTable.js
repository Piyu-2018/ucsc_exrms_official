import * as React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Button, Paper,TableRow,TableHead,TableContainer,TableBody,Table, Typography } from '@mui/material';

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../constants/globalConstants";

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


function MaAdmissionsTable(props) {

  const [stuAddmData, setStuAddmData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getStuAddmDetails = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getStuAddmDetails/", config)
      .then((response) => {
        setStuAddmData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getStuAddmDetails();
  }, []);

  console.log(props);

  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
  // console.log(assign[0].name);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Index NO:</StyledTableCell>
            <StyledTableCell align="left">Registration NO:</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Option</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stuAddmData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="data">
                {data.index_no}
              </StyledTableCell>
              <StyledTableCell align="left">{data.reg_no}</StyledTableCell>
              <StyledTableCell align="left">{data.user_id}</StyledTableCell>
              <StyledTableCell align="left">{data.user_id}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaAdmissionsTable
