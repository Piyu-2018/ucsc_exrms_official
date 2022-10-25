import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../../../constants/globalConstants"; 


function DirectorProgRegChart(props) {
  console.log(props.option);
  console.log(props.year);
  const [registrationData, setRegistrationData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;
  let chartData = null;
  // console.log(user_id);

  const acYear = props.option;
  const cuYear = props.year;
 

  useEffect(() => {
   
    getRegistrationCR();

  }, [acYear,cuYear])

  const getRegistrationCR = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };
  console.log("Hi");

    await axios
      .get(API_URL + "/settings/getRegistrationCR/"+acYear+"/"+cuYear,config)
      .then((response) => {
        setRegistrationData(response.data[0]);
        console.log(response.data[0]);
        console.log(registrationData);
      
        // console.log("Hi");
      });
  };

  useEffect(() => {
    getRegistrationCR();
    chartData = registrationData.countR;
  }, []);

  // useEffect(() => {
   
  // }, [registrationData]);
  console.log(chartData);

  // let chartData = registrationData.countR;

  const data = [
    { region: 'Registered - 78%', val: 78},
    { region: 'Not-registered - 22%', val: 22},
  ];
 

    return (
      <Paper>
        <Chart 
          data={data}>
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
          />
          <Title
            text="The Progress of Academic Year Registration Process"
          />
          <Animation />
          <Legend />
        </Chart>
      </Paper>
    );
}

export default DirectorProgRegChart;
