import "./App.css";
import Home from "./pages/Home";

import React, { Component } from "react";

import DirectorDash from "./pages/Director/DirectorDash";

import DirectorUnder from "./pages/Director/DirectorUnder";
import DirectorEnProgress from "./pages/Director/DirectorEnProgress";
import DirectorRegProg from "./pages/Director/DirectorRegProg";
import DirectorConfirmProg from "./pages/Director/DirectorConfirmProg";
import DirectorTransProg from "./pages/Director/DirectorTransProg";
import DirectorSubProg from "./pages/Director/DirectorSubProg";
import DirectorRescruProg from "./pages/Director/DirectorRescruProg";
import DirectorFourthProg from "./pages/Director/DirectorFourthProg";
import DirectorDashboard from "./pages/Director/DirectorDashboard";
import DirectorChat from "./pages/Director/DirectorChat";
import DirectorSummaryReport from "./pages/Director/DirectorSummaryReport";
import DirectorExamRe from "./pages/Director/DirectorExamRe";
import DirectorExamReToBe from "./pages/Director/DirectorExamReToBe";
import DirectorExamTimetable from "./pages/Director/DirectorExamTimetable";


import MaDash from "./pages/Ma/MaDash";
import MaAttendance from "./pages/Ma/MaAttendance";
import MaMarkAttendance from "./pages/Ma/MaMarkAttendance";
import MaAdmissionCard from "./pages/Ma/MaAdmissionCard";
import MaExamReport from "./pages/Ma/MaExamReport";
import MaUndergraduates from "./pages/Ma/MaUndergraduates";
import MaStuAdmissions from "./pages/Ma/MaStuAdmissions";
import MaLetters from "./pages/Ma/MaLetters";
import MaCourses from "./pages/Ma/MaCourses";
import MaTest from "./pages/Ma/MaTest";
import MaRegistration from "./pages/Ma/MaRegistration";

import HoEDash from "./pages/HeadofExam/HoEDash";
import HoEExamRe from "./pages/HeadofExam/HoEExamRe";
import HoEExamReToBe from "./pages/HeadofExam/HoEExamReToBe";
import HoEExamTimetable from "./pages/HeadofExam/HoEExamTimetable";
import HoEExamUpdateResults from "./pages/HeadofExam/HoEExamUpdateResults";
import HoEChat from "./pages/HeadofExam/HoEChat";
import HoESummaryReport from "./pages/HeadofExam/HoESummaryReport";

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
import RequestLetter from "./pages/SAR/RequestLetter";
import RequestLetter1 from "./pages/SAR/RequestLetter1";
import SAR_SummaryReport from "./pages/SAR/SAR_SummaryReport";

import LecExamPaper from "./pages/Lecturer/LecExamPaper";
import LecExaminations from "./pages/Lecturer/LecExaminations";
import LecCourseMarking from "./pages/Lecturer/LecCourseMarking";
import LecCourseGrading from "./pages/Lecturer/LecCourseGrading";

import MaExamTimetable from "./pages/Ma/MaExamTimetable";
import MaPayment from "./pages/Ma/MaPayment";
import LecCourseResults from "./pages/Lecturer/LecCourseResults";
import LecChat from "./pages/Lecturer/LecChat";

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

          <Route path="/ma_examtimetable" element={<MaExamTimetable />} />
          <Route path="/ma_payment" element={<MaPayment />} />
          <Route path="/maDash" element={<MaDash />} />
          <Route path="/ma_attendance" element={<MaAttendance />} />
          <Route path="/ma_mark_attendance" element={<MaMarkAttendance />} />
          <Route path="/ma_admission_card" element={<MaAdmissionCard />} />
          <Route path="/ma_exam_report" element={<MaExamReport />} />
          <Route path="/ma_undergraduates" element={<MaUndergraduates />} />
          <Route path="/ma_admission" element={<MaStuAdmissions />} />
          <Route path="/ma_letters" element={<MaLetters />} />
          <Route path="/ma_courses" element={<MaCourses />} />
          <Route path="/ma_test" element={<MaTest />} />
          <Route path="/ma_registration" element={<MaRegistration />} />

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
          <Route path="/directorDashboard" element={<DirectorDashboard />} />
          <Route path="/directorChat" element={<DirectorChat />} />
          <Route
            path="/directorSummaryReport"
            element={<DirectorSummaryReport />}
          />
          <Route path="/directorExamRe" element={<DirectorExamRe />} />
          <Route path="/directorExamReToBe" element={<DirectorExamReToBe />} />
          <Route
            path="/directorExamTimetable"
            element={<DirectorExamTimetable />}
          />

          <Route path="/tobereleased" element={<ToBeReleased />} />
          <Route path="/released" element={<Released />} />
          <Route path="/timetable" element={<TimeTable />} />
          <Route path="/update-results" element={<UpdateResults />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/sar-dash" element={<SARdash />} />
          <Route path="/sar_report" element={<SAR_Report />} />
          <Route path="/sarUnder" element={<SAR_Under />} />
          <Route path="/sarEnProgress" element={<SAR_EnProgress />} />
          <Route path="/sarRegProg" element={<SAR_RegProg />} />
          <Route path="/sarConfirmProg" element={<SAR_ConfirmProg />} />
          <Route path="/sarTransProg" element={<SAR_TransProg />} />
          <Route path="/sarSubProg" element={<SAR_SubProg />} />
          <Route path="/sarRescruProg" element={<SAR_RescruProg />} />
          <Route path="/sarFourthProg" element={<SAR_FourthProg />} />
          <Route path="/requestletter" element={<RequestLetter />} />
          <Route path="/requestletter1" element={<RequestLetter1 />} />
          <Route path="/sar-summary-report" element={<SAR_SummaryReport />} />

          <Route path="/hoEDash" element={<HoEDash />} />
          <Route path="/hoEExamRe" element={<HoEExamRe />} />
          <Route path="/hoEExamReToBe" element={<HoEExamReToBe />} />
          <Route path="/hoEExamTimetable" element={<HoEExamTimetable />} />
          <Route
            path="/hoEExamUpdateResults"
            element={<HoEExamUpdateResults />}
          />
          <Route path="/hoEChat" element={<HoEChat />} />
          <Route path="/hoESummaryReport" element={<HoESummaryReport />} />

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
          <Route path="/lec_chat" element={<LecChat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
