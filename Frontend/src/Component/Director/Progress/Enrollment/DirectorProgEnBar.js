import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));


export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Card>
            <CardContent>
            <div>
                <BorderLinearProgress variant="determinate" value={50} />
                <br />
                <BorderLinearProgress variant="determinate" value={60} />
                <br /><br />
            </div>   

            <div>
                <BorderLinearProgress variant="determinate" value={65} />
                <br />
                <BorderLinearProgress variant="determinate" value={78} />
                <br />
            </div>  
            </CardContent>

        </Card>
         
    </Box>
  );
}
