import { Box, Grid, Typography, Button, CardContent,Card,FormControl,FormControlLabel,Radio,RadioGroup } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import MaStuAdmissionsTable from '../../Component/Ma/MaStuAdmissionsTable';
import StudyYearOption from '../../Component/Ma/MaAdmission/StudyYearOption';
import CourseOption from '../../Component/Ma/MaAdmission/CourseOption';
import AcademicYearOption from '../../Component/Ma/MaAdmission/AcademicYearOption';
import {useState} from 'react';

function MaStuAdmission() {
     
  return (
    <>
        
        <Box sx={{backgroundColor:"#E4EBF5"}}>
        <MaNavBar />
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={4} md={2}>
                  <MaSidebar/>
                </Grid>
                <Grid item sm={8} md={10} >
                    <Typography variant="h4" align="left" >
                        Admissions
                    </Typography>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid container spacing={1} justifyContent="space-evenly" xs={12} p={2} sx={{ padding:"30px 200px 30px 200px"}}>
                            <AcademicYearOption/>
                            <StudyYearOption/>
                            <CourseOption/>
                        </Grid>
                        <Grid xs={12} container spacing={0.5} justifyContent="space-between" p={2}>
                            
                            
                        </Grid>
                        
                        <Grid container spacing={1} justifyContent="space-evenly">
                            <Card sx={{backgroundColor:"#E4EBF5", width:"75%"}}><CardContent>
                                <MaStuAdmissionsTable/>
                            </CardContent></Card>
                        </Grid>

                    </Grid>

                </Grid>    
            </Grid>
        </Box>



    </>
  )
}

export default MaStuAdmission
