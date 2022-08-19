import { Box, createTheme, Grid, Typography } from "@mui/material";
import React from "react";
import LecAssignAdd from "../../Component/Lecturer/LecAssignAdd";
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
  const open = true;
  console.log(open);
  return (
    <>
      <Box>
        <LecNavBar open={true} />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={4} sm={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme}>
              Assignment 1
            </Typography>
            <LecAssignAdd />
            <LecassignMarkTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecAssignMarking;
