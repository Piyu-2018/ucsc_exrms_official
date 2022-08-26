import React from 'react';
// import { useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";
// import DirectorProgFourthContent from './DirectorProgFourthContent';
import DirectorProgFourthSe from './DirectorProgFourthSe';
import DirectorProgFourthChart from './DirectorProgFourthChart';
import DirectorProgFourthTable from './DirectorProgFourthTable';
import DirectorSidebar from '../../DirectorSidebar';

function DirectorProgFourthDrawer() {
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
            <DirectorProgFourthSe/><br></br>
            <DirectorProgFourthChart/><br></br>
            <DirectorProgFourthTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorProgFourthDrawer;





