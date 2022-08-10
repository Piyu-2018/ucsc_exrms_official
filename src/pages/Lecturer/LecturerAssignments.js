import { Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import LecNavBar from '../../Component/Lecturer/LecNavBar';


function LecturerAssignments() {
  return (
    <>
        {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
        <Box bgcolor={"#E4EBF5"}>
            <LecNavBar/>
        </Box>


    </>
  )
}

export default LecturerAssignments
