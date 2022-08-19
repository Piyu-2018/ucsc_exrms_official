import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LecCourseCard from "./LecCourseCard";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../constants/globalConstants";

const courseCodes = ["SCS3201", "SCS3202", "SCS3203", "SCS3204", "SCS3205"];
const courseNames = [
  "Machine Learning and Neural Computing",
  "Human Computer Interaction",
  "Software Project management",
  "Professional Practice",
  "Graph Theory",
];

function LecAssignmentCourses() {
  const [courseData, setCourseData] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  console.log(user_id);

  const getCourses = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + "/settings/getCourses/" + user_id, config)
      .then((response) => {
        setCourseData(response.data);
        console.log(response.data);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  // const data1 =courseData[0];
  // console.log(data1.user_id);

  return (
    <>
      <Typography variant="h3">Assignments</Typography>
      <Grid container spacing={3} sx={{ marginTop: "20px" }}>
        {courseData.map((data) => (
          <Grid item xs={12} sm={6}>
            <LecCourseCard
              CourseCode={data.course_code}
              CourseName={data.course_name}
            />
          </Grid>
        ))}

        {/* <Grid item xs={12} sm={6}>
          <LecCourseCard
            CourseCode={courseCodes[1]}
            CourseName={courseNames[1]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LecCourseCard
            CourseCode={courseCodes[2]}
            CourseName={courseNames[2]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LecCourseCard
            CourseCode={courseCodes[3]}
            CourseName={courseNames[3]}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LecCourseCard
            CourseCode={courseCodes[4]}
            CourseName={courseNames[4]}
          />
        </Grid> */}
      </Grid>
    </>
  );
}

export default LecAssignmentCourses;
