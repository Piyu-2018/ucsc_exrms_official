import { Box, createTheme, Grid, Typography } from "@mui/material";
import React from "react";
// import LecAssignmentCourses from "../../Component/Lecturer/LecAssignmentCourses";
import LecAssignTable from "../../Component/Lecturer/LecAssignTable";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecAddAssign from "./LecAddAssign";
import LecSidebar from "./LecSidebar";
import { useParams } from "react-router";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants/globalConstants";
import LecAddFile from "../../Component/Lecturer/LecAddFile";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecAssignList() {
  const { CourseId } = useParams();
  const [AssignData, setAssignData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;

  const getAssign = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getAssign/" + CourseId + "/" + user_id, config)
      .then((response) => {
        setAssignData(response.data);

        // console.log(response.data);
      });
  };

  const getCourseName = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getCourseCode/${CourseId}`, config)
      .then((response) => {
        setCourseData(response.data);

        // console.log(response.data);
      });
  };

  useEffect(() => {
    getAssign();
    getCourseName();
  }, []);

  // console.log(CourseId);
  const open = true;
  console.log(open);
  return (
    <>
      <Box>
        <LecNavBar open={open} />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={4} sm={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme}>
              Assignments ({courseData[0] && courseData[0].course_code})
            </Typography>
            <LecAssignTable AssignData={AssignData} />
            <LecAddAssign CourseId={CourseId} assignDataFunc={setAssignData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecAssignList;

// Sa.maya996
