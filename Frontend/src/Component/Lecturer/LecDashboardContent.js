import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import DirectorProgFourthChart from "./DirectorProgFourthChart";
// import DirectorProgSubChart from "./DirectorProgSubChart";
// import DirectorProgConfirmChart from "./DirectorProgConfirmChart";
// import DirectorProgRegChart from "./DirectorProgRegChart";
// import DirectorProgTransChart from "./DirectorProgTransChart";
// import DirectorProgEnBar from "./DirectorProgEnBar";
import { Link } from "react-router-dom";
import LecResultsGraph from "./LecResultsGraph";
import LecGpaGraph from "./Gradings/LecGpaGraph";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LecDashboardContent() {
  return (
    <>
      <Grid item xs={12}>
        <Link to="/directorEnProgress">
          <LecResultsGraph />
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/directorRegProg">
          <LecGpaGraph />
        </Link>
      </Grid>

      {/* <Grid item xs={6} md={4} container spacing={4} rowSpacing={4} >
        <Grid item xs={6} md={12}>
            <Link to='/directorConfirmProg'><DirectorProgConfirmChart/></Link>
        </Grid>
        <Grid item xs={6} md={12}>
            <Link to='/directorTransProg'><DirectorProgTransChart/></Link>
        </Grid>
        
    </Grid>

    <Grid item xs={6} md={4} container spacing={4} rowSpacing={4} >
        <Grid item xs={6} md={12}>
            <Link to='/directorSubProg'><DirectorProgSubChart/></Link>
        </Grid>
        
        <Grid item xs={6} md={12} >
            <Link to='/directorFourthProg'><DirectorProgFourthChart/></Link>
        </Grid> */}

      {/* </Grid> */}
    </>
  );
}

export default LecDashboardContent;
