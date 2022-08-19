import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DirectorProgSubOp1 from './DirectorProgSubOp1';
import DirectorProgSubOp2 from './DirectorProgSubOp2';
import DirectorProgSubOp3 from './DirectorProgSubOp3';
import DirectorProgSubOp4 from './DirectorProgSubOp4';

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <DirectorProgSubOp1/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DirectorProgSubOp2/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DirectorProgSubOp3/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DirectorProgSubOp4/>
                </Grid>
            </Grid>


    </Box>
  );
}
