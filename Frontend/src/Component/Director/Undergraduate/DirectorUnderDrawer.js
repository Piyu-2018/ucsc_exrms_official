import React, {useState} from 'react';
import DirectorUnderYear from './DirectorUnderyear';
import DirectorUnderSeach from './DirectorUnderSeach';
import DirectorUnderTable from './DirectorUnderTable';
import DirectorSidebar from '../DirectorSidebar';
import { Grid} from "@mui/material";
function DirectorUnderDrawer() {
  const open = true;
  console.log(open);

  const [option,setOption] = useState("Academic Year - 2022-2023");
  const [year,setYear] = useState("First Year");
  const [degree,setDegree] = useState("Computer Science (Bsc)");

  const onSelectedOption = (option) => {
    setOption(option);
  }

  const onSelectedYear = (year) => {
    // console.log(index);
    setYear(year);
  }

  const onSelectedDegree = (degree) => {
    setDegree(degree);
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
          <Grid item sm={8} md={10} >
            <DirectorUnderYear onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear} onSelectedDegree={onSelectedDegree}/> <br></br>
            <DirectorUnderSeach/><br></br>
            <DirectorUnderTable option={option} year={year} degree={degree}/>
          </Grid>  
        </Grid>
    </>
  );
}

export default DirectorUnderDrawer;


