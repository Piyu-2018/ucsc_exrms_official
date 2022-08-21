import { Box, Grid } from "@mui/material";
import React from "react";
import LecExamUploads from "../../Component/Lecturer/ExamPaper/LecExamUploads";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecSidebar from "./LecSidebar";

function LecExamPaper() {
  const open = true;
  return (
    <>
      <Box>
        <LecNavBar open={open} />
        <Grid container spacing={0} justifyContent="space-between">
          <Grid item sm={4} md={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <Grid container sx={{ mt: "20px" }} spacing={3}>
              <Grid item xs={6} justifyContent="space-between">
                <LecExamUploads
                  courseCode="SCS3201"
                  courseName="Machine Learning and Neural Computing"
                />
              </Grid>
              <Grid item xs={6} justifyContent="space-between">
                <LecExamUploads
                  courseCode="SCS3202"
                  courseName="Middleware Architecture"
                />
              </Grid>
              <Grid item xs={6} justifyContent="space-between">
                <LecExamUploads
                  courseCode="SCS2205"
                  courseName="Network Engineering"
                />
              </Grid>
              <Grid item xs={6} justifyContent="space-between">
                <LecExamUploads
                  courseCode="SCS1202"
                  courseName="Laboratory I"
                />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item sm={0} md={3}>
            <LecRightBar />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
}

export default LecExamPaper;
