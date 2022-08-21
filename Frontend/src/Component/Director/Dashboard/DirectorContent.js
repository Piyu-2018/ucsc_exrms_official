import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import UCSCEXRMS from '../../UCSCEXRMS';
import App from '../../Calendar';
import DirectorAnn from './DirectorAnn';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>

<Grid container spacing={5}>
    

    <Grid item xs={6} md={8} container spacing={4} rowSpacing={4} >
        <Grid item xs={6} md={12}>
            <UCSCEXRMS/>
        </Grid>

        <Grid item xs={6} md={12}>
            <DirectorAnn/>
        </Grid>
    </Grid>

    <Grid item xs={6} md={4} container spacing={4} rowSpacing={4} >
        <Grid item xs={9} md={12} >
            <Card>
                <CardContent paddingLeft="100">
                    <Grid item xs={9} md={12}>
                        
                    </Grid>
                    <Grid item xs={9} md={12}></Grid>
                    <Avatar alt="Remy Sharp" src="./pubImgs/directorImage/Director.jpg" sx={{ width: 140, height: 140, ml:"32%", mb:"5%", mt:"3%" }}/>
                    <Button variant="contained" sx={{  ml:"8%", mb:"5%" }}>Edit Profile</Button>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={9} md={12}>
            <Item sx={{  paddingLeft:"7%" , paddingTop:"5%"}} ><App /></Item>
        </Grid>
    </Grid>

</Grid>

    </Box>
  );
}
