import React from 'react';
import { Grid} from "@mui/material";
import DirectorProgRespSl from './DirectorProgRespSl';
import DirectorReportContent from './DirectorReportContent';
import DirectorPRogReportRTable from './DirectorPRogReportRTable';
import HoESidebar from '../HoESidebar';


function DirectorDash() {
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
            <DirectorProgRespSl/><br></br>
            <DirectorPRogReportRTable/><br></br>
            <DirectorReportContent/><br></br><br></br><br></br><br></br>
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorDash;
