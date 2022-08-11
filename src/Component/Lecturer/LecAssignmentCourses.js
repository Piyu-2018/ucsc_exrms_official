import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import LecCourseCard from './LecCourseCard'

const courseCodes = ["SCS3201","SCS3202","SCS3203","SCS3204","SCS3205"];
const courseNames = ["Machine Learning and Neural Computing","Human Computer Interaction","Software Project management","Professional Practice","Graph Theory"];

function LecAssignmentCourses() {
  return (
    <>
      <Typography variant="h3">
        Assignments
      </Typography>
      <Grid container spacing = {3} sx={{marginTop:"20px"}}>
        <Grid item xs={12} sm={6}>
          <LecCourseCard CourseCode={courseCodes[0]} CourseName={courseNames[0]}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LecCourseCard CourseCode={courseCodes[1]} CourseName={courseNames[1]}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LecCourseCard CourseCode={courseCodes[2]} CourseName={courseNames[2]}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LecCourseCard CourseCode={courseCodes[3]} CourseName={courseNames[3]}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LecCourseCard CourseCode={courseCodes[4]} CourseName={courseNames[4]}/>
        </Grid>
      </Grid>
        
     
    </>
  )
}

export default LecAssignmentCourses