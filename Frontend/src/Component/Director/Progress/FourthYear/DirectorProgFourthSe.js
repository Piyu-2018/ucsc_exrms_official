import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DirectorProgFourthOp0 from './DirectorProgFourthOp0';
import DirectorProgFourthOp1 from './DirectorProgFourthOp1';


export default function AutoGrid(props) {
  const [option, setOption] = React.useState(0);

  const onSelectOption = (option) => {
    props.onSelectedOption(option);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={12} >
                <Grid item xs={12} md={4}>
                    <DirectorProgFourthOp0 onSelectOption={onSelectOption}/>
                </Grid>

                {/* <Grid item xs={12} md={4}>
                  <DirectorProgFourthOp1/>
                </Grid> */}
            </Grid>


    </Box>
  );
}
