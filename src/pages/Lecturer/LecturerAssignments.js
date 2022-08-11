import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import LecAssignmentCourses from '../../Component/Lecturer/LecAssignmentCourses';
import LecNavBar from '../../Component/Lecturer/LecNavBar';
import LecRightBar from '../../Component/Lecturer/LecRightBar';
import LecSidebar from './LecSidebar';
import {useState} from 'react';


function LecturerAssignments() {


  const [openB,setOpenB] = useState(false);
  function toggleSideBar(){
    

  }  
  return (
    <>
        {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
        <Box >
            <LecNavBar />
            
            
            
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={4} md={2}>
                  <LecSidebar/>
                </Grid>
                <Grid item sm={8} md={7}>
                  <LecAssignmentCourses/>
                </Grid>    
                <Grid item sm={0} md={3}>
                  <LecRightBar/>
                </Grid>
                
            </Grid>
        </Box>



    </>
  )
}

export default LecturerAssignments
