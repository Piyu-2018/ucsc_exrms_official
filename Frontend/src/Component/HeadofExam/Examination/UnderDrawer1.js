import React,{useState} from 'react';
import Category from './Category';
import UnderSeach from './UnderSeach';
import UnderTable1 from './UnderTable1';
import HoESidebar from '../HoESidebar';
import DayTimeTable from './DayTimeTable';
import { Grid} from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

function UnderDrawer() {
  const open = true;
  console.log(open);
  
  const [option,setOption] = useState("2022-2023");
  const [year,setYear] = useState("2nd Year");
  const [semester,setSem] = useState("1st Semester");
  const [degree,setDegree] = useState("Information System (Bsc)");
  const [subject,setSubject] = useState("Enterprise Resource Planning");

  const onSelectedOption = (option) => {
    setOption(option);
  }

  const onSelectedYear = (year) => {
    setYear(year);
  }

  const onSelectedSem = (semester) => {
    setSem(semester);
  };

  const onSelectedDegree = (degree) => {
    setDegree(degree);
  };

  const onSelectedSubject = (subject) => {
    setSubject(subject);
  };


  return (
    <>
     

     <Grid container spacing={1} justifyContent="space-between" paddingTop="10px" paddingRight = "40px">
          <Grid item sm={4} md={2}>
            <HoESidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10} >
          <h2><AssignmentIcon sx={{ fontSize: 20 }}/> Examination</h2>
            <Category/> <br></br>

            <UnderSeach onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear} onSelectedSem={onSelectedSem} onSelectedDegree={onSelectedDegree} onSelectedSubject={onSelectedSubject}/> <br></br>
            <UnderTable1/>
          </Grid>  
        </Grid>
    </>
  );
}

export default UnderDrawer;


