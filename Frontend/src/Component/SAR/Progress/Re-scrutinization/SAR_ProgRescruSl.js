import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SAR_ProgRescruOp1 from './SAR_ProgRescruOp1';
import SAR_ProgRescruOp2 from './SAR_ProgRescruOp2';
import SAR_ProgRescruOp3 from './SAR_ProgRescruOp3';
import SAR_ProgRescruOp4 from './SAR_ProgRescruOp4';

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp1/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp2/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp3/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp4/>
                </Grid>
            </Grid>


    </Box>
  );
}
