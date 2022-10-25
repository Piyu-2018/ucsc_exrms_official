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
              <Typography sx={{ fontSize: 24 ,fontFamily: "Montserrat",fontWeight: 400 , textAlign: 'center' }} color="text.secondary">Precentage of Student Intake Process</Typography><br></br>
            <div>
            <Typography sx={{ fontSize: 16  , fontFamily: "Montserrat",fontWeight: 600 , textAlign: 'left' }} color="text.secondary">Academic Year 2022/2023</Typography><br></br>
            <Typography sx={{ fontSize: 12  , fontFamily: "Montserrat",fontWeight: 600 , textAlign: 'left' }} color="text.secondary">Computer Science - 95%</Typography>
                <BorderLinearProgress variant="determinate" value={95}/>
                <br />
                <Typography sx={{ fontSize: 12  , fontFamily: "Montserrat",fontWeight: 600 , textAlign: 'left' }} color="text.secondary">Information System - 97%</Typography>
                <BorderLinearProgress variant="determinate" value={97} />
                <br /><br />
            </div>   

            {/* <div>
                <Typography sx={{ fontSize: 16  , fontFamily: "Montserrat",fontWeight: 600 , textAlign: 'left' }} color="text.secondary">Academic Year 2022/2023</Typography><br></br>
                <Typography sx={{ fontSize: 12  , fontFamily: "Montserrat",fontWeight: 600 , textAlign: 'left' }} color="text.secondary">Computer Science - 92%</Typography>
                <BorderLinearProgress variant="determinate"  value={92} />
                <br />
                <Typography sx={{ fontSize: 12  , fontFamily: "Montserrat",fontWeight: 600 , textAlign: 'left' }} color="text.secondary">Information System - 95%</Typography>
                <BorderLinearProgress variant="determinate" value={95} />
                <br />
            </div>   */}
            </CardContent>

        </Card>
         
    </Box>
  );
}
