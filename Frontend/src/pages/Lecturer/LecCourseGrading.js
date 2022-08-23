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
import LecCourseGradingCard from "../../Component/Lecturer/LecCourseGradingCard";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecCourseGrading() {
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
              Subject Wise Progress
            </Typography>
          </Grid>

          <Grid container spacing={3} sx={{ marginTop: "20px", ml: "180px" }}>
            <Grid item xs={12} sm={6}>
              <LecCourseGradingCard
                CourseCode={"SCS3302"}
                CourseName={"Middleware Architecture"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <LecCourseGradingCard
                CourseCode={"SCS3301"}
                CourseName={"Machine Learning and Neural Computing"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecCourseGrading;

// Sa.maya996
