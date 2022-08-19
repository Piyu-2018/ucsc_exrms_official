import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={12} >
                <Grid item xs={12} md={3}>
                    <Button variant="contained">Applied Undergraduates</Button>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Button variant="contained">Selected Undergraduates</Button>
                </Grid>
            </Grid>


    </Box>
  );
}
