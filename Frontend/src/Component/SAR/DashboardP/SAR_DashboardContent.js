import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SAR_ProgFourthChart from './SAR_ProgFourthChart';
import SAR_ProgSubChart from './SAR_ProgSubChart';
import SAR_ProgConfirmChart from './SAR_ProgConfirmChart';
import SAR_ProgRegChart from './SAR_ProgRegChart';
import SAR_ProgTransChart from './SAR_ProgTransChart';
import SAR_ProgEnBar from './SAR_ProgEnBar';
import {Link}  from 'react-router-dom';

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

<Grid container spacing={5}>
    <Grid   Grid item xs={6} md={4} container spacing={4} rowSpacing={4} >
        <Grid item xs={6} md={12} >
            <Link to='/SAR_EnProgress'><SAR_ProgEnBar/></Link>
        </Grid>
        <Grid item xs={6} md={12}>
            <Link to='/SAR_RegProg'><SAR_ProgRegChart/></Link>
        </Grid>

    </Grid>

    <Grid item xs={6} md={4} container spacing={4} rowSpacing={4} >
        <Grid item xs={6} md={12}>
            <Link to='/SAR_ConfirmProg'><SAR_ProgConfirmChart/></Link>
        </Grid>
        <Grid item xs={6} md={12}>
            <Link to='/SAR_TransProg'><SAR_ProgTransChart/></Link>
        </Grid>
        
    </Grid>

    <Grid item xs={6} md={4} container spacing={4} rowSpacing={4} >
        <Grid item xs={6} md={12}>
            <Link to='/SAR_SubProg'><SAR_ProgSubChart/></Link>
        </Grid>
        
        <Grid item xs={6} md={12} >
            <Link to='/SAR_FourthProg'><SAR_ProgFourthChart/></Link>
        </Grid>

        
    </Grid>

</Grid>

    </Box>
  );
}
