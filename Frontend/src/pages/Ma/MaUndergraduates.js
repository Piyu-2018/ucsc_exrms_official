import {
  Box,
  Grid,
  Typography,
  Button,
  CardContent,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import MaSidebar from "../../Component/Ma/MaSidebar";
// import MaNavBar from "../../Component/Ma/MaNavBar";
import MaUndergTable from "../../Component/Ma/MaUndergTable";
import { useState } from "react";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
// import MaSidebar from "../../Component/Ma/MaSidebar";

function MaUndergraduates() {
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
              Undergraduates
            </Typography>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
              <Grid
                container
                spacing={1}
                justifyContent="space-evenly"
                xs={12}
                p={2}
                sx={{ padding: "30px 200px 30px 200px" }}
              >
                <Button variant="contained" sx={{ backgroundColor: "#23538f" }}>
                  Year 1
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#23538f" }}>
                  Year 2
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#23538f" }}>
                  Year 3
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#23538f" }}>
                  Year 4
                </Button>
              </Grid>
              <Grid
                xs={12}
                container
                spacing={0.5}
                justifyContent="space-between"
                p={2}
              >
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      className="yearBtn"
                      value="1"
                      control={<Radio />}
                      label="CS"
                    />
                    <FormControlLabel
                      className="yearBtn"
                      value="2"
                      control={<Radio />}
                      label="IS"
                    />
                    <FormControlLabel
                      className="yearBtn"
                      value="3"
                      control={<Radio />}
                      label="ALL"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid container spacing={1} justifyContent="space-evenly">
                <Card sx={{ backgroundColor: "#E4EBF5", width: "95%" }}>
                  <CardContent>
                    <MaUndergTable />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MaUndergraduates;
