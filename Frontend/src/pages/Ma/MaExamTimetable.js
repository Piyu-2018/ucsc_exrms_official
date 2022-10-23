import { Box, Grid, Typography, CardContent, Card } from "@mui/material";
import React from "react";
import MaSidebar from "../../Component/Ma/MaSidebar";
// import MaNavBar from "../../Component/Ma/MaNavBar";
import { useState } from "react";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import MaCalendar from "../../Component/Ma/MaCalendar";
// import MaSidebar from "../../Component/Ma/MaSidebar";

function MaExamTimetable() {
  return (
    <>
      <Box sx={{ backgroundColor: "#E4EBF5" }}>
        <LecNavBar />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={4} md={2}>
            <MaSidebar />
          </Grid>
          <Grid item sm={8} md={10}>
            <Typography variant="h4" align="left">
              Exam Timetable
            </Typography>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
              <Card sx={{ backgroundColor: "#E4EBF5", width: "95%" }}>
                <CardContent>
                  <MaCalendar />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MaExamTimetable;
