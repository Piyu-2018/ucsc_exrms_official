import "./App.css";
import Home from "./pages/Home";


import React, { Component } from "react";


//import React from "react";


import DirectorDash from "./pages/Director/DirectorDash";

import DirectorUnder from "./pages/Director/DirectorUnder";
import DirectorEnProgress from "./pages/Director/DirectorEnProgress";
import DirectorRegProg from "./pages/Director/DirectorRegProg";
import DirectorConfirmProg from "./pages/Director/DirectorConfirmProg";
import DirectorTransProg from "./pages/Director/DirectorTransProg";
import DirectorSubProg from './pages/Director/DirectorSubProg';
import DirectorRescruProg from './pages/Director/DirectorRescruProg';
import DirectorFourthProg from './pages/Director/DirectorFourthProg';
import DirectorDashboard from "./pages/Director/DirectorDashboard";
import DirectorChat from "./pages/Director/DirectorChat";
import DirectorSummaryReport from "./pages/Director/DirectorSummaryReport";
import DirectorExamRe from "./pages/Director/DirectorExamRe";
import DirectorExamReToBe from "./pages/Director/DirectorExamReToBe";
import DirectorExamTimetable from "./pages/Director/DirectorExamTimetable";

import MaDash from "./pages/Ma/MaDash";

import HoEDash from "./pages/HeadofExam/HoEDash";
import HoEExamRe from "./pages/HeadofExam/HoEExamRe";
import HoEExamReToBe from "./pages/HeadofExam/HoEExamReToBe";
import HoEExamTimetable from "./pages/HeadofExam/HoEExamTimetable";
import HoEExamUpdateResults from "./pages/HeadofExam/HoEExamUpdateResults";
import HoEChat from "./pages/HeadofExam/HoEChat";

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

import Chat from "./pages/SAR/Chat";
import ToBeReleased from "./pages/SAR/Examination/ToBeReleased";
import Released from "./pages/SAR/Examination/Released";
import TimeTable from "./pages/SAR/Examination/TimeTable";
import UpdateResults from "./pages/SAR/Examination/UpdateResults";
import SARdash from "./pages/SAR/SARdash";
import SAR_Report from "./pages/SAR/SAR_Report";
import SAR_Under from "./pages/SAR/SAR_Under";
import SAR_EnProgress from "./pages/SAR/SAR_EnProgress";
import SAR_RegProg from "./pages/SAR/SAR_RegProg";
import SAR_ConfirmProg from "./pages/SAR/SAR_ConfirmProg";
import SAR_TransProg from "./pages/SAR/SAR_TransProg";
import SAR_SubProg from "./pages/SAR/SAR_SubProg";
import SAR_RescruProg from "./pages/SAR/SAR_RescruProg";
import SAR_FourthProg from "./pages/SAR/SAR_FourthProg";

import LecExamPaper from "./pages/Lecturer/LecExamPaper";
import LecExaminations from "./pages/Lecturer/LecExaminations";
import LecCourseMarking from "./pages/Lecturer/LecCourseMarking";

import MaUndergraduates from "./pages/Ma/MaUndergraduates";
import MaExamTimetable from "./pages/Ma/MaExamTimetable";
import MaPayment from "./pages/Ma/MaPayment";

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
          <Route path='/directorSubProg' element={<DirectorSubProg/>}/>
          <Route path='/directorRescruProg' element={<DirectorRescruProg/>}/>
          <Route path='/directorFourthProg' element={<DirectorFourthProg/>}/>
          <Route path="/directorDashboard" element={<DirectorDashboard />} />
          <Route path="/directorChat" element={<DirectorChat />} />
          <Route path="/directorSummaryReport" element={<DirectorSummaryReport/>} />
          <Route path="/directorExamRe" element={<DirectorExamRe/>} />
          <Route path="/directorExamReToBe" element={<DirectorExamReToBe/>} />
          <Route path="/directorExamTimetable" element={<DirectorExamTimetable/>} />




          <Route path='/tobereleased' element={<ToBeReleased />} />
          <Route path='/released' element={<Released />} />
          <Route path='/timetable' element={<TimeTable />} />
          <Route path='/update-results' element={<UpdateResults/>}/>
          <Route path='/chat' element={<Chat />} />
          <Route path='/sar-dash' element={<SARdash />} />
          <Route path='/sar_report' element={<SAR_Report />} />
          <Route path="/sarUnder" element={<SAR_Under />} />
          <Route path="/sarEnProgress" element={<SAR_EnProgress />} />
          <Route path="/sarRegProg" element={<SAR_RegProg />} />
          <Route path="/sarConfirmProg"element={<SAR_ConfirmProg />}/>
          <Route path="/sarTransProg" element={<SAR_TransProg />} />
          <Route path='/sarSubProg' element={<SAR_SubProg/>}/>
          <Route path='/sarRescruProg' element={<SAR_RescruProg/>}/>
          <Route path='/sarFourthProg' element={<SAR_FourthProg/>}/>


          <Route path="/hoEDash" element={<HoEDash />} />
          <Route path="/hoEExamRe" element={<HoEExamRe/>} />
          <Route path="/hoEExamReToBe" element={<HoEExamReToBe/>} />
          <Route path="/hoEExamTimetable" element={<HoEExamTimetable/>} />
          <Route path="/hoEExamUpdateResults" element={<HoEExamUpdateResults/>} />
          <Route path="/hoEChat" element={<HoEChat/>} />

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
