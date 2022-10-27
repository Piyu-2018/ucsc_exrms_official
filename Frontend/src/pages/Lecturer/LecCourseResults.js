import { Box, createTheme, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import LecDegree from "../../Component/Lecturer/Gradings/LecDegree";
import LecGpaGraph from "../../Component/Lecturer/Gradings/LecGpaGraph";
import LecGradingTable from "../../Component/Lecturer/Gradings/LecGradingTable";
import LecYears from "../../Component/Lecturer/Gradings/LecYears";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecSidebar from "./LecSidebar";
// import SearchBar from "material-ui-search-bar";
import LecSearchGPAList from "../../Component/Lecturer/Gradings/LecSearchGPAList";
import LecResultsGraph from "../../Component/Lecturer/LecResultsGraph";
import LecResultsTable from "../../Component/Lecturer/LecResultsTable";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants/globalConstants";
import axios from "axios";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecCourseResults() {
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [distinctIndex, setDistinctIndex] = useState();
  const [courseData, setCourseData] = useState([]);

  const CourseId = useParams();
  console.log(CourseId.CourseId);
  const course_id = CourseId.CourseId;
  const getDistinctIndex = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getDistinctIndex/${CourseId.CourseId}`, config)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.length);
        setDistinctIndex(response.data);
      });
  };

  const getCourseName = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getCourseCode/${CourseId.CourseId}`, config)
      .then((response) => {
        setCourseData(response.data);

        // console.log(response.data);
      });
  };

  useEffect(() => {
    getDistinctIndex();
    getCourseName();
  }, []);

  const open = true;
  // var course = distinctIndex[0];
  // console.log(course.course_name);

  return (
    <>
      <Box>
        <LecNavBar open={open} />
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={4} sm={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme}>
              Subject Wise Progress (
              {courseData[0] && courseData[0].course_code})
            </Typography>

            <Box>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <LecResultsGraph />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <LecGpaGraph />
                </Grid> */}
              </Grid>
            </Box>
          </Grid>
          <LecSearchGPAList />
          <LecResultsTable course_id={course_id} index_data={distinctIndex} />
        </Grid>
      </Box>
    </>
  );
}

export default LecCourseResults;
