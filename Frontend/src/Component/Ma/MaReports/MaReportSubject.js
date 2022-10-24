import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Link } from '@mui/material';

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
  
    backgroundColor: '#E4EBF5',
  
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(subCode, subName, action) {
//   return { subCode, subName, action };
// }

const reportLink = <Link href="#" underline="always" sx={{fontWeight:"600"}}>view report</Link>;

// const data = [
//   createData('SCS 2201', 'Data Structures & Algorithm III', reportLink),
//   createData('SCS 2203', 'Software Engineering III', reportLink),
//   createData('SCS 2204', 'Functional Programming', reportLink),
//   createData('SCS 2205', 'Computer Network I', reportLink),
//   createData('SCS 2206', 'Mathematical Methods II', reportLink),
//   createData('SCS 2207', 'Programming Language', reportLink),
//   createData('SCS 2208', 'RAD', reportLink),
// ];


function SubjectsDisplay(props) {

  const [courseReportData, setCourseReportData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getCourseReport = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getCourseReport/", config)
      .then((response) => {
        setCourseReportData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getCourseReport();
  }, []);

  console.log(props);

  // console.log(props.AssignData);
  const assign = props.AssignData;
  console.log(props.AssignData);
  // console.log(assign[0].name);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        
        <TableBody>
          {courseReportData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="row">
                {data.course_code}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.course_name}
              </StyledTableCell>
              <StyledTableCell align="right">{reportLink}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export { SubjectsDisplay };
