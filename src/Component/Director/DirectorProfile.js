import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 40 ,fontFamily: "Montserrat",fontWeight: 600 }} color="text.secondary" gutterBottom>
          UCSC EXRMS
        </Typography>
        
      </CardContent>
    </Card>
  );
}
