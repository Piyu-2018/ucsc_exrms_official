import { Box, Grid, Card, Radio,RadioGroup, Typography,FormControlLabel, Button, FormControl, InputLabel, Select, MenuItem, CardContent,  } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import TotalAttendanceTable from '../../Component/Ma/MaAttendance/MaTotalAttTable';
import {useState} from 'react';
import './../../style/ma/MaAttendance.css';
import StudyYearOption from '../../Component/Ma/MaAttendance/StudyYearOption';
import CourseOption from '../../Component/Ma/MaAttendance/CourseOption';
import AcademicYearOption from '../../Component/Ma/MaAttendance/AcademicYearOption';
import SemesterOption from '../../Component/Ma/MaAttendance/SemesterOption'; 

function MaAttendance() {
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
    <>
        
        <Box sx={{backgroundColor:"#E4EBF5"}}>
        <MaNavBar />
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={4} md={2}>
                  <MaSidebar/>
                </Grid>
                <Grid item sm={8} md={10} >
                    <Typography variant="h4" align="left" >
                        Exam Attendance
                    </Typography>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid xs={12} p={2} style={{ paddingTop:30,  paddingBottom:30 }}>
                            <Button variant="contained" className='attendanceBtn' sx={{backgroundColor:"#06283D"}}>MARK ATTENDANCE</Button>
                        </Grid>
                        
                        <Card className='attendanceContainer' sx={{backgroundColor:"#E4EBF5", borderRadius:"30px"}}><CardContent>
                        <Grid xs={12} container spacing={0.5} justifyContent="space-evenly" p={2}>

                            <AcademicYearOption/>
                            <StudyYearOption/>
                            <CourseOption/>
                            <SemesterOption/>
                            
                        </Grid>
                        
                        <Grid xs={12} p={1} className='tableContainer'>
                            <TotalAttendanceTable/>
                        </Grid>
                        </CardContent></Card>

                    </Grid>

                </Grid>    
            </Grid>
        </Box>



    </>
  )
}

export default MaAttendance
