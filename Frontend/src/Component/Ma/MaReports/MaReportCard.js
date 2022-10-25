import * as React from 'react';
import { Grid, Card,CardContent } from '@mui/material';

import {SubjectsDisplay} from './MaReportSubject';

function MaReportCard() {
  return (
  <Grid item sm={12} md={12} container spacing={1} justifyContent="center" >
      <Card sx={{backgroundColor:"#06283D", width:"70%", margin:"5px", padding:"30px"}}>
        <CardContent>
            
            <SubjectsDisplay/>
                      
        </CardContent>
      </Card>
    
    </Grid> 
  );
}

export default MaReportCard
