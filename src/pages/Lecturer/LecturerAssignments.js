import { Box, Stack } from '@mui/material';
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
        <Box>
            <LecNavBar props ={toggleSideBar}/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <LecSidebar/>
                <LecAssignmentCourses/>
                <LecRightBar/>
            </Stack>
        </Box>



    </>
  )
}

export default LecturerAssignments
