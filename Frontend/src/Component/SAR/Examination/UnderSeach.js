import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UnderOp1 from './UnderOp1';
import UnderOp2 from './UnderOp2';
import UnderOp3 from './UnderOp3';
import UnderOp4 from './UnderOp4';
import UnderOp5 from './UnderOp5';


/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); */

export default function AutoGrid(props) {
  const [option, setOption] = React.useState(0);

  const onSelectOption = (option) => {
    props.onSelectedOption(option);
  };

  const onSelectYear = (year) => {
    props.onSelectedYear(year);
  };

  const onSelectSem = (sem) => {
    props.onSelectedSem(sem);
  };

  const onSelectDegree = (degree) => {
    props.onSelectedDegree(degree);
  };

  const onSelectSubject = (subject) => {
    props.onSelectedSubject(subject);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={3}>
                    <UnderOp1 onSelectOption={onSelectOption}/>
                </Grid>
                <Grid item xs={12} md={2}>
                    <UnderOp5 onSelectYear={onSelectYear}/>
                </Grid>
                <Grid item xs={12} md={2}>
                    <UnderOp2 onSelectSem={onSelectSem}/>
                </Grid>
                <Grid item xs={12} md={2}>
                    <UnderOp3 onSelectDegree={onSelectDegree}/>
                </Grid>
                <Grid item xs={12} md={2}>
                    <UnderOp4 onSelectSubject={onSelectSubject}/>
                </Grid>
            </Grid>


    </Box>
  );
}
