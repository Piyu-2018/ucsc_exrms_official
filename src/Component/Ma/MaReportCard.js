import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Stack, Typography,Item, Divider,Card,CardContent } from '@mui/material';

import {CsFirstSemSubjects,CsSecondSemSubjects,IsFirstSemSubjects,IsSecondSemSubjects} from './MaReportSubject';
import { BorderAll } from '@mui/icons-material';

function MaReportCard() {
  return (
    <Grid item sm={12} md={12} container spacing={1} justifyContent="center">
      <Card sx={{backgroundColor:"#06283D", width:"70%", margin:"5px"}}><CardContent>
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly" sx={{color:"white"}}>
                    <Typography variant='h6'>Course : CS </Typography>
                    <Typography variant='h6'>Semester : 1 </Typography>
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
    <Card sx={{backgroundColor:"#06283D", width:"70%", margin:"5px"}}><CardContent>
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly" sx={{color:"white"}}>
                    <Typography variant='h6'>Course : IS </Typography>
                    <Typography variant='h6'>Semester : 1 </Typography>
                </Grid>
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly">
                    <Grid item sm={1} md={1}>
                      <Divider orientation="vertical" flexItem sx={{height:"100%",  color:"black", margin:"0px 15px 0px 15px"  } } >
                        
                      </Divider>
                    </Grid>
                    <Grid item sm={11} md={11} sx={{padding:"10px 80px 10px 80px"}}><IsFirstSemSubjects/></Grid>
                </Grid>
            </Grid>           
    </CardContent></Card>
    <Card sx={{backgroundColor:"#06283D", width:"70%", margin:"5px"}}><CardContent>
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly" sx={{color:"white"}}>
                    <Typography variant='h6'>Course : CS </Typography>
                    <Typography variant='h6'>Semester : 2 </Typography>
                </Grid>
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly">
                    <Grid item sm={1} md={1}>
                      <Divider orientation="vertical" flexItem sx={{height:"100%",  color:"black", margin:"0px 15px 0px 15px"  } } >
                        
                      </Divider>
                    </Grid>
                    <Grid item sm={11} md={11} sx={{padding:"10px 80px 10px 80px"}}><CsSecondSemSubjects/></Grid>
                </Grid>
            </Grid>           
    </CardContent></Card>
    <Card sx={{backgroundColor:"#06283D", width:"70%", margin:"5px"}}><CardContent>
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly" sx={{color:"white"}}>
                    <Typography variant='h6'>Course : IS </Typography>
                    <Typography variant='h6'>Semester : 2 </Typography>
                </Grid>
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly">
                    <Grid item sm={1} md={1}>
                      <Divider orientation="vertical" flexItem sx={{height:"100%",  color:"black", margin:"0px 15px 0px 15px"  } } >
                        
                      </Divider>
                    </Grid>
                    <Grid item sm={11} md={11} sx={{padding:"10px 80px 10px 80px"}}><IsSecondSemSubjects/></Grid>
                </Grid>
            </Grid>           
    </CardContent></Card>
    </Grid> 
  );
}

export default MaReportCard
