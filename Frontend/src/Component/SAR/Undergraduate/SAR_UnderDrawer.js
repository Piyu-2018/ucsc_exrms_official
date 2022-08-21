import React from 'react';
import SAR_UnderYear from './SAR_Underyear';
import SAR_UnderSeach from './SAR_UnderSeach';
import SAR_UnderTable from './SAR_UnderTable';
import SAR_Sidebar from '../SAR_Sidebar';
import { Grid} from "@mui/material";
function SAR_UnderDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10} >
            <SAR_UnderYear/> <br></br>
            <SAR_UnderSeach/><br></br>
            <SAR_UnderTable/>
          </Grid>  
        </Grid>
    </>
  );
}

export default SAR_UnderDrawer;


