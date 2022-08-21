import { Box, createTheme, Grid, Typography } from "@mui/material";
import React from "react";
import LecExamMarksAdd from "../../Component/Lecturer/Examinations/LecExamMarksAdd";
import LecExamMarkTable from "../../Component/Lecturer/Examinations/LecExamMarkTable";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecSidebar from "./LecSidebar";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecCourseMarking() {
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
              Assignment 1
            </Typography>

            <LecExamMarkTable />
            <LecExamMarksAdd />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecCourseMarking;
