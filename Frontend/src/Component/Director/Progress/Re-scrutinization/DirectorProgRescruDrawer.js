import React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
import DirectorProgRescruSl from './DirectorProgRescruSl';
import { Grid} from "@mui/material";
import DirectorProgRescruTable from './DirectorProgRescruTable';
import DirectorSidebar from '../../DirectorSidebar';

function DirectorProgRescruDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <DirectorSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <DirectorProgRescruSl/><br></br><br></br>
            <DirectorProgRescruTable/><br></br>
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorProgRescruDrawer;





