// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { API_URL } from "../../../constants/globalConstants";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#06283D",
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(
//   IndexNumber,
//   Q1,
//   Q2,
//   Q3,
//   Q4,
//   AssignMarks,
//   TotalMarks,
//   Grade
// ) {
//   return { IndexNumber, Q1, Q2, Q3, Q4, AssignMarks, TotalMarks, Grade };
// }

// /* const rows = [
//     createData(19001411,'2019|CS|141','80','70','B'),
//     createData(19001428,'2019/CS/142','90','80 ','A'),
//     createData(19001381,'2019/CS/138','85',' 76','A'),
//     createData(19001411,'2019/CS/141','70',' 57','C'),
// ]; */

// export default function CustomizedTables(props) {
//   console.log(props.option);
//   console.log(props.year);
//   console.log(props.sem);
//   console.log(props.degree);
//   console.log(props.subject);
//   console.log("Props end");
//   const [examinationData, setExaminationData] = useState([]);
//   const userInfo = useSelector((state) => state.userInfo);
//   const { accessToken } = userInfo.user;

//   const acYear = props.option;
//   const cuYear = props.year;
//   const sem = props.sem;
//   const degree = props.degree;
//   const subject = props.subject;

//   useEffect(() => {
//     getResult();
//   }, [acYear, cuYear, sem, degree, subject]);

//   const getResult = async () => {
//     const config = {
//       headers: {
//         authorization: accessToken,
//       },
//     };
//     console.log("Hi");

//     await axios
//       .get(
//         API_URL +
//           `/settings/getResult/${acYear}/${cuYear}/${sem}/${degree}/${subject}`,
//         config
//       )
//       .then((response) => {
//         setExaminationData(response.data);

//         console.log(response.data);
//         console.log("Response data");
//       });
//   };

//   useEffect(() => {
//     getResult();
//   }, []);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="left">Index Number</StyledTableCell>
//             <StyledTableCell align="left">Q1</StyledTableCell>
//             <StyledTableCell align="left">Q2</StyledTableCell>
//             <StyledTableCell align="left">Q3</StyledTableCell>
//             <StyledTableCell align="left">Q4</StyledTableCell>
//             <StyledTableCell align="left">Assignment Marks </StyledTableCell>
//             <StyledTableCell align="left">Total Marks</StyledTableCell>
//             <StyledTableCell align="left">Grade </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {examinationData.map((data) => (
//             <StyledTableRow>
//               <StyledTableCell align="left">{data.index_no}</StyledTableCell>
//               <StyledTableCell align="left">{data.q1}</StyledTableCell>
//               <StyledTableCell align="left">{data.q2}</StyledTableCell>
//               <StyledTableCell align="left">{data.q3}</StyledTableCell>
//               <StyledTableCell align="left">{data.q4}</StyledTableCell>
//               <StyledTableCell align="left">{data.assignment_mark}</StyledTableCell>
//               <StyledTableCell align="left">{data.total_mark}</StyledTableCell>
//               <StyledTableCell align="left">{data.grade}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';


// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { API_URL } from "../../../constants/globalConstants";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#06283D",
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// function createData(
//   IndexNumber,
//   Q1,
//   Q2,
//   Q3,
//   Q4,
//   AssignMarks,
//   TotalMarks,
//   Grade
// ) {
//   return { IndexNumber, Q1, Q2, Q3, Q4, AssignMarks, TotalMarks, Grade };
// }

// /* const rows = [
//     createData(19001411,'2019|CS|141','80','70','B'),
//     createData(19001428,'2019/CS/142','90','80 ','A'),
//     createData(19001381,'2019/CS/138','85',' 76','A'),
//     createData(19001411,'2019/CS/141','70',' 57','C'),
// ]; */

// export default function CustomizedTables(props) {
//   console.log(props.option);
//   console.log(props.year);
//   console.log(props.sem);
//   console.log(props.degree);
//   console.log(props.subject);
//   console.log("Props end");
//   const [examinationData, setExaminationData] = useState([]);
//   const userInfo = useSelector((state) => state.userInfo);
//   const { accessToken } = userInfo.user;

//   const acYear = props.option;
//   const cuYear = props.year;
//   const sem = props.sem;
//   const degree = props.degree;
//   const subject = props.subject;

//   useEffect(() => {
//     getResult();
//   }, [acYear, cuYear, sem, degree, subject]);

//   const getResult = async () => {
//     const config = {
//       headers: {
//         authorization: accessToken,
//       },
//     };
//     console.log("Hi");

//     await axios
//       .get(
//         API_URL +
//           `/settings/getResult/${acYear}/${cuYear}/${sem}/${degree}/${subject}`,
//         config
//       )
//       .then((response) => {
//         setExaminationData(response.data);

//         console.log(response.data);
//         console.log("Response data");
//       });
//   };

//   useEffect(() => {
//     getResult();
//   }, []);
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="left">Index Number</StyledTableCell>
//             <StyledTableCell align="left">Q1</StyledTableCell>
//             <StyledTableCell align="left">Q2</StyledTableCell>
//             <StyledTableCell align="left">Q3</StyledTableCell>
//             <StyledTableCell align="left">Q4</StyledTableCell>
//             <StyledTableCell align="left">Assignment Marks </StyledTableCell>
//             <StyledTableCell align="left">Total Marks</StyledTableCell>
//             <StyledTableCell align="left">Grade </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {examinationData.map((data) => (
//             <StyledTableRow>
//               <StyledTableCell align="left">{data.index_no}</StyledTableCell>
//               <StyledTableCell align="left">{data.q1}</StyledTableCell>
//               <StyledTableCell align="left">{data.q2}</StyledTableCell>
//               <StyledTableCell align="left">{data.q3}</StyledTableCell>
//               <StyledTableCell align="left">{data.q4}</StyledTableCell>
//               <StyledTableCell align="left">{data.assignment_mark}</StyledTableCell>
//               <StyledTableCell align="left">{data.total_mark}</StyledTableCell>
//               <StyledTableCell align="left">{data.grade}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import CreateIcon from '@mui/icons-material/Create';
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { API_URL } from "../../../constants/globalConstants";
// // import Modal from './Modal';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: '#06283D',
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(IndexNumber, Q1, Q2, Q3, Q4, AssignMarks,TotalMarks, Grade) {
//   return { IndexNumber, Q1, Q2, Q3, Q4, AssignMarks,TotalMarks , Grade};
// }




// export default function CustomizedTables(props) {
//   console.log(props.option);
//   console.log(props.year);
//   console.log(props.semester);
//   console.log(props.degree);
//   console.log(props.subject);
//   const [examinationData, setExaminationData] = useState([]);
//   const userInfo = useSelector((state) => state.userInfo);
//   const { accessToken } = userInfo.user;

//   const acYear = props.option;
//   const year = props.year;
//   const semester = props.semester ;
//   const degree = props.degree;
//   const subject = props.subject;

//   useEffect(() => {
   
//     getResult1();

//   }, [acYear,year, semester, degree, subject])
 

//   const getResult1 = async () => {
//     const config = {
//       headers: {
//         authorization: accessToken,
//       },
//     };
//   console.log("Hi");

//   await axios
//       .get(API_URL+`/settings/getResult1/${acYear}/${year}/${semester}/${degree}/${subject}`,config)
//       .then((response) => {
//         setExaminationData(response.data);
//         console.log(response.data);
//         console.log("siuvnfiv");
//       });
//   };

//   useEffect(() => {
//     getResult1();
//   }, []);

//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="left">Index Number</StyledTableCell>
//             <StyledTableCell align="left">Q1</StyledTableCell>
//             <StyledTableCell align="left">Q2</StyledTableCell>
//             <StyledTableCell align="left">Q3</StyledTableCell>
//             <StyledTableCell align="left">Q4</StyledTableCell>
//             <StyledTableCell align="left">Assignment Marks </StyledTableCell>
//             <StyledTableCell align="left">Total Marks</StyledTableCell>
//             <StyledTableCell align="left">Grade </StyledTableCell>
            
//           </TableRow>
//         </TableHead>
//         <TableBody>
//         {examinationData.map((data) => (
//             <StyledTableRow>
//               <StyledTableCell align="left">{data.index_no}</StyledTableCell>
//               <StyledTableCell align="left">{data.q1}</StyledTableCell>
//               <StyledTableCell align="left">{data.q2}</StyledTableCell>
//               <StyledTableCell align="left">{data.q3}</StyledTableCell>
//               <StyledTableCell align="left">{data.q4}</StyledTableCell>
//               <StyledTableCell align="left">{data.assignment_mark}</StyledTableCell>
//               <StyledTableCell align="left">{data.total_mark}</StyledTableCell>
//               <StyledTableCell align="left">{data.grade}</StyledTableCell>
            
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

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

function createData(Position, IndexNumber, Marks, Grading) {
  return { Position, IndexNumber, Marks, Grading };
}

function DirectorPRogReportRTable() {
  // console.log(props.AssignData);

  // console.log(assign[0].name);

  const rows = [
    createData(
      <Typography theme={theme}>
        1
      </Typography>,
      <Typography  theme={theme}>
        19001428
      </Typography>,
      <Typography  theme={theme}>
        90
      </Typography>,
      <Typography  theme={theme}>
        A+
      </Typography>
    ),
    createData(
      <Typography theme={theme}>
        2
      </Typography>,
      <Typography  theme={theme}>
        19001821
      </Typography>,
      <Typography  theme={theme}>
        88
      </Typography>,
      <Typography theme={theme}>
        A
      </Typography>
    ),
    createData(
      <Typography  theme={theme}>
        3
      </Typography>,
      <Typography  theme={theme}>
        19001378
      </Typography>,
      <Typography  theme={theme}>
        70
      </Typography>,
      <Typography  theme={theme}>
        B
      </Typography>
    ),
    createData(
      <Typography  theme={theme}>
        4
      </Typography>,
      <Typography  theme={theme}>
        19001114
      </Typography>,
      <Typography  theme={theme}>
        60
      </Typography>,
      <Typography theme={theme}>
        C+
      </Typography>
    ),
    createData(
      <Typography  theme={theme}>
        5
      </Typography>,
      <Typography theme={theme}>
        19001625
      </Typography>,
      <Typography  theme={theme}>
        65
      </Typography>,
      <Typography  theme={theme}>
        C
      </Typography>
    ),
    createData(
      <Typography  theme={theme}>
        6
      </Typography>,
      <Typography  theme={theme}>
        19001428
      </Typography>,
      <Typography  theme={theme}>
        60
      </Typography>,
      <Typography  theme={theme}>
        C-
      </Typography>
    ),
    createData(
      <Typography  theme={theme}>
        7
      </Typography>,
      <Typography  theme={theme}>
        19001851
      </Typography>,
      <Typography  theme={theme}>
        55
      </Typography>,
      <Typography  theme={theme}>
        D
      </Typography>
    ),
  ];
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: "20px"}}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Typography variant="h6">Position</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Index Number</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Marks</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Grading</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="left">{row.Position}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.IndexNumber}
                </StyledTableCell>
                <StyledTableCell align="left">{row.Marks}</StyledTableCell>
                <StyledTableCell align="left">{row.Grading}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default DirectorPRogReportRTable;
