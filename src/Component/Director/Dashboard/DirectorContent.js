import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
    

    <Grid item xs={6} md={7} container spacing={4} rowSpacing={4} >
        <Grid item xs={6} md={12}>
            <UCSCEXRMS/>
        </Grid>

        <Grid item xs={6} md={12}>
            <DirectorAnn/>
        </Grid>
    </Grid>

    <Grid item xs={6} md={5} container spacing={4} rowSpacing={4} >
        <Grid item xs={9} md={12} >
            <Card>
                <CardContent paddingLeft="100">
                    <Grid item xs={9} md={12}>
                        
                    </Grid>
                    <Grid item xs={9} md={12}></Grid>
                    <Avatar alt="Remy Sharp" src="../../directorImage/director.jpg" sx={{ width: 140, height: 140 }}/>
                    <Button variant="contained">Edit Profile</Button>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={9} md={12}>
            <Item marginLeft="50px"><App/></Item>
        </Grid>
    </Grid>

</Grid>

    </Box>
  );
}
