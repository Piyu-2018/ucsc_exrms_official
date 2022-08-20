import "./App.css";
import Home from "./pages/Home";
import SARdash from "./pages/SAR/SARdash";
import React, { Component } from "react";

import DirectorDash from "./pages/Director/DirectorDash";
import DirectorUnder from "./pages/Director/DirectorUnder";
import DirectorEnProgress from "./pages/Director/DirectorEnProgress";
import DirectorRegProg from "./pages/Director/DirectorRegProg";
import DirectorConfirmProg from "./pages/Director/DirectorConfirmProg";
import DirectorTransProg from "./pages/Director/DirectorTransProg";
import DirectorSubProg from './pages/Director/DirectorSubProg';
import DirectorRescruProg from './pages/Director/DirectorRescruProg';
import DirectorFourthProg from './pages/Director/DirectorFourthProg';
import MaDash from "./pages/Ma/MaDash";

import HoEDash from "./pages/HeadofExam/HoEDash";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import LecturerAssignments from "./pages/Lecturer/LecturerAssignments";
import LecAssignList from "./pages/Lecturer/LecAssignList";
import LecExamTimetable from "./pages/Lecturer/LecExamTimetable";
import LecAssignMarking from "./pages/Lecturer/LecAssignMarking";
import { createTheme } from "@mui/material";
import LecGrading from "./pages/Lecturer/LecGrading";
import Chat from "./pages/Chat";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/login" exact element={<Login />} />
          <Route path="/directorDash" element={<DirectorDash />} />

          <Route path="/maDash" element={<MaDash />} />

          <Route path="/directorUnder" element={<DirectorUnder />} />
          <Route path="/directorEnProgress" element={<DirectorEnProgress />} />
          <Route path="/directorRegProg" element={<DirectorRegProg />} />
          <Route path="/directorConfirmProg"element={<DirectorConfirmProg />}/>
          <Route path="/directorTransProg" element={<DirectorTransProg />} />
          <Route path='/directorSubProg' element={<DirectorSubProg/>}/>
          <Route path='/directorRescruProg' element={<DirectorRescruProg/>}/>
          <Route path='/directorFourthProg' element={<DirectorFourthProg/>}/>

          <Route path='/chat' element={<Chat />} />

          <Route path="/HoEDash" element={<HoEDash />} />

          <Route
            path="/lecturer_assignments"
            element={<LecturerAssignments />}
          />
          <Route path="/lec_assign_list" element={<LecAssignList />} />
          <Route path="/lec_exam_timetable" element={<LecExamTimetable />} />
          <Route path="/lec_assign_marking" element={<LecAssignMarking />} />
          <Route path="/lec_grading" element={<LecGrading />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
