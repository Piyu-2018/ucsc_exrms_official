import { Box, Grid, Card, Typography,Divider, IconButton,Avatar, Button, FormControl, InputLabel, Select, MenuItem, CardContent,  } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import StuAttMarkingTT from '../../Component/Ma/MaStuMarkingTT';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './../../style/ma/MaAttendance.css';

function MaAdmissionCard() {
     
  return (
    <>
        
        <Box sx={{backgroundColor:"#E4EBF5"}}>
            <MaNavBar />
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={4} md={2}>
                  <MaSidebar/>
                </Grid>
                <Grid item sm={8} md={10} className='markContainer' sx={{ padding:"30px"}} >
                    <div align="left" width="100%">
                        <IconButton variant="outlined" sx={{height:"50px", width:"50px", color:"#23538f", marginTop:"5px"}}>
                            <ArrowBackIosIcon/>
                        </IconButton>
                    </div>
                        
                    <Card sx={{alignItems:"center" , justifyContent:"center", backgroundColor:"#E4EBF5", marginTop:"30px", minHeight:"450px", padding:"20px" }}>
                        <CardContent>
                            <Typography variant='h4' sx={{padding:"2px"}}>
                                UNIVERSITY OF COLOMBO SCHOOL OF COMPUTING
                            </Typography>
                            <Typography variant='h5' sx={{fontWeight:"bold", padding:"2px"}}>
                               Examination Admission Card
                            </Typography>
                            <Typography variant='h5' sx={{padding:"2px"}}>
                                COMPUTER SCIENCE
                            </Typography>
                            <Grid container spacing={1} justifyContent="space-between" sx={{padding:"35px"}}>
                                <Grid item sm={3} md={3} >
                                    
                                    <Grid align="center" sx={{padding:"20px"}}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="./../../img/piyumi.jpg"
                                            sx={{ width: 180, height: 180 }}
                                        />
                                    </Grid>
                                    <Grid align="left" sx={{paddingLeft:"20px",paddingBottom:"15px"}}>
                                        <Typography variant='h6'>Name : </Typography>
                                        <Typography variant='h6' sx={{paddingLeft:"20px"}}>P. D. P. P. Rathnayaka</Typography>
                                    </Grid>
                                    <Grid align="left" sx={{paddingLeft:"20px",paddingBottom:"15px"}}>
                                        <Typography variant='h6'>Index : </Typography>
                                        <Typography variant='h6' sx={{paddingLeft:"20px"}}>19001381</Typography>
                                    </Grid>
                                    <Grid align="left" sx={{paddingLeft:"20px",paddingBottom:"15px"}}>
                                        <Typography variant='h6'>Reg. No. : </Typography>
                                        <Typography variant='h6' sx={{paddingLeft:"20px"}}>2019/CS/138</Typography>
                                    </Grid>
                                    <Grid align="left" sx={{paddingLeft:"20px",paddingBottom:"15px"}}>
                                        <Typography variant='h6'>NIC : </Typography>
                                        <Typography variant='h6' sx={{paddingLeft:"20px"}}>987942886V</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sm={0.2} md={0.2}>
                                    <Divider orientation="vertical" flexItem sx={{color:"red",height:"100%"}}></Divider>
                                </Grid>
                                <Grid item sm={8.8} md={8.8}>
                                    <Grid container spacing={0.5}  p={2} justifyContent="space-evenly">
                                        <Typography variant='h6'>Exam Year : 2022 </Typography>
                                        <Typography variant='h6'>Study Year : 2 </Typography>
                                        <Typography variant='h6'>Semester : 2 </Typography>
                                    </Grid>
                                    <Grid sx={{padding:"10px"}}>
                                        <StuAttMarkingTT/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>    
            </Grid>
        </Box>



    </>
  )
}

export default MaAdmissionCard
