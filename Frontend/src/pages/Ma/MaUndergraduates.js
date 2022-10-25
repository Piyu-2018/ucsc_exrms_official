import { Box, Grid, Typography, Button, CardContent,Card,FormControl,FormControlLabel,Radio,RadioGroup } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import MaUndergTable from '../../Component/Ma/MaUndergraduates/MaUndergTable';
import StudyYearOption from '../../Component/Ma/MaUndergraduates/StudyYearOption';
import CourseOption from '../../Component/Ma/MaUndergraduates/CourseOption';
import AcademicYearOption from '../../Component/Ma/MaUndergraduates/AcademicYearOption';
import {useState} from 'react';

function MaUndergraduates() {
     
  return (
    <>
        
        <Box sx={{backgroundColor:"#E4EBF5"}}>
        <MaNavBar />
            <Grid container spacing={1} justifyContent="space-between" >
                <Grid item sm={4} md={2}>
                  <MaSidebar/>
                </Grid>
                <Grid item sm={8} md={10} >
                    <Typography variant="h4" align="left" >
                        Undergraduates
                    </Typography>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }} >
                        <Grid container spacing={1} justifyContent="space-evenly" xs={12} p={2}>
                            <Button variant="contained" component="label" sx={{backgroundColor:"#114CA7", color:"white", padding:"10px 30px 10px 30px", fontSize:"18px",fontWeight:"600"}}>
                                    Upload Undergraduates (XLSX file)
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </Grid>
                        <Grid container spacing={1} justifyContent="space-evenly" xs={12} p={2} sx={{ padding:"30px 0 30px 0"}}>
                            <AcademicYearOption/>
                            <StudyYearOption/>
                            <CourseOption/>
                        </Grid>
                        <Grid xs={12} container spacing={0.5} justifyContent="space-between" p={2}> 
                            
                            
                        </Grid>
                        <Grid container spacing={1} justifyContent="space-evenly">
                            <Card sx={{backgroundColor:"#E4EBF5", width:"95%"}}><CardContent>
                                <MaUndergTable/>
                            </CardContent></Card>
                        </Grid>

                    </Grid>

                </Grid>    
            </Grid>
        </Box>



    </>
  )
}

export default MaUndergraduates
