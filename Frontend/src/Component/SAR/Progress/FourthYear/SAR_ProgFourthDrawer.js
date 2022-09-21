import React,{useState} from 'react';
import { Grid} from "@mui/material";
import SAR_ProgFourthSe from './SAR_ProgFourthSe';
import SAR_ProgFourthChart from './SAR_ProgFourthChart';
import SAR_ProgFourthTable from './SAR_ProgFourthTable';
import SAR_Sidebar from '../../SAR_Sidebar';

function SAR_ProgFourthDrawer() {
  const open = true;
  console.log(open);

  const [acYear,setAcYear] = useState("Academic Year - 2022/2023");
  const [option,setOption] = useState("First Year");

  const onSelectedAcYear = (acYear) => {
    setAcYear(acYear);
  }

  const onSelectedOption= (option) => {
    setOption(option);
  }



  return (
    <>
    

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <SAR_ProgFourthSe onSelectedAcYear={onSelectedAcYear} onSelectedOption={onSelectedOption} /><br></br>
            <SAR_ProgFourthChart/><br></br>
            <SAR_ProgFourthTable acYear={acYear} option={option} />
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_ProgFourthDrawer;





