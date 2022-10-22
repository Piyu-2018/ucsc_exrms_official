import { Box, Grid, Typography, CardContent, Card } from "@mui/material";
import React from "react";
import MaSidebar from "../../Component/Ma/MaSidebar";
// import MaNavBar from "../../Component/Ma/MaNavBar";
import MaUndergTable from "../../Component/Ma/MaUndergTable";

import LecNavBar from "../../Component/Lecturer/LecNavBar";
import MaCalendar from "../../Component/Ma/MaCalendar";
import MaPaymentTable from "../../Component/Ma/MaPaymentTable";
// import MaSidebar from "../../Component/Ma/MaSidebar";


function MaPayment() {

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
              Payment (Via Bank)
            </Typography>
            
                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                  <Card sx={{ backgroundColor: "#E4EBF5", width: "95%" }}>
                    <CardContent>
                      <MaPaymentTable/>
                    </CardContent>
                  </Card>
                </Grid>
               
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MaPayment;
