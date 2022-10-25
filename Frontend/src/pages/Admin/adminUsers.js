import { Box, createTheme, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminAddUser from "../../Component/Admin/AdminAddUser";
import AdminButtonGroup from "../../Component/Admin/AdminButtonGroup";
import AdminLecActivityTable from "../../Component/Admin/AdminLecActivityTable";
import AdminLoginTable from "../../Component/Admin/AdminLoginTable";
import AdminSidebar from "../../Component/Admin/AdminSidebar";
import AdminUserTable from "../../Component/Admin/adminUserTable";
import LecExamMarksAdd from "../../Component/Lecturer/Examinations/LecExamMarksAdd";
import LecExamMarkTable from "../../Component/Lecturer/Examinations/LecExamMarkTable";
import LecAddExamFile from "../../Component/Lecturer/LecAddExamFile";
import LecNavBar from "../../Component/Lecturer/LecNavBar";
import { API_URL } from "../../constants/globalConstants";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function AdminUsers() {
  //   const { CourseId, MarkingStatus } = useParams();

  // Getting Question Details
  const userInfo = useSelector((state) => state.userInfo);
  const { user_id, accessToken } = userInfo.user;
  //   const [questionData, setQuestionData] = useState([]);

  //   const getQuestion = async () => {
  //     const config = {
  //       headers: {
  //         authorization: accessToken,
  //       },
  //     };

  //     await axios
  //       .get(
  //         API_URL + `/settings/getExaminationQuestion/${user_id}/${CourseId}`,
  //         config
  //       )
  //       .then((response) => {
  //         console.log(response.data);
  //         console.log(response.data.length);
  //         setQuestionData(response.data);
  //       });
  //   };

  //   useEffect(() => {
  //     getQuestion();
  //   }, []);

  const open = true;
  return (
    <>
      <Box>
        <LecNavBar open={true} />
        <Grid container spacing={1}>
          <Grid item xs={4} sm={2}>
            <AdminSidebar open={open} />
          </Grid>
          <Grid item xs={8} sm={10}>
            <Typography variant="h3" theme={theme} sx={{ mb: "30px" }}>
              Users
            </Typography>

            <AdminAddUser />
            <AdminButtonGroup />
            <br></br>
            <Typography sx={{ mr: "1000px", color: "#06283D" }} variant="h5">
              Users / Lecturers
            </Typography>
            <AdminUserTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AdminUsers;
