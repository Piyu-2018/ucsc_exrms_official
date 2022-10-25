import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
    backgroundColor: "#C4DDFF",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function LecturerDetails(props) {
  const [courseData, setCourseData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getCourse = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getCourse/", config)
      .then((response) => {
        setCourseData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getCourse();
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
            <StyledTableCell align="left">Credits</StyledTableCell>
            <StyledTableCell align="left">Lecturers</StyledTableCell>
            <StyledTableCell align="left">Weight For Exams</StyledTableCell>
            <StyledTableCell align="left">Weight For Asignment</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseData.map((data) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="data">
                {data.course_code}
              </StyledTableCell>
              <StyledTableCell align="left">{data.course_name}</StyledTableCell>
              <StyledTableCell align="left">{data.credit}</StyledTableCell>
              <StyledTableCell align="left">
                {data.lecture_name}
              </StyledTableCell>
              <StyledTableCell align="left">
                {data.weight_for_exam}
              </StyledTableCell>
              <StyledTableCell align="left">
                {data.weight_for_assignment}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export { LecturerDetails };
