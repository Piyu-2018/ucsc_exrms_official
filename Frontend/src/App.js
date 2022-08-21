import "./App.css";
import Home from "./pages/Home";
// import SARdash from "./pages/SAR/SARdash";
import React from "react";

import DirectorDash from "./pages/Director/DirectorDash";

import DirectorUnder from "./pages/Director/DirectorUnder";
import DirectorEnProgress from "./pages/Director/DirectorEnProgress";
import DirectorRegProg from "./pages/Director/DirectorRegProg";
import DirectorConfirmProg from "./pages/Director/DirectorConfirmProg";
import DirectorTransProg from "./pages/Director/DirectorTransProg";
import DirectorSubProg from "./pages/Director/DirectorSubProg";
import DirectorRescruProg from "./pages/Director/DirectorRescruProg";
import DirectorFourthProg from "./pages/Director/DirectorFourthProg";
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
// import { createTheme } from "@mui/material";
import LecGrading from "./pages/Lecturer/LecGrading";

import Chat from "./pages/Chat";

import LecExamPaper from "./pages/Lecturer/LecExamPaper";
import LecExaminations from "./pages/Lecturer/LecExaminations";
import LecCourseMarking from "./pages/Lecturer/LecCourseMarking";
import LecCourseGrading from "./pages/Lecturer/LecCourseGrading";

import MaUndergraduates from "./pages/Ma/MaUndergraduates";
import MaExamTimetable from "./pages/Ma/MaExamTimetable";
import MaPayment from "./pages/Ma/MaPayment";
import LecCourseResults from "./pages/Lecturer/LecCourseResults";

// const theme = createTheme({
//   typography: {
//     h3: {
//       color: "#06283D",
//     },
//   },
// });

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
          <Route path="/ma_undergraduates" element={<MaUndergraduates />} />
          <Route path="/ma_examtimetable" element={<MaExamTimetable />} />
          <Route path="/ma_payment" element={<MaPayment />} />

          <Route path="/directorUnder" element={<DirectorUnder />} />
          <Route path="/directorEnProgress" element={<DirectorEnProgress />} />
          <Route path="/directorRegProg" element={<DirectorRegProg />} />
          <Route
            path="/directorConfirmProg"
            element={<DirectorConfirmProg />}
          />
          <Route path="/directorTransProg" element={<DirectorTransProg />} />
          <Route path="/directorSubProg" element={<DirectorSubProg />} />
          <Route path="/directorRescruProg" element={<DirectorRescruProg />} />
          <Route path="/directorFourthProg" element={<DirectorFourthProg />} />
          {/* <Route path="/directorDashboard" element={<DirectorDashboard />} /> */}

          <Route path="/chat" element={<Chat />} />

          <Route path="/HoEDash" element={<HoEDash />} />

          <Route
            path="/lecturer_assignments"
            element={<LecturerAssignments />}
          />
          <Route
            path="/lec_assign_list/:CourseId"
            element={<LecAssignList />}
          />
          <Route path="/lec_exam_timetable" element={<LecExamTimetable />} />
          <Route path="/lec_assign_marking" element={<LecAssignMarking />} />
          <Route path="/lec_grading" element={<LecGrading />} />
          <Route path="/lec_exampaper" element={<LecExamPaper />} />
          <Route path="/lec_examinations" element={<LecExaminations />} />
          <Route path="/lec_course_marking" element={<LecCourseMarking />} />
          <Route path="/lec_course_grading" element={<LecCourseGrading />} />
          <Route path="/lec_course_results" element={<LecCourseResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
