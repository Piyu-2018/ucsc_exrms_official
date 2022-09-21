import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import writeXlsxFile from "write-excel-file";
import { API_URL } from "../../constants/globalConstants";

function LecAddExamFile(props) {
  const [question, setQuestion] = useState(null);
  const [number, setNumber] = useState(0);
  const [index, setIndex] = useState(null);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const getQuestions = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(
        API_URL + `/settings/getQuestionFromCourse/${props.course_id}`,
        config
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setNumber(response.data.length);
        setQuestion(response.data);
        console.log("Questions set");
      });
  };

  const getIndex = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getIndexCourse/${props.course_id}`, config)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setIndex(response.data);
      });
  };

  useEffect(() => {
    getQuestions();
    getIndex();
  }, []);

  const schema = [
    {
      column: `index_number_of_students`,
      value: (student) => student.index_no,
      width: 20,
      type: Number,
      wrap: false,
    },
    {
      column: "question_1_marks",
      value: (student) => student.q1_1st,
      width: 20,
      type: Number,
    },
    {
      column: "question_2_marks",
      value: (student) => student.q1_1st,
      width: 20,
      type: Number,
    },
    {
      column: "question_3_marks",
      value: (student) => student.q1_1st,
      width: 20,
      type: Number,
    },
    {
      column: "question_4_marks",
      value: (student) => student.q1_1st,
      width: 20,
      type: Number,
    },
    {
      column: `Information Column : (${props.MarkingStatus}st marking ${number} questions to mark) `,
      value: (student) => student.q1_1st,
      width: 60,
      type: Number,
      wrap: true,
    },
  ];

  const handleClick = () => {
    WriteFile();
  };

  const WriteFile = async () => {
    await writeXlsxFile(index, {
      schema,
      headerStyle: {
        backgroundColor: "#eeeeee",
        fontWeight: "bold",
        align: "center",
        wrap: true,
      },
      fileName: "exam.xlsx",
    });
  };

  return (
    <>
      <Box>
        {/* <Button variant="outlined">Primary</Button> */}
        <Button variant="outlined" onClick={handleClick}>
          <Typography variant="p" sx={{ color: "black" }}>
            Download format file
          </Typography>
        </Button>
      </Box>
    </>
  );
}

export default LecAddExamFile;
