import React from 'react';
import Category from './Category';
import UnderSeach from './UnderSeach';
import UnderTable from './UnderTable';
import DirectorSidebar from '../DirectorSidebar';
import DayTimeTable from './DayTimeTable';
import { Grid} from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

function UnderDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
     

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <DirectorSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10} >
          <h2><AssignmentIcon sx={{ fontSize: 20 }}/> Examination</h2>
            <Category/> <br></br>

            <UnderSeach/><br></br>
            <UnderTable/><br></br>
            <DayTimeTable/>
          </Grid>  
        </Grid>
    </>
  );
}

export default UnderDrawer;


