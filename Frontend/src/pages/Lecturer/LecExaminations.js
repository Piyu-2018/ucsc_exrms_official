import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LecExamCard from "../../Component/Lecturer/Examinations/LecExamCard";
import LecExamUploads from "../../Component/Lecturer/ExamPaper/LecExamUploads";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import { API_URL } from "../../constants/globalConstants";
import LecSidebar from "./LecSidebar";

function LecExaminations() {

  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  const [courseData, setCourseData] = useState([]);

  const getCourses = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getExaminationCourses/" + user_id, config)
      .then((response) => {
        setCourseData(response.data);
        console.log(response.data);
      });
  }

  useEffect(() => {
    getCourses();
  }, []);



  const open = true;
  return (
    <>
      <Box>
        <LecNavBar open={open} />
        <Grid container spacing={0} justifyContent="space-between">
          <Grid item sm={4} md={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item sm={8} md={10}>
            <Grid container sx={{ mt: "20px" }} spacing={3}>
            {courseData.map((data) => (
          <Grid item xs={12} sm={6}>
            <LecExamCard
              CourseCode={data.course_code}
              CourseName={data.course_name}
              CourseId={data.course_id}
              MarkingStatus = {data.lecturer_id_for_first_marking == user_id ? 1: 2 }
            />
          </Grid>
        ))}
            </Grid>
          </Grid>
          {/* <Grid item sm={0} md={3}>
            <LecRightBar />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
}

export default LecExaminations;
