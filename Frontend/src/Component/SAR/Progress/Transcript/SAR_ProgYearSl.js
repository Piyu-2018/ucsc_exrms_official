import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SAR_ProgRegOp1 from './SAR_ProgTransOp1';
import SAR_ProgRegOp2 from './SAR_ProgTransOp2';


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
                    <SAR_ProgRegOp1 onSelectOption={onSelectOption}/>
                </Grid>
      
                <Grid item xs={12} md={3}>
                    <SAR_ProgRegOp2 onSelectYear={onSelectYear}/>
                </Grid>
            </Grid>


    </Box>
  );
}
