import { Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import MaSidebar from '../../Component/Ma/MaSidebar';
import MaNavBar from '../../Component/Ma/MaNavBar';
import MaReportCard from '../../Component/Ma/MaReportCard';

function MaExamReport() {
     
  return (
    <>
        <Box sx={{backgroundColor:"#E4EBF5"}}>
        <MaNavBar />
            <Grid container spacing={1} justifyContent="space-between">
                <Grid item sm={4} md={2} >
                  <MaSidebar/>
                </Grid>
                <Grid item sm={8} md={10} >
                    <Typography variant="h4" align="left" >
                        Examination Reports
                    </Typography>
                    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid container spacing={1} justifyContent="space-evenly" xs={12} p={2} sx={{ padding:"30px 200px 30px 200px"}}>
                            <Button variant="contained" sx={{backgroundColor:"#23538f"}}>Year 1</Button>
                            <Button variant="contained" sx={{backgroundColor:"#23538f"}}>Year 2</Button>
                            <Button variant="contained" sx={{backgroundColor:"#23538f"}}>Year 3</Button>
                            <Button variant="contained" sx={{backgroundColor:"#23538f"}}>Year 4</Button>
                        </Grid>
                        
                        <Grid container spacing={1} justifyContent="space-evenly">
                            <MaReportCard/>
                        </Grid>

                    </Grid>

                </Grid>    
            </Grid>
        </Box>
    </>
  )
}

export default MaExamReport
