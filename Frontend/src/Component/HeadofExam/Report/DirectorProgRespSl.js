import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DirectorProgRepOp1 from './DirectorProgRepOp1';
import DirectorProgRepOp0 from './DirectorProgRepOp0';
import DirectorProgRepOp3 from './DirectorProgRepOp3';
import DirectorProgRepOp4 from './DirectorProgRepOp4';

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <DirectorProgRepOp0/>
                </Grid>
                {/* <Grid item xs={12} md={3}>
                    <DirectorProgRepOp1/>
                </Grid> */}
                {/* <Grid item xs={12} md={3}>
                    <DirectorProgRescruOp2/>
                </Grid> */}
                {/* <Grid item xs={12} md={3}>
                    <DirectorProgRepOp3/>
                </Grid> */}
                <Grid item xs={12} md={3}>
                    <DirectorProgRepOp4/>
                </Grid>
            </Grid>


    </Box>
  );
}
