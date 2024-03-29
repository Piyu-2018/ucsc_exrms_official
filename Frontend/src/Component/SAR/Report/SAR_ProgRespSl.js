import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SAR_ProgRepOp1 from './SAR_ProgRepOp1';
import SAR_ProgRepOp0 from './SAR_ProgRepOp0';
import SAR_ProgRepOp3 from './SAR_ProgRepOp3';
import SAR_ProgRepOp4 from './SAR_ProgRepOp4';

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <SAR_ProgRepOp0/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRepOp1/>
                </Grid>
                {/* <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp2/>
                </Grid> */}
                <Grid item xs={12} md={3}>
                    <SAR_ProgRepOp3/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRepOp4/>
                </Grid>
            </Grid>


    </Box>
  );
}
