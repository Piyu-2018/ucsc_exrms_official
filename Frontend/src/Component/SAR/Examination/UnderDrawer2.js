import React from 'react';
import Category from './Category';
import UnderSeach from './UnderSeach';
import SAR_Sidebar from '../SAR_Sidebar';
import UnderTable2 from '../../SAR/Examination/UnderTable2'
import { Grid} from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

function UnderDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
     

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
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


