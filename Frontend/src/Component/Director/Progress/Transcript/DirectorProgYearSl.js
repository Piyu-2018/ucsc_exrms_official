import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DirectorProgRegOp1 from './DirectorProgTransOp1';
import DirectorProgRegOp2 from './DirectorProgTransOp2';


export default function AutoGrid(props) {
  const [option, setOption] = React.useState(0);

  const onSelectOption = (option) => {
    props.onSelectedOption(option);
  };

  const onSelectYear = (year) => {
    // console.log(year);
    props.onSelectedYear(year);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <DirectorProgRegOp1 onSelectOption={onSelectOption}/>
                </Grid>
                {/* <Grid item xs={12} md={3}>
                    <DirectorProgRescruOp2/>
                </Grid> */}
                <Grid item xs={12} md={3}>
                    <DirectorProgRegOp2 onSelectYear={onSelectYear}/>
                </Grid>
            </Grid>


    </Box>
  );
}
