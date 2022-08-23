import { Box, createTheme, Grid, Stack, Typography } from "@mui/material";
import React from "react";
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

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecCourseResults() {
  const open = true;

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
              Subject Wise Progress
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
          <LecResultsTable />
        </Grid>
      </Box>
    </>
  );
}

export default LecCourseResults;
