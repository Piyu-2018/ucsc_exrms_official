import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";

import DirectorProgRegChart from './DirectorProgRegChart';
import DirectorProgYearSl from './DirectorProgYearSl';
import DirectorProgRegTable from './DirectorProgRegTable';
import DirectorSidebar from '../../DirectorSidebar';

function DirectorRegDrawer() {
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
            <DirectorProgYearSl/><br></br>
            <DirectorProgRegChart/><br></br>
            <DirectorProgRegTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorRegDrawer;

