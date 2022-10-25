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
    title: "SCS2301 Machine Learning and Neural Computing",
    start: new Date(2022, 8, 30, 13, 0, 0),
    end: new Date(2022, 8, 30, 15, 0, 0),
  },
  {
    title: "SCS2303 Middleware Architecture",
    start: new Date(2022, 9, 3, 13, 0, 0),
    end: new Date(2022, 9, 3, 15, 0, 0),
  },
  {
    title: "SCS2304 Management",
    start: new Date(2022, 9, 4, 13, 0, 0),
    end: new Date(2022, 9, 4, 15, 0, 0),
  },
  {
    title: "SCS2307 Software Quality Assurance",
    start: new Date(2022, 9, 10, 13, 0, 0),
    end: new Date(2022, 9, 10, 15, 0, 0),
  },
  {
    title: "SCS2309 Human Computer Interaction",
    start: new Date(2022, 9, 11, 13, 0, 0),
    end: new Date(2022, 9, 11, 15, 0, 0),
  },
  {
    title: "SCS2315 Professional Practice",
    start: new Date(2022, 9, 12, 13, 0, 0),
    end: new Date(2022, 9, 12, 15, 0, 0),
  },
  {
    title: "SCS2308 Software Project Management",
    start: new Date(2022, 9, 13, 13, 0, 0),
    end: new Date(2022, 9, 13, 15, 0, 0),
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
