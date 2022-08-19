import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import LecAssignmentCourses from "../../Component/Lecturer/LecAssignmentCourses";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecRightBar from "../../Component/Lecturer/LecRightBar";
import LecSidebar from "./LecSidebar";
import { useState } from "react";

function LecturerAssignments() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      <Box>
        <LecNavBar open={open} />

        <Grid container spacing={0} justifyContent="space-between">
          <Grid item sm={4} md={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <LecAssignmentCourses />
          </Grid>
          {/* <Grid item sm={0} md={3}>
            <LecRightBar />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
}

export default LecturerAssignments;
