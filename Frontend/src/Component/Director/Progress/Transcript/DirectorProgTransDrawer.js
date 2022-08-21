import React from "react";
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

import DirectorProgYearSl from "./DirectorProgYearSl";

import DirectorProgTransChart from "./DirectorProgTransChart";
import DirectorProgTransTable from "./DirectorProgTransTable";
import DirectorSidebar from "../../DirectorSidebar";

function DirectorProgTransDrawer() {
  const open = true;
  console.log(open);

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}

      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        paddingTop="10px"
        paddingRight="40px"
      >
        <Grid item sm={4} md={2}>
          <DirectorSidebar open={open} />
        </Grid>
        <Grid item sm={8} md={10}>
          <DirectorProgYearSl />
          <br></br>
          <DirectorProgTransChart />
          <br></br>
          <DirectorProgTransTable />
        </Grid>
      </Grid>
    </>
  );
}

export default DirectorProgTransDrawer;
