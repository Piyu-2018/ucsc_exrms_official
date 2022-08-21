import { Box } from "@mui/system";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/StartOfWeek";
import { useState } from "react";
import LecNavBar from "../../../Component/Lecturer/LecNavBar";
import { createTheme, Grid, Typography } from "@mui/material";
import LecSidebar from "../../Lecturer/LecSidebar";

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

function TimeTable() {
  const open = true;
  /* console.log(open); */
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <>
      <Box>
        <LecNavBar open={true} />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={4} sm={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme}>
              Exam Timetable
            </Typography>
            <Calendar
              localizer={localizer}
              events={allEvents}
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

export default TimeTable;
