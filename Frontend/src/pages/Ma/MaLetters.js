import { Box, Grid, Typography, Button, CardContent,Card,FormControl,FormControlLabel,Radio,RadioGroup } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import MaLetterReqTable from '../../Component/Ma/MaLetterReqTable';
import {useState} from 'react';

function MaLetters() {
     
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
                        Letter Requests
                    </Typography>
                        <Grid container spacing={1} justifyContent="space-evenly" sx={{padding:"20px"}}>
                            <Card sx={{backgroundColor:"#06283D", width:"250px", height:"95px"}}><CardContent>
                                <Typography align="center" sx={{color:"orange",fontSize:"20px"}} >
                                    Pending Requests
                                </Typography>
                                <Typography align="center" sx={{color:"orange", fontWeight:"bold", fontSize:"35px" }}>
                                    3
                                </Typography>
                            </CardContent></Card>
                            <Card sx={{backgroundColor:"#06283D", width:"250px", height:"95px"}}><CardContent>
                                <Typography align="center" sx={{color:"#69cb35",fontSize:"20px"}} >
                                    Successfull Requests
                                </Typography>
                                <Typography align="center" sx={{color:"#69cb35", fontWeight:"bold", fontSize:"35px" }}>
                                    2
                                </Typography>
                            </CardContent></Card>
                            <Card sx={{backgroundColor:"#06283D", width:"250px", height:"95px"}}><CardContent>
                                <Typography align="center" sx={{color:"red",fontSize:"20px"}} >
                                    Failed Requests
                                </Typography>
                                <Typography align="center" sx={{color:"red", fontWeight:"bold", fontSize:"35px" }}>
                                    15
                                </Typography>
                            </CardContent></Card>
                        </Grid>
                    
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid container spacing={1} justifyContent="space-evenly" sx={{padding:"20px"}}>
                            <Card sx={{backgroundColor:"#E4EBF5", width:"95%"}}><CardContent>
                                <MaLetterReqTable/>
                            </CardContent></Card>
                        </Grid>
                    </Grid>

                </Grid>    
            </Grid>
        </Box>



    </>
  )
}

export default MaLetters
