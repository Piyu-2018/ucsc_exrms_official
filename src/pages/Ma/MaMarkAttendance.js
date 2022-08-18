import { Box, Grid, Stack, Typography,Item, Button, FormControl, InputLabel, Select, MenuItem, CardContent,  } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './../../style/ma/MaAttendance.css';

function MaMarkAttendance() {
     
  return (
    <>
        
        <Box >
        <MaNavBar />
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={4} md={2}>
                  <MaSidebar/>
                </Grid>
                <Grid item sm={8} md={10} className='markContainer' >
                    {/* <IconButton aria-label="delete" sx={{align:"left"}}>
                        <KeyboardBackspaceIcon/>
                    </IconButton> */}
                    <div align="left">
                        <Button variant="outlined" sx={{height:"50px", width:"50px", color:"#23538f", borderColor:"#23538f" , marginTop:"5px", borderRadius:"10px"}}>
                            <ArrowBackIosIcon/>
                        </Button>
                    </div>
                        <Typography variant="h5" align="center" >
                            Attendance Marking
                        </Typography>
                        <Card sx={{backgroundColor:"#E4EBF5", borderRadius:"20px", width:"70%",marginTop:"30px", minHeight:"450px", padding:"30px" }}>
                            <CardContent>
                                <Typography variant='h6' align='left' marginLeft='30px'>
                                    Scan the barcode here,
                                </Typography>
                            </CardContent>
                        </Card>
                    

                </Grid>    
            </Grid>
        </Box>



    </>
  )
}

export default MaMarkAttendance
