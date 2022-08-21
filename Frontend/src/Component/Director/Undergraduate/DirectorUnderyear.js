<<<<<<< HEAD
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DirectorUnderOp0 from './DirectorUnderOp0';
import DirectorUnderOp1 from './DirectorUnderOp1';
import DirectorUnderOp2 from './DirectorUnderOp2';
import DirectorUnderOp3 from './DirectorUnderOp3';
import DirectorUnderOp4 from './DirectorUnderOp4';
=======
import * as React from "react";
// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DirectorUnderOp1 from "./DirectorUnderOp1";
import DirectorUnderOp2 from "./DirectorUnderOp2";
import DirectorUnderOp3 from "./DirectorUnderOp3";
import DirectorUnderOp4 from "./DirectorUnderOp4";
>>>>>>> dinil

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
<<<<<<< HEAD


            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} >
                <Grid item xs={12} md={4}>
                    <DirectorUnderOp0/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <DirectorUnderOp1/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <DirectorUnderOp2/>
                </Grid>
            </Grid>


=======
      <Grid item xs={3} md={12} container spacing={4} columnpacing={10}>
        <Grid item xs={12} md={3}>
          <DirectorUnderOp1 />
        </Grid>
        <Grid item xs={12} md={3}>
          <DirectorUnderOp2 />
        </Grid>
        <Grid item xs={12} md={3}>
          <DirectorUnderOp3 />
        </Grid>
        <Grid item xs={12} md={3}>
          <DirectorUnderOp4 />
        </Grid>
      </Grid>
>>>>>>> dinil
    </Box>
  );
}
