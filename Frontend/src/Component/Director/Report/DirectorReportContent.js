import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DirectorProgRespSl from './DirectorProgRespSl';


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
        <Grid item xs={12} md={3}>
            <DirectorProgRespSl/>
        </Grid>
    </Grid>

</Grid>

    </Box>
  );
}
