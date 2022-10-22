import { Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import MaCourseCard from '../../Component/Ma/MaCourseTable/MaCourseCard';
import MaAddCourse from '../../Component/Ma/MaCourses/AddCourseModal';
import StudyYearOption from '../../Component/Ma/MaCourseTable/StudyYearOption';
import CourseOption from '../../Component/Ma/MaCourseTable/CourseOption';
import AcademicYearOption from '../../Component/Ma/MaCourseTable/AcademicYearOption';
import SemesterOption from '../../Component/Ma/MaCourseTable/SemesterOption';

function MaCourses() {
     
  return (
    <>
        <Box sx={{backgroundColor:"#E4EBF5"}}>
        <MaNavBar />
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={4} md={2} >
                  <MaSidebar/>
                </Grid>
                <Grid item sm={8} md={10} >
                    <Typography variant="h4" align="left" >
                        Courses
                    </Typography>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid container spacing={1} justifyContent="space-evenly" xs={12} p={2} sx={{ padding:"30px 200px 30px 200px"}}>
                            
                            <MaAddCourse/>
                            
                        </Grid>
        
                        <Grid container spacing={1} justifyContent="space-evenly" xs={12} p={2} sx={{ padding:"30px 200px 30px 200px"}}>
                            <AcademicYearOption/>
                            <StudyYearOption/>
                            <CourseOption/>
                            <SemesterOption/>
                            <MaCourseCard/>

                        </Grid>

                    </Grid>

                </Grid>    
            </Grid>
        </Box>
    </>
  )
}

export default MaCourses
