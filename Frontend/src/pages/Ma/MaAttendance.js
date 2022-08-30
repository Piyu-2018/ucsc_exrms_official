import { Box, Grid, Stack, Typography,Item, Button, FormControl, InputLabel, Select, MenuItem, CardContent,  } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import TotalAttendanceTable from '../../Component/Ma/MaTotalAttTable';
import Navbar from '../../Component/Navbar';
import {useState} from 'react';
import Card from '@mui/material/Card';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './../../style/ma/MaAttendance.css';

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
                            <Button variant="contained" className='attendanceBtn' sx={{backgroundColor:"#23538f"}}>MARK ATTENDANCE</Button>
                        </Grid>
                        
                        <Card className='attendanceContainer' sx={{backgroundColor:"#E4EBF5", borderRadius:"30px"}}><CardContent>
                        <Grid xs={12} container spacing={0.5} justifyContent="space-evenly" p={2}>
                            
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel className='yearBtn' value="1" control={<Radio />} label="Year 1" />
                                    <FormControlLabel className='yearBtn' value="2" control={<Radio />} label="Year 2" />
                                    <FormControlLabel className='yearBtn' value="3" control={<Radio />} label="Year 3" />
                                    <FormControlLabel className='yearBtn' value="4" control={<Radio />} label="Year 4" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid xs={12} container spacing={0.5}  p={2} className='selectionContainer'>
                            
                                <FormControl className='selectionBox'>
                                    <InputLabel id="demo-simple-select-label" >Year</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Year"
                                        onChange={handleChangeAge}
                                        sx={{height:"40px"}}
                                    >
                                        <MenuItem value={2022}>2022</MenuItem>
                                        <MenuItem value={2021}>2021</MenuItem>
                                        <MenuItem value={2020}>2020</MenuItem>
                                        <MenuItem value={2019}>2019</MenuItem>
                                        <MenuItem value={2018}>2018</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className='selectionBox'>
                                    <InputLabel id="demo-simple-select-label">Course</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={course}
                                        label="Course"
                                        onChange={handleChangeCourse}
                                        sx={{height:"40px"}}
                                    >
                                        <MenuItem value="cs">CS</MenuItem>
                                        <MenuItem value="is">IS</MenuItem>
                                        
                                    </Select>
                                </FormControl>
                                <FormControl className='selectionBox'>
                                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={semester}
                                        label="Semester"
                                        onChange={handleChangeSemester}
                                        sx={{height:"40px"}}
                                    >
                                        <MenuItem value="first">First</MenuItem>
                                        <MenuItem value="second">Second</MenuItem>
                                            
                                        </Select>
                                </FormControl>
                          
                            
                        </Grid>
                        <Grid xs={12} p={2} className='tableContainer'>
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
