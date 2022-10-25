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
import React, { useEffect, useState } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import axios from "axios";
import { API_URL } from "../../constants/globalConstants";
import { useSelector } from "react-redux";

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

function LecResultsTable(props) {
  console.log(props.index_data);

  // console.log(assign[0].name);

  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [distinctIndex, setDistinctIndex] = useState([]);
  console.log(props.course_id);

  const getDistinctIndex = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getDistinctIndex/${props.course_id}`, config)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setDistinctIndex(response.data);
      });
  };

  useEffect(() => {
    getDistinctIndex();
  }, []);

  console.log(distinctIndex);

  const rows = [
    createData(
      <Typography variant="h6" theme={theme}>
        1
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001428
      </Typography>,
      <Typography variant="h6" theme={theme}>
        90
      </Typography>,
      <Typography variant="h6" theme={theme}>
        A+
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        2
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001821
      </Typography>,
      <Typography variant="h6" theme={theme}>
        88
      </Typography>,
      <Typography variant="h6" theme={theme}>
        A
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        3
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001378
      </Typography>,
      <Typography variant="h6" theme={theme}>
        70
      </Typography>,
      <Typography variant="h6" theme={theme}>
        B
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        4
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001114
      </Typography>,
      <Typography variant="h6" theme={theme}>
        60
      </Typography>,
      <Typography variant="h6" theme={theme}>
        C+
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        5
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001625
      </Typography>,
      <Typography variant="h6" theme={theme}>
        65
      </Typography>,
      <Typography variant="h6" theme={theme}>
        C
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        6
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001428
      </Typography>,
      <Typography variant="h6" theme={theme}>
        60
      </Typography>,
      <Typography variant="h6" theme={theme}>
        C-
      </Typography>
    ),
    createData(
      <Typography variant="h6" theme={theme}>
        7
      </Typography>,
      <Typography variant="h6" theme={theme}>
        19001851
      </Typography>,
      <Typography variant="h6" theme={theme}>
        55
      </Typography>,
      <Typography variant="h6" theme={theme}>
        D
      </Typography>
    ),
  ];
  return (
    <>
      <TableContainer component={Paper} sx={{ mt: "20px", ml: "240px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">
                <Typography variant="h6">Index Number</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Examination Marks</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Assignment Marks</Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography variant="h6">Total Marks</Typography>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {distinctIndex.map((row) => (
              <StyledTableRow key={row.index_number}>
                <StyledTableCell component="th" scope="row">
                  {row.index_number}
                </StyledTableCell>
                <Welcome
                  index_number={row.index_number}
                  course_id={props.course_id}
                />
                {/* <StyledTableCell>{row.marks1} hi</StyledTableCell>
              <StyledTableCell>{row.marks2}</StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

function Welcome(props) {
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [marks, setMarks] = useState([]);
  const [assign, setAssign] = useState([]);
  const [weights, setweights] = useState([]);
  const [total, setTotal] = useState(0);
  // const tot = 0;

  const getMarks = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(
        API_URL +
          `/settings/getExamTotalMarks/${props.course_id}/${props.index_number}`,
        config
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setMarks(response.data);
      });
  };

  const getAssign = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(
        API_URL +
          `/settings/getAssignTotalMarks/${props.course_id}/${props.index_number}`,
        config
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setAssign(response.data);
      });
  };

  const getWeights = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(
        API_URL +
          `/settings/getTotalExam/${props.course_id}/${props.index_number}`,
        config
      )
      .then((response) => {
        console.log(response.data);

        console.log(response.data.length);
        setweights(response.data);
      });
  };

  useEffect(() => {
    getMarks();
    getAssign();
    getWeights();
  }, []);

  console.log(marks);
  //  console.log(marks.marks_by_second_marker.reduce((a,b)=>a+b,0));

  return (
    <>
      {marks.map((row) => (
        <StyledTableCell>{row.total}</StyledTableCell>
      ))}
      {assign.map((row) => (
        <StyledTableCell>{row.total}</StyledTableCell>
      ))}

      <StyledTableCell>{weights}</StyledTableCell>
    </>
  );
}

export default LecResultsTable;
