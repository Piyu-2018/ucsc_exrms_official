import React , {useState}  from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid} from "@mui/material";

import DirectorProgRegChart from './DirectorProgRegChart';
import DirectorProgYearSl from './DirectorProgYearSl';
import DirectorProgRegTable from './DirectorProgRegTable';
import DirectorSidebar from '../../DirectorSidebar';

function DirectorRegDrawer() {
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
            <DirectorSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <DirectorProgYearSl onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear}/><br></br><br></br>
            <DirectorProgRegTable option={option} year={year}/><br></br><br></br>
            <DirectorProgRegChart option={option} year={year} sx={{
            zIndex: -1,
          }}/><br></br>
            
          </Grid>
          
        </Grid>
    </>
  );
}

export default DirectorRegDrawer;


