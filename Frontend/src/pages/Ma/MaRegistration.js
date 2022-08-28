import { Box, Grid, Typography, Button, CardContent,Card,FormControl,FormControlLabel,Radio,RadioGroup } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import MaRegTable from '../../Component/Ma/MaRegTable';
import {useState} from 'react';

function MaRegistration() {
     
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
                        New Intake Students
                    </Typography>
                    <Typography variant="h5" align="left" padding="10px 0px 10px 40px" >
                        Academic Year : 2021/2022
                    </Typography>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid container spacing={1} justifyContent="space-evenly" xs={12} p={2} >
                            <Button variant="contained" component="label" sx={{backgroundColor:"red", color:"black", padding:"10px 30px 10px 30px", fontSize:"18px",fontWeight:"600"}}>
                                    Lock Registration
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                            <Button variant="contained" component="label" sx={{backgroundColor:"green", color:"black", padding:"10px 30px 10px 30px", fontSize:"18px",fontWeight:"600"}}>
                                    Upload Undergraduates (XLSX file)
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </Grid>
                        <Grid xs={12} container spacing={0.5} justifyContent="space-between" p={2}> 
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel className='yearBtn' value="1" control={<Radio />} label="CS" />
                                    <FormControlLabel className='yearBtn' value="2" control={<Radio />} label="IS" />
                                    <FormControlLabel className='yearBtn' value="3" control={<Radio />} label="ALL" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid container spacing={1} justifyContent="space-evenly">
                            <Card sx={{backgroundColor:"#E4EBF5", width:"95%"}}><CardContent>
                                <MaRegTable/>
                            </CardContent></Card>
                        </Grid>

                    </Grid>

                </Grid>    
            </Grid>
        </Box>



    </>
  )
}

export default MaRegistration
