import { Grid } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet";
import DirectorDrawer from "../../Component/Director/Dashboard/DirectorDrawer";
import Footer from "../../Component/Footer";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import LecSidebar from "./LecSidebar";
import DirectorContent from "./../../Component/Director/Dashboard/DirectorContent";
import LecContent from "../../Component/Lecturer/LecContent";

function LecHome() {
  const open = true;
  return (
    <>
      <LecNavBar open={true} />
      <Grid container spacing={0} justifyContent="space-between">
        <Grid item sm={4} md={2}>
          <LecSidebar open={open} />
        </Grid>
        <Grid item sm={8} md={10}>
          <LecContent />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default LecHome;
