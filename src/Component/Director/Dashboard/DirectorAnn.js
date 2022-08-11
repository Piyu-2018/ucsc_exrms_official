import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 30 ,fontFamily: "Montserrat",fontWeight: 600 }} color="dark blue" gutterBottom>
            <p>Announcement</p>
        </Typography>
        <Typography sx={{ fontSize: 27 ,fontFamily: "Montserrat",fontWeight: 350 , textAlign: 'left' }} color="blue" >
            <ul className='directAnno' >
                <li>Re-scrutinization of marking – Undergraduate Examinations - S1 & S2 - 2021</li>
                <li>Special Notice to all Undergraduate Students of UCSC</li>
                <li>Forms for requesting LMS access (Repeat courses) - Semester 1 - 2022</li>
                <li>Academic plan for the next two weeks (20th June – 3rd July, 2022)</li>
                <li>3rd year subject selection form (Batch 2018/2019) / 4th year subject selection form (Batch 2017/2018)</li>                                          
            </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}