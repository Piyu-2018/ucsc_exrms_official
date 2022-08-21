import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SAR_UnderOp1 from './SAR_UnderOp1';
import SAR_UnderOp2 from './SAR_UnderOp2';
import SAR_UnderOp3 from './SAR_UnderOp3';
import SAR_UnderOp4 from './SAR_UnderOp4';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <SAR_UnderOp1/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_UnderOp2/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_UnderOp3/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_UnderOp4/>
                </Grid>
            </Grid>


    </Box>
  );
}
