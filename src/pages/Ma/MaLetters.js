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
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid container spacing={1} justifyContent="space-evenly" sx={{padding:"20px"}}>
                            <Card sx={{backgroundColor:"#E4EBF5", width:"90%"}}><CardContent>
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
