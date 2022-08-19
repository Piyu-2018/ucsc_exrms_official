import React from 'react';
import DirectorUnderYear from './DirectorUnderyear';
import DirectorUnderSeach from './DirectorUnderSeach';
import DirectorUnderTable from './DirectorUnderTable';
import DirectorSidebar from '../DirectorSidebar';
import { Grid} from "@mui/material";
function DirectorUnderDrawer() {
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
          <Grid item sm={8} md={10} >
            <DirectorUnderYear/> <br></br>
            <DirectorUnderSeach/><br></br>
            <DirectorUnderTable/>
          </Grid>  
        </Grid>
    </>
  );
}

export default DirectorUnderDrawer;


