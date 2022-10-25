import React , {useState}  from 'react';
import { Grid} from "@mui/material";
import SAR_ProgRegChart from './SAR_ProgRegChart';
import SAR_ProgYearSl from './SAR_ProgYearSl';
import SAR_ProgRegTable from './SAR_ProgRegTable';
import SAR_Sidebar from '../../SAR_Sidebar';

function SAR_RegDrawer() {
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
            <SAR_ProgYearSl onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear}/><br></br><br></br>
            <SAR_ProgRegTable option={option} year={year}/><br></br><br></br>
            <SAR_ProgRegChart option={option} year={year} sx={{
            zIndex: -1,
          }}/><br></br>
            
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_RegDrawer;


