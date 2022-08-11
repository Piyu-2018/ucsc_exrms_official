import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import LecAssignmentCourses from '../../Component/Lecturer/LecAssignmentCourses'
import LecAssignTable from '../../Component/Lecturer/LecAssignTable'
import LecNavBar from '../../Component/Lecturer/LecNavBar'
import LecAddAssign from './LecAddAssign'
import LecSidebar from './LecSidebar'

function LecAssignList() {
  return (
    <>
        <Box>
            <LecNavBar />
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item xs={4} sm={2}>
                  <LecSidebar/>
                </Grid>
                <Grid item xs={8} sm={10}>
                  <Typography variant="h3">
                    Assignments (SCS3201)
                  </Typography>
                  <LecAssignTable/>
                  <LecAddAssign/>

                </Grid>    
                
            </Grid>
        </Box>
    </>
  )
}

export default LecAssignList
