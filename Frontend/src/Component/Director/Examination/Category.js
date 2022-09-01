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


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} sx={{justifyContent:'center'}}>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  <Button variant="contained" sx={{bgcolor:'#9A9A9A'}}><a href='/directorExamRe'>Released Exam Results</a></Button>
                  
                </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  <Button variant="contained" sx={{bgcolor:'#9A9A9A'}}><a href='/directorExamReToBe'>To Be Released Exam Results</a></Button>
                  
                </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  <Button variant="contained" sx={{bgcolor:'#9A9A9A'}}><a href='/directorExamTimetable'>Examination TimeTable</a></Button>
                  
                </Stack>
                </Grid>
                
            </Grid>


    </Box>
  );
}
