import * as React from 'react';
import {useState} from 'react';
import { Box,Radio,FormControlLabel,RadioGroup, Grid, Stack, Typography,Item, Divider,Card,CardContent,MenuItem,InputLabel,Select,FormControl } from '@mui/material';

import {CsFirstSemSubjects,CsSecondSemSubjects,IsFirstSemSubjects,IsSecondSemSubjects} from './MaCourseList';

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
    <Grid item sm={12} md={12} container spacing={1} justifyContent="center">
        <Card sx={{ width:"90%", margin:"5px", padding:"10px"}}><CardContent>
            <Grid container spacing={1} justifyContent="space-between">
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
                                        <MenuItem value={2022}>2022/2021</MenuItem>
                                        <MenuItem value={2021}>2021/2020</MenuItem>
                                        <MenuItem value={2020}>2020/2019</MenuItem>
                                        <MenuItem value={2019}>2019/2018</MenuItem>
                                        <MenuItem value={2018}>2018/2017</MenuItem>
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
                        </CardContent></Card>
                <Grid item sm={12} md={12} sx={{color:"black"}} container spacing={1} justifyContent="space-evenly">   
                    <Typography variant='h6' align="left" sx={{fontWeight:"600",fontSize:"22px",paddingLeft:"50px"}}>Academic Year: 2021/2022 </Typography>
                    <Typography variant='h6' align="left" sx={{fontWeight:"600",fontSize:"22px",paddingLeft:"50px"}}>Study Year: First Year </Typography>
                    <Typography variant='h6' align="left" sx={{fontWeight:"600",fontSize:"22px",paddingLeft:"50px"}}>Semester: I </Typography>
                </Grid>
                <Grid item sm={12} md={12} container spacing={0.5}  p={2} justifyContent="space-evenly">
                    <Grid item sm={1} md={1}>
                      <Divider orientation="vertical" flexItem sx={{height:"100%",  color:"black", margin:"0px 15px 0px 15px"  } } ></Divider>
                    </Grid>
                    
                    <Grid item sm={11} md={11} sx={{padding:"10px 80px 10px 80px"}}><CsFirstSemSubjects/></Grid>
                </Grid>
            </Grid>         
        </CardContent></Card>
    
    </Grid> 
  );
}

export default MaReportCard
