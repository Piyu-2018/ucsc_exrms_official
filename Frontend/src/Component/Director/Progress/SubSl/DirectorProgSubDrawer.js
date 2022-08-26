import React from "react";
// import { styled, useTheme } from '@mui/material/styles';
import { Grid } from "@mui/material";
import DirectorProgSubSl from "./DirectorProgSubSl";
import DirectorProgSubChart from "./DirectorProgSubChart";
import DirectorProgSubTable from "./DirectorProgSubTable";
import DirectorSidebar from "../../DirectorSidebar";

function DirectorProgSubDrawer() {
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
          <DirectorProgSubSl />
          <br></br>
          <DirectorProgSubChart />
          <br></br>
          <DirectorProgSubTable />
        </Grid>
      </Grid>
    </>
  );
}

export default DirectorProgSubDrawer;
