import React from 'react';
import { Grid} from "@mui/material";
import HoEContent from './HoEContent';
import HoESidebar from '../HoESidebar';


function HoEDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2} >
            <HoESidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <HoEContent/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default HoEDrawer;
