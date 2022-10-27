import {
  Box,
  IconButton,
  TextField,
  Typography,
  Grid,
  Form,
  Button,
  Fade,
} from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

import { useForm } from "react-hook-form";
import axios from "axios";


import { API_URL } from "../../../../src/constants/globalConstants";

function Modalcont(params) {
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);
  const [counterLec, setCounterLec] = useState(0);
  const [counterIns, setCounterIns] = useState(0);
  const [q1, setQ1] = useState(params.data.q1);
  const [q2, setQ2] = useState(params.data.q2);
  const [q3, setQ3] = useState(params.data.q3);
  const [q4, setQ4] = useState(params.data.q4);
  const [assignmentMark, setAssignmentMark] = useState(params.data.assignment_mark);
  const [totalMarks, setTotalMarks] = useState(params.data.total_mark);
  const [grade, setGrade] = useState(params.data.grade);
  const [markID, setMarkID] = useState(params.data.mark_id);

  const addLecOnClick = () => {
    setCounterLec(counterLec + 1);
    console.log(counterLec);
  };

  const removeLecOnClick = () => {
    setCounterLec(counterLec - 1);
    console.log(counterLec);
  };
  const addInsOnClick = () => {
    setCounterIns(counterIns + 1);
    console.log(counterIns);
  };

  const removeInsOnClick = () => {
    setCounterIns(counterIns - 1);
    console.log(counterIns);
  };

  const updateMarks = async (data) => {
    debugger;

    if (data.Q1 && data.Q2 && data.Q3 && data.Q4
      && data.AssignmentMarks && data.TotalMarks && data.Grade) {
      setOpen(false);

      const inputData = {
        q1: data.Q1,
        q2: data.Q2,
        q3: data.Q3,
        q4: data.Q4,
        assignment_mark: data.AssignmentMarks,
        total_mark: data.TotalMarks,
        grade: data.Grade,
        mark_id: data.MarkID,
      };

      console.log(inputData);
      console.log("Inputdata");

      await axios
        .post(API_URL + "/settings/updateMarks", inputData)
        .then((response) => {
          console.log('done');
          params.setExaminationData();
          // setTimeout(() => {
          //   params.setExaminationData();
          // }, 1000);
          // params.setExaminationData((list) => [...list, response.data]);
          // if (!response.data.error) {
          // }
        });
    }
  };

  return (

    <Box sx={{ flexGrow: 1 }}>


      <form method="POST" onSubmit={handleSubmit(updateMarks)}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            {/* <CourseOptions/> */}
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            {/* <StudyYearOptions/> */}
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            {/* <SemesterOptions/> */}
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Q1
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} >
            <TextField
              id="q1"
              placeholder="Q1"
              size="small"
              fullWidth
              inputProps={register("Q1")}
              value={q1}
              onChange={e=> setQ1(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Q2
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} >
            <TextField
              id="q2"
              placeholder="Q2"
              size="small"
              fullWidth
              inputProps={register("Q2")}
              value={q2}
              onChange={e=> setQ2(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Q3
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} >
            <TextField
              id="q3"
              placeholder="Q3"
              size="small"
              fullWidth
              inputProps={register("Q3")}
              value={q3}
              onChange={e=> setQ3(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Q4
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} >
            <TextField
              id="q4"
              placeholder="Q4"
              size="small"
              fullWidth
              inputProps={register("Q4")}
              value={q4}
              onChange={e=> setQ4(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Assignment Marks
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} >
            <TextField
              id="AssignmentMarks"
              placeholder="Assignment Marks"
              size="small"
              fullWidth
              inputProps={register("AssignmentMarks")}
              value={assignmentMark}
              onChange={e=> setAssignmentMark(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Total Marks
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} >
            <TextField
              id="TotalMarks"
              placeholder="Total Marks"
              size="small"
              fullWidth
              inputProps={register("TotalMarks")}
              value={totalMarks}
              onChange={e=> setTotalMarks(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "10px" }}>
          <Grid item xs={4} sm={4} md={4} >
            <Typography id="transition-modal-description" sx={{ mt: 1 }}>
              Grade
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} >
            <TextField
              id="Grade"
              placeholder="Grade"
              size="small"
              fullWidth
              inputProps={register("Grade")}
              value={grade}
              onChange={e=> setGrade(e.target.value)}

            />
            <TextField
              id="mark_id"
              placeholder="mark_id"
              hidden
              type={'hidden'}
              inputProps={register("MarkID")}
              value={markID}
              onChange={e=> setMarkID(e.target.value)}

            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ mt: "20px", ml: "40%" }}
          size="large"
        >
          Update
        </Button>
      </form>

    </Box>
  );

}

export default Modalcont;