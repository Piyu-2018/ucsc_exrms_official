import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SAR_ProgRescruOp0 from './SAR_ProgRescruOp0';
import SAR_ProgRescruOp1 from './SAR_ProgRescruOp1';
import SAR_ProgRescruOp3 from './SAR_ProgRescruOp3';
import SAR_ProgRescruOp4 from './SAR_ProgRescruOp4';

export default function AutoGrid(props) {
    const [option, setOption] = React.useState(0);

    const onSelectAcYear = (acYear) => {
        props.onSelectedAcYear(acYear);
      }
    
      const onSelectYearSem = (yearSem) => {
        props.onSelectedYearSem(yearSem);
      }
    
      const onSelectDegree = (degree) => {
        props.onSelectedDegree(degree);
      }
      
      const onSelectSubject = (subject) => {
        props.onSelectedSubject(subject);
      };
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp0 onSelectAcYear={onSelectAcYear}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp1 onSelectYearSem={onSelectYearSem}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp3 onSelectDegree={onSelectDegree}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SAR_ProgRescruOp4 onSelectSubject={onSelectSubject}/>
                </Grid>
            </Grid>


    </Box>
  );
}
