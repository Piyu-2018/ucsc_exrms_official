import React,{useState} from 'react';
import SAR_UnderYear from './SAR_Underyear';
import SAR_UnderSeach from './SAR_UnderSeach';
import SAR_UnderTable from './SAR_UnderTable';
import SAR_Sidebar from '../SAR_Sidebar';
import { Grid} from "@mui/material";

function SAR_UnderDrawer() {
  const open = true;
  console.log(open);

  const [option,setOption] = useState("Academic Year - 2022/2023");
  const [year,setYear] = useState("Second Year");
  const [degree,setDegree] = useState("Information System (Bsc)");

  const onSelectedOption = (option) => {
    setOption(option);
  }

  const onSelectedYear = (year) => {
    setYear(year);
  }

  const onSelectedDegree = (degree) => {
    setDegree(degree);
  }

  return (
    <>
    

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10} >
            <SAR_UnderYear onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear} onSelectedDegree={onSelectedDegree}/> <br></br>
            <SAR_UnderSeach/><br></br>
            <SAR_UnderTable option={option} year={year} degree={degree}/>
          </Grid>  
        </Grid>
    </>
  );
}

export default SAR_UnderDrawer;


