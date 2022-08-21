import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




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


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} sx={{justifyContent:'left'}}>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  <Button variant="contained" sx={{textcolor:'white'}} color="success"><a href='/update-results'>Approve</a></Button>
                </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  
                  
                </Stack>
                </Grid>
                
            </Grid>


    </Box>
  );
}
 