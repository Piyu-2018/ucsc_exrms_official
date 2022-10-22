import * as React from 'react';
import {useState} from 'react';
import { Grid,Card,CardContent } from '@mui/material';

import {LecturerDetails} from './MaCourseList';

function MaReportCard() {
  const [age, setAge] = React.useState('');
    const [course, setCourse] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const handleChangeAge = (event) => {
        setAge(event.target.value); 
    };
    const handleChangeCourse = (event) => {
        setCourse(event.target.value);  
    };
    const handleChangeSemester = (event) => { 
        setSemester(event.target.value); 
    };

  const [openB,setOpenB] = useState(false);
  function toggleSideBar(){
    

  }  
  return (
    <Grid item sm={12} md={12} container spacing={1} justifyContent="center" sx={{margin:"15px"}}>
            
        <LecturerDetails/>
    
    </Grid> 
  );
}

export default MaReportCard
