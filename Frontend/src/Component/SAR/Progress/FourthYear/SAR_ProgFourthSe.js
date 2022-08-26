import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SAR_ProgFourthOp0 from './SAR_ProgFourthOp0';
import SAR_ProgFourthOp1 from './SAR_ProgFourthOp1';


export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={12} >
                <Grid item xs={12} md={4}>
                    <SAR_ProgFourthOp0/>
                </Grid>

                <Grid item xs={12} md={4}>
                  <SAR_ProgFourthOp1/>
                </Grid>
            </Grid>


    </Box>
  );
}
