import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275, minHeight:262 }}>
      <CardContent>
        <Typography sx={{ fontSize: 40 ,fontFamily: "Montserrat",fontWeight: 600 ,marginTop:5}} color="text.secondary" gutterBottom>
          UCSC EXRMS
        </Typography>
        <Typography sx={{ fontSize: 27 ,fontFamily: "Montserrat",fontWeight: 400 , textAlign: 'center' }} color="text.secondary">
          UCSC Exams & Registration Management System
        </Typography>
      </CardContent>
    </Card>
  );
}
