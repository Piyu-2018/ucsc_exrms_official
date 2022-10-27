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
                <li>Approving of marking – Undergraduate Examinations - 2022-2023 of First Years</li>
                <li>Approving of marking – Undergraduate Examinations - 2022-2023 of Second Years</li>
                <li>Approving of marking – Undergraduate Examinations - 2022-2023 of Third Years</li>
                <li>Special Notice to all Undergraduate Students of UCSC</li>                                         
            </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}