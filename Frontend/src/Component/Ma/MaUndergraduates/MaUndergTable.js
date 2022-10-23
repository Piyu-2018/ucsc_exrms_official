import * as React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Link, styled, Paper,TableRow,TableHead,TableContainer,TableBody,Table, Typography } from '@mui/material';



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

// function createData(index, regNo, name, email, address, telephone,option) {
//   return { index, regNo, name, email, address, telephone,option };
// }
// const btn = <Link sx={{color:"black"}}>View More</Link>;


function MaUndergTable(props) {

  const [studentData, setStudentData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);
  
  const getStudents = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getStudents/", config)
      .then((response) => {
        setStudentData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getStudents();
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
            <StyledTableCell align="left">Email</StyledTableCell>
            <StyledTableCell align="left">Address</StyledTableCell>
            <StyledTableCell align="left">Telephone</StyledTableCell>
            <StyledTableCell align="left">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="data">
                {data.index_no}
              </StyledTableCell>
              <StyledTableCell align="left">{data.reg_no}</StyledTableCell>
              <StyledTableCell align="left">{data.name_initial}</StyledTableCell>
              <StyledTableCell align="left">HI</StyledTableCell>
              <StyledTableCell align="left">{data.address_no}</StyledTableCell>
              <StyledTableCell align="left">{data.telep_1}</StyledTableCell>
              <StyledTableCell align="left">hi2</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MaUndergTable;
