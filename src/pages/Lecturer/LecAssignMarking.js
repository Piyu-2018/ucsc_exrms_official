import { Box, createTheme, Grid, Typography } from "@mui/material";
import React from "react";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecassignMarkTable from "./LecassignMarkTable";
import LecSidebar from "./LecSidebar";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecAssignMarking() {
  return (
    <>
      <Box>
        <LecNavBar />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={4} sm={2}>
            <LecSidebar />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme}>
              Assignment 1
            </Typography>
            <LecassignMarkTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecAssignMarking;
