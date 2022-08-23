import React from 'react';
import { Grid} from "@mui/material";
import SAR_Content from './SAR_Content';
import SAR_Sidebar from '../SAR_Sidebar';


function SARDash() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2} >
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <SAR_Content/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default SARDash;
