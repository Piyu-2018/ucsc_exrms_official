import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SAR_ProgRegOp1 from './SAR_ProgTransOp1';
import SAR_ProgRegOp2 from './SAR_ProgTransOp2';


export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <SAR_ProgRegOp1/>
                </Grid>
      
                <Grid item xs={12} md={3}>
                    <SAR_ProgRegOp2/>
                </Grid>
            </Grid>


    </Box>
  );
}
