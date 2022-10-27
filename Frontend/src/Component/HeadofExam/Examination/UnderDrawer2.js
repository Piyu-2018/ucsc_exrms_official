import React from "react";
import Category from "./Category";
import UnderSeach from "./UnderSeach";
import HoESidebar from "../HoESidebar";
import DayTimeTable from "./DayTimeTable";
import { Grid } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import UnderTable2 from "./UnderTable2";

function UnderDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
     

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <HoESidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10} >
          <h2><AssignmentIcon sx={{ fontSize: 20 }}/> Examination</h2>
            <Category/> <br></br>
            <UnderSeach/><br></br>
            <UnderTable2/><br></br>
           
          </Grid>  
        </Grid>
    </>
  );
}

export default UnderDrawer;


