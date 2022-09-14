import React,{useState} from 'react';
import { styled ,useTheme} from '@mui/material/styles';
import {Stack, Button,Grid, Paper,Box,AppBar,Tabs,Tab,Typography} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import UnderSeach from './UnderSeach';
import UnderTable from './UnderTable';
import UnderTable1 from './UnderTable1';
import UnderTable2 from './UnderTable2';
import DayTimeTable from './DayTimeTable';
import SAR_Sidebar from '../SAR_Sidebar';
import UnderDrawer from './UnderDrawer';



/* const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
})); */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AutoGrid() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const open = true;
  console.log(open);

  const [option,setOption] = useState("2022/2023");
  const [year,setYear] = useState("2nd Year");
  const [sem,setSem] = useState("1st Semester");
  const [degree,setDegree] = useState("Information System (Bsc)");
  const [subject,setSubject] = useState("Enterprise Resource Planning");

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
  };
  return (
    <Box sx={{ flexGrow: 1 }}> 
      <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{backgroundColor: '#06283D'}}
          TabIndicatorProps={{
            sx: { backgroundColor: "red" }
          }}
        >
          
          <Tab label="Released Exam Results" {...a11yProps(0)} />
          <Tab label="To Be Released Exam Results" {...a11yProps(1)} />
          <Tab label="Examination TimeTable" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        sx={{color:'red'}}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
           
            <UnderSeach onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear} onSelectedSem={onSelectedSem} onSelectedDegree={onSelectedDegree} onSelectedSubject={onSelectedSubject}/> <br></br>
            <UnderTable option={option} year={year} sem={sem} degree={degree} subject={subject}/> 
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            
            <UnderSeach onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear} onSelectedSem={onSelectedSem} onSelectedDegree={onSelectedDegree} onSelectedSubject={onSelectedSubject}/> <br></br>
            <UnderTable1 option={option} year={year} sem={sem} degree={degree} subject={subject}/>
            <DayTimeTable/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            
            <UnderSeach onSelectedOption={onSelectedOption} onSelectedYear={onSelectedYear} onSelectedSem={onSelectedSem} onSelectedDegree={onSelectedDegree} onSelectedSubject={onSelectedSubject}/> <br></br>
            <UnderTable2/><br></br>
        </TabPanel>
      </SwipeableViews>
    </Box>

             {/* <Grid item xs={3} md={12} container spacing={4} columnpacing={10} sx={{justifyContent:'center'}}>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  <Button variant="contained" sx={{bgcolor:'#9A9A9A'}}><a href='/released'>Released Exam Results</a></Button>
                  
                </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  <Button variant="contained" sx={{bgcolor:'#9A9A9A'}}><a href='/tobereleased'>To Be Released Exam Results</a></Button>
                  
                </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  <Button variant="contained" sx={{bgcolor:'#9A9A9A'}}><a href='/timetable'>Examination TimeTable</a></Button>
                  
                </Stack>
                </Grid>
                
            </Grid> */}


    </Box> 
  );
}
