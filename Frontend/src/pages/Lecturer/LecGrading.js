import {
  Box,
  createTheme,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import LecDegree from "../../Component/Lecturer/Gradings/LecDegree";
import LecGpaGraph from "../../Component/Lecturer/Gradings/LecGpaGraph";
import LecYears from "../../Component/Lecturer/Gradings/LecYears";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecSidebar from "./LecSidebar";

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
        <Grid container spacing={1} justifyContent="space-between">
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
              <LecGpaGraph />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecGrading;
