import React,{useState} from 'react';
import Category from './Category';
import UnderSeach from './UnderSeach';
import UnderTable from './UnderTable';
import SAR_Sidebar from '../SAR_Sidebar';
import { Grid} from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

function UnderDrawer1() {
  const open = true;
  console.log(open);
/*
  const [option,setOption] = useState("2020-2021");
  const [year,setYear] = useState("1st Year");
  const [sem,setSem] = useState("1st Semester");
  const [degree,setDegree] = useState("Computer Science (Bsc)");
  const [subject,setSubject] = useState("Enterprise Resource Planning");*/
/*
  const onSelectedOption = (option) => {
    setOption(option);
  }

  const onSelectedYear = (year) => {
    setYear(year);
  }

  const onSelectedSem = (sem) => {
    setSem(sem);
  };

  const onSelectedDegree = (degree) => {
    setDegree(degree);
  };

  const onSelectedSubject = (subject) => {
    setSubject(subject);
  }; */ 

  return (
    <>
     

        <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <SAR_Sidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10} >
          <h1 text-color='#06283D'><AssignmentIcon sx={{ fontSize: 27 , color:'#06283D'}}/> Examination</h1>
            <Category/> <br></br>

            {/* <UnderSeach onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear} onSelectedSem={onSelectedSem} onSelectedDegree={onSelectedDegree} onSelectedSubject={onSelectedSubject}/> <br></br>
            <UnderTable option={option} year={year} sem={sem} degree={degree} subject={subject}/> */}
          </Grid>  
        </Grid>
    </>
  );
}

export default UnderDrawer1;


