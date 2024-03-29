import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid} from "@mui/material";
import SAR_ProgYearSl from './SAR_ProgYearSl';
import SAR_ProgTransChart from './SAR_ProgTransChart';
import SAR_ProgTransTable from './SAR_ProgTransTable';
import SAR_Sidebar from '../../SAR_Sidebar';
import { useState, useEffect } from "react";

function SAR_ProgTransDrawer() {
  const open = true;
  console.log(open);

  const [option,setOption] = useState("Academic Year - 2022-2023");
  const [year,setYear] = useState("First Year");

  const onSelectedOption = (option) => {
    setOption(option);
  }

  const onSelectedYear = (year) => {
    // console.log(index);
    setYear(year);
  }

  return (
    <>
      {/* <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet> */}
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
          <SAR_ProgYearSl onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear}/>
          <br></br>
          
          
          <SAR_ProgTransTable option={option} year={year}/><br></br>
            <SAR_ProgTransChart/>
            
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_ProgTransDrawer;






