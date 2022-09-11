import { Box, createTheme, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LecExamMarksAdd from "../../Component/Lecturer/Examinations/LecExamMarksAdd";
import LecExamMarkTable from "../../Component/Lecturer/Examinations/LecExamMarkTable";
import LecAddExamFile from "../../Component/Lecturer/LecAddExamFile";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import { API_URL } from "../../constants/globalConstants";
import LecSidebar from "./LecSidebar";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecCourseMarking() {
  const { CourseId, MarkingStatus } = useParams();

  // Getting Question Details
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [questionData, setQuestionData] = useState([]);

  const getQuestion = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(
        API_URL + `/settings/getExaminationQuestion/${user_id}/${CourseId}`,
        config
      )
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setQuestionData(response.data);
      });
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const open = true;
  return (
    <>
      <Box>
        <LecNavBar open={true} />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={4} sm={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme} sx={{ mb: "30px" }}>
              Examination Marks
            </Typography>

            <LecExamMarkTable QuestionData={questionData} course_id = {CourseId}/>
            <LecExamMarksAdd />
            <LecAddExamFile />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecCourseMarking;
