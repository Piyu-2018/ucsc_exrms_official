import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CreateIcon from '@mui/icons-material/Create';
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../constants/globalConstants";
import Modal from './Modal';


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
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(IndexNumber, Q1, Q2, Q3, Q4, AssignMarks,TotalMarks, Grade) {
  return { IndexNumber, Q1, Q2, Q3, Q4, AssignMarks,TotalMarks , Grade};
}


export default function CustomizedTables(props) {
  console.log(props.option);
  console.log(props.year);
  console.log(props.semester);
  console.log(props.degree);
  console.log(props.subject);
  const [examinationData, setExaminationData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;

  const acYear = props.option;
  const year = props.year;
  const semester = props.semester ;
  const degree = props.degree;
  const subject = props.subject;

  useEffect(() => {
   
    getResult1();

  }, [acYear,year, semester, degree, subject])
 

  const getResult1 = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
  console.log("Hi");

  await axios
      .get(API_URL+`/settings/getResult1/${acYear}/${year}/${semester}/${degree}/${subject}`,config)
      .then((response) => {
        setExaminationData(response.data);
        console.log(response.data);
        console.log("siuvnfiv");
      });
  };

  useEffect(() => {
    getResult1();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

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
            <StyledTableCell align="left"> </StyledTableCell>
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
              <StyledTableCell align="left">{data.assignment_mark}</StyledTableCell>
              <StyledTableCell align="left">{data.total_mark}</StyledTableCell>
              <StyledTableCell align="left">{data.grade}</StyledTableCell>
              <StyledTableCell align="left">{data.Edit}<button className="openModalBtn" onClick={() => {setModalOpen(true);}}>{/* <CreateIcon fontSize="small" sx={{Floatleft: 50}} /> */}EDIT</button></StyledTableCell>
              {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
