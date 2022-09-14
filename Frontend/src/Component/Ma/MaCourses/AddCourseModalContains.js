import {
    Box,
    IconButton,
    TextField,
    Typography,
    Grid,
  } from "@mui/material";
  import React from "react";
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  import DeleteIcon from '@mui/icons-material/Delete';
  import CourseOptions from './CourseOptions';
  import StudyYearOptions from './StudyYearOptions';
  import SemesterOptions from './SemesterOption';
  import { useState } from "react";

  function CourseModalContains(){
    const [counterLec, setCounterLec] = useState(0);
    const [counterIns, setCounterIns] = useState(0);

    const addLecOnClick = () => {
        setCounterLec(counterLec + 1);
        console.log(counterLec);
    };

    const removeLecOnClick = () => {
        setCounterLec(counterLec - 1 );
        console.log(counterLec);
    };
    const addInsOnClick = () => {
        setCounterIns(counterIns + 1);
        console.log(counterIns);
    };

    const removeInsOnClick = () => {
        setCounterIns(counterIns - 1 );
        console.log(counterIns);
    };

    return (
        <Box component="form" sx={{flexGrow:1}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"10px"}}>
                <Grid item xs={4} sm={4} md={4} >
                    <CourseOptions/>
                </Grid>
                <Grid item xs={4} sm={4} md={4} >
                    <StudyYearOptions/>
                </Grid>
                <Grid item xs={4} sm={4} md={4} >
                    <SemesterOptions/>
                </Grid>
            </Grid>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"10px"}}>
                <Grid item xs={4} sm={4} md={4} >
                    <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                        Course Name
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} >
                    <TextField
                        id="outlined-textarea"
                        placeholder="Enter Course Name"
                        size="small"
                        multiline
                        fullWidth
                    />
                </Grid>
            </Grid>
            
            <Grid container Spacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"10px"}}>
                <Grid item xs={4} sm={4} md={4} >
                    <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                        Course Code
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} >
                    <TextField
                        id="outlined-textarea"
                        placeholder="Enter Course Code"
                        size="small"
                        multiline
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Grid container Spacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"10px"}}>
                <Grid item xs={4} sm={4} md={4} >
                    <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                        Lecturer
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} >
                <TextField
                            id="outlined-textarea"
                            placeholder="Lecturer 1"
                            size="small"
                            multiline
                            fullWidth
                        />
                    {Array.from(Array(counterLec)).map((c, index) => {
                        const a = index + 2;
                        const string1 = "Lecturer " + a;
                        return (
                            <div>
                                <TextField
                                    id="outlined-textarea"
                                    placeholder={string1}
                                    size="small"
                                    multiline
                                    sx={{width:"90%",paddingTop:"10px"}}
                                />
                                <IconButton
                                    aria-label="add"
                                    sx={{ mt: "8px" }}
                                    onClick={removeLecOnClick}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        );
                    })}
                    <IconButton
                        aria-label="add"
                        sx={{ mt: "20px", ml: "45%" }}
                        onClick={addLecOnClick}
                    >
                        <AddCircleIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container Spacing={1} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:"10px"}}>
                <Grid item xs={4} sm={4} md={4} >
                    <Typography id="transition-modal-description" sx={{ mt: 1 }}>
                        Instructor
                    </Typography>
                </Grid>
                <Grid item xs={8} sm={8} md={8} >
                    <TextField
                            id="outlined-textarea"
                            placeholder="Instructor 1"
                            size="small"
                            multiline
                            fullWidth
                        />
                    {Array.from(Array(counterIns)).map((c, index) => {
                        const a = index + 2;
                        const string1 = "Instructor " + a;
                        return (
                            <div>
                                <TextField
                                    id="outlined-textarea"
                                    placeholder={string1}
                                    size="small"
                                    multiline
                                    sx={{width:"90%",paddingTop:"10px"}}
                                />
                                <IconButton
                                    aria-label="add"
                                    sx={{ mt: "8px" }}
                                    onClick={removeInsOnClick}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                        );
                    })}
                    <IconButton
                        aria-label="add"
                        sx={{ mt: "20px", ml: "45%" }}
                        onClick={addInsOnClick}
                    >
                        <AddCircleIcon />
                    </IconButton>
                </Grid>
            </Grid>
            
        </Box>
    );

  }

  export default CourseModalContains