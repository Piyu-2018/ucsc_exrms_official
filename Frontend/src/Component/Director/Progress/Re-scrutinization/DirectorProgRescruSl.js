import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DirectorProgRescruOp1 from './DirectorProgRescruOp1';
import DirectorProgRescruOp0 from './DirectorProgRescruOp0';
import DirectorProgRescruOp3 from './DirectorProgRescruOp3';
import DirectorProgRescruOp4 from './DirectorProgRescruOp4';

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <DirectorProgRescruOp0/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DirectorProgRescruOp1/>
                </Grid>
                {/* <Grid item xs={12} md={3}>
                    <DirectorProgRescruOp2/>
                </Grid> */}
                <Grid item xs={12} md={3}>
                    <DirectorProgRescruOp3/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DirectorProgRescruOp4/>
                </Grid>
            </Grid>


    </Box>
  );
}
