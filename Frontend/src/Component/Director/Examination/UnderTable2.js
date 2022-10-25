import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/StartOfWeek";
import { useState } from "react";
import { createTheme, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_URL } from "../../../constants/globalConstants";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "SCS2301",
    start: new Date(2022, 6, 2, 13, 0, 0),
    end: new Date(2022, 6, 2, 15, 0, 0),
  },
  {
    title: "SCS2303",
    start: new Date(2022, 7, 2, 13, 0, 0),
    end: new Date(2022, 7, 2, 15, 0, 0),
  },
  {
    title: "SCS2305",
    start: new Date(2022, 7, 3, 13, 0, 0),
    end: new Date(2022, 7, 3, 15, 0, 0),
  },
];

function UnderTable2() {
  const open = true;
  console.log(open);
  // const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;

  const getTimetable = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getTimetable", config)
      .then((response) => {
        setAllEvents(response.data);

        // console.log(response.data);
      });
  };

  useEffect(() => {
    getTimetable();
  }, []);

  console.log(allEvents);

  let Data = [];

  allEvents.map((row) => {
    Data.push({
      title: `${row.course_code} ${row.course_name}`,
      start: `${row.exam_start}`,
      end: `${row.exam_end}`,
    });
  });

  console.log(Data);

  // function handleAddEvent() {
  //   setAllEvents([...allEvents, newEvent]);
  // }

  return (
    <>
      <Box>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme}>
              Exam Timetable
            </Typography>
            <Calendar
              localizer={localizer}
              events={Data}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 400, margin: "50px" }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UnderTable2;
