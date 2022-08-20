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

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecGrading() {
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
              Gradings
            </Typography>
            <Stack direction="row" spacing={2}>
              <Box>
                <Stack direction="column" spacing={2}>
                  <Box alignItems="left">
                    <Typography variant="h6" theme={theme}>
                      Year
                    </Typography>
                  </Box>
                  <Box>
                    <LecYears />
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Stack direction="column" spacing={2}>
                  <Box alignItems="left">
                    <Typography variant="h6" theme={theme}>
                      Degree
                    </Typography>
                  </Box>
                  <Box>
                    <LecDegree />
                  </Box>
                </Stack>
              </Box>
            </Stack>

            <Box>
              <Grid container spacing={1} justifyContent="center">
                <Grid item xs={12} sm={6}>
                  <LecGpaGraph />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <LecGpaGraph />
                </Grid> */}
              </Grid>
            </Box>
          </Grid>
          <LecSearchGPAList />
          <LecGradingTable />
        </Grid>
      </Box>
    </>
  );
}

export default LecGrading;
