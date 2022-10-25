import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";
import SAR_ProgConfirmChart from './SAR_ProgConfirmChart';
import SAR_ProgConfirmTable from './SAR_ProgConfirmTable';
import SAR_ProgYearSl from './SAR_ProgYearSl';
import SAR_Sidebar from '../../SAR_Sidebar';
import { useState, useEffect } from "react";

function SAR_ProgConfirmDrawer() {
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
    
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <SAR_ProgYearSl onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear}/><br></br>
            <SAR_ProgConfirmChart option={option} year={year}/><br></br>
            <SAR_ProgConfirmTable/>
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_ProgConfirmDrawer;


