import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SAR_ProgRegOp1 from './SAR_ProgRegOp1';
import SAR_ProgRegOp2 from './SAR_ProgRegOp2';


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
