import { Box, createTheme, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LecAddFile from "../../Component/Lecturer/LecAddFile";
import LecAssignAdd from "../../Component/Lecturer/LecAssignAdd";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import { API_URL } from "../../constants/globalConstants";
import LecassignMarkTable from "./LecassignMarkTable";
import LecSidebar from "./LecSidebar";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function LecAssignMarking() {
  const { assignmentId } = useParams();
  const open = true;
  console.log(open);
  const [courseData, setCourseData] = useState([]);

  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;

  const getCourseName = async () => {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
      .get(API_URL + `/settings/getCourseAssign/${assignmentId}`, config)
      .then((response) => {
        setCourseData(response.data);

        // console.log(response.data);
      });
  };

  useEffect(() => {
    getCourseName();
  }, []);

  return (
    <>
      <Box>
        <LecNavBar open={true} />
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item xs={4} sm={2}>
            <LecSidebar open={open} />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme} sx={{ mb: "30px" }}>
              {courseData[0] && courseData[0].name}{" "}
               {courseData[0] && courseData[0].course_code}
            </Typography>

            <LecassignMarkTable assignmentId={assignmentId} />
            <LecAssignAdd assignmentId={assignmentId} />
            <LecAddFile assignmentId={assignmentId} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default LecAssignMarking;
