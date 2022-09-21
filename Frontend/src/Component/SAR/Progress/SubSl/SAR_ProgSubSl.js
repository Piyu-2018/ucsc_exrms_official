import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SAR_ProgSubOp1 from './SAR_ProgSubOp1';
import SAR_ProgSubOp0 from './SAR_ProgSubOp0';
import SAR_ProgSubOp3 from './SAR_ProgSubOp3';
import SAR_ProgSubOp2 from './SAR_ProgSubOp2';

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <SAR_ProgSubOp0/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgSubOp1/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgSubOp2/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgSubOp3/>
                </Grid>
            </Grid>


    </Box>
  );
}
