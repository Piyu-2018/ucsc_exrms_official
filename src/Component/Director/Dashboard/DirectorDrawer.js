import React from 'react';
import { Grid} from "@mui/material";
import DirectorContent from './DirectorContent';
import DirectorSidebar from '../DirectorSidebar';


function DirectorDash() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={4} md={2}>
            <DirectorSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <DirectorContent/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorDash;
