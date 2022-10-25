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
  IndexNumber,
  Q1,
  Q2,
  Q3,
  Q4,
  AssignMarks,
  TotalMarks,
  Grade
) {
  return { IndexNumber, Q1, Q2, Q3, Q4, AssignMarks, TotalMarks, Grade };
}

/* const rows = [
    createData(19001411,'2019|CS|141','80','70','B'),
    createData(19001428,'2019/CS/142','90','80 ','A'),
    createData(19001381,'2019/CS/138','85',' 76','A'),
    createData(19001411,'2019/CS/141','70',' 57','C'),
]; */

export default function CustomizedTables(props) {
  console.log(props.option);
  console.log(props.year);
  console.log(props.sem);
  console.log(props.degree);
  console.log(props.subject);
  console.log("Props end");
  const [examinationData, setExaminationData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;

  const acYear = props.option;
  const cuYear = props.year;
  const sem = props.sem;
  const degree = props.degree;
  const subject = props.subject;

  useEffect(() => {
    getResult();
  }, [acYear, cuYear, sem, degree, subject]);

  const getResult = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
    console.log("Hi");

    await axios
      .get(
        API_URL +
          `/settings/getResult/${acYear}/${cuYear}/${sem}/${degree}/${subject}`,
        config
      )
      .then((response) => {
        setExaminationData(response.data);

        console.log(response.data);
        console.log("Response data");
      });
  };

  useEffect(() => {
    getResult();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Index Number</StyledTableCell>
            <StyledTableCell align="left">Q1</StyledTableCell>
            <StyledTableCell align="left">Q2</StyledTableCell>
            <StyledTableCell align="left">Q3</StyledTableCell>
            <StyledTableCell align="left">Q4</StyledTableCell>
            <StyledTableCell align="left">Assignment Marks </StyledTableCell>
            <StyledTableCell align="left">Total Marks</StyledTableCell>
            <StyledTableCell align="left">Grade </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {examinationData.map((data) => (
            <StyledTableRow>
              <StyledTableCell align="left">{data.index_no}</StyledTableCell>
              <StyledTableCell align="left">{data.q1}</StyledTableCell>
              <StyledTableCell align="left">{data.q2}</StyledTableCell>
              <StyledTableCell align="left">{data.q3}</StyledTableCell>
              <StyledTableCell align="left">{data.q4}</StyledTableCell>
              <StyledTableCell align="left">{data.AssignMarks}</StyledTableCell>
              <StyledTableCell align="left">{data.TotalMarks}</StyledTableCell>
              <StyledTableCell align="left">{data.Grade}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
