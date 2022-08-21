import * as React from 'react';
import { Box, Grid, Stack, Typography,Item, Divider,Card,CardContent } from '@mui/material';

import {CsFirstSemSubjects,CsSecondSemSubjects,IsFirstSemSubjects,IsSecondSemSubjects} from './MaReportSubject';

function MaReportCard() {
  return (
    <Grid item sm={12} md={12} container spacing={1} justifyContent="center">
        <Card sx={{ width:"90%", margin:"5px"}}><CardContent>
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={12} md={12} sx={{color:"black"}}>
                    <Typography variant='h6' align="left" sx={{fontWeight:"600",fontSize:"22px",paddingLeft:"50px"}}>First Year </Typography>
                </Grid>
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly">
                    <Grid item sm={1} md={1}>
                      <Divider orientation="vertical" flexItem sx={{height:"100%",  color:"black", margin:"0px 15px 0px 15px"  } } >
                        
                      </Divider>
                    </Grid>
                    <Grid item sm={11} md={11} sx={{padding:"10px 80px 10px 80px"}}><CsFirstSemSubjects/></Grid>
                </Grid>
            </Grid>         
        </CardContent></Card>
    
    </Grid> 
  );
}

export default MaReportCard
