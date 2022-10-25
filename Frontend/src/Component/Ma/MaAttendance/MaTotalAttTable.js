import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

// function createData(subCode, subName, stuRegistered, stuAttend) {
//   return { subCode, subName, stuRegistered, stuAttend };
// }

// const rows = [
//   createData('SCS 2201', 'Data Structures & Algorithm III', 190, 186),
//   createData('SCS 2203', 'Software Engineering III', 190, 186),
//   createData('SCS 2204', 'Functional Programming', 190, 186),
//   createData('SCS 2205', 'Computer Network I', 190, 186),
//   createData('SCS 2206', 'Mathematical Methods II', 190, 186),
//   createData('SCS 2207', 'Programming Language', 190, 186),
//   createData('SCS 2208', 'RAD', 190, 186),
// ];

function TotalAttendanceTable(props) {

  const [attendanceData, setAttendanceData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getAttendanceDetails = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getAttendanceDetails/", config)
      .then((response) => {
        setAttendanceData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getAttendanceDetails();
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
            <StyledTableCell>Subject Code</StyledTableCell>
            <StyledTableCell align="left">Subject Name</StyledTableCell>
            <StyledTableCell align="left">NO: of students registered</StyledTableCell>
            <StyledTableCell align="left">NO: of students attended</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="row">
                {data.sub_code}
              </StyledTableCell>
              <StyledTableCell align="left">{data.sub_name}</StyledTableCell>
              <StyledTableCell align="center">{data.registered_stu}</StyledTableCell>
              <StyledTableCell align="center">{data.stu_attended}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TotalAttendanceTable
