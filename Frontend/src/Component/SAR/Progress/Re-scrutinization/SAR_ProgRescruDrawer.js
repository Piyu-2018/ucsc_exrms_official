import React,{useState} from 'react';
import SAR_ProgRescruSl from './SAR_ProgRescruSl';
import { Grid} from "@mui/material";
import SAR_ProgRescruTable from './SAR_ProgRescruTable';
import SAR_Sidebar from '../../SAR_Sidebar';

function SAR_ProgRescruDrawer() {
  const open = true;
  console.log(open);

  const [acYear,setAcYear] = useState("Academic Year - 2022/2023");
  const [yearSem,setYearSem] = useState("First Year");
  const [degree,setDegree] = useState("Computer Science (Bsc)");
  const [subject,setSubject] = useState("Computer Science (Bsc)");

  const onSelectedAcYear = (acYear) => {
    setAcYear(acYear);
  }

  const onSelectedYearSem = (yearSem) => {
    setYearSem(yearSem);
  }

  const onSelectedDegree = (degree) => {
    setDegree(degree);
  }
  
  const onSelectedSubject = (subject) => {
    setSubject(subject);
  }

  return (
    <>
      

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <SAR_ProgRescruSl onSelectedAcYear={onSelectedAcYear} onSelectedYearSem={onSelectedYearSem} onSelectedDegree={onSelectedDegree} onSelectedSubject={onSelectedSubject}/> <br></br><br></br>
            <SAR_ProgRescruTable acYear={acYear} yearSem={yearSem} degree={degree} subject={subject}/><br></br>
          </Grid>
          
        </Grid>
    </>
  );
}

export default SAR_ProgRescruDrawer;





