import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/StartOfWeek";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};

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

function MaCalendar() {
  const [allEvents, setAllEvents] = useState(events);
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <>
      <Box>
        <Box>
          <input
            type="text"
            className="subject-event"
            placeholder="Add Title"
            style={{}}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
            className="datepick"
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
            showTimeSelect
          />
          <DatePicker
            placeholderText="End Date"
            className="datepick"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
            showTimeSelect
            style="width:300px;"
          />
        </Box>
        <Box sx={{ justifyItems: "left", mt: "10px" }}>
          <Button
            className="event-button"
            onClick={handleAddEvent}
            sx={{
              height: "40px",
              width: "10%",
              marginLeft: "4.5%",
            }}
            variant="contained"
            size="small"
          >
            Add Exam
          </Button>
        </Box>

        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 400, margin: "50px" }}
        />
      </Box>
    </>
  );
}

export default MaCalendar;
