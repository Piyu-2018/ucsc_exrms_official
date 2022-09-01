import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// import { Box } from '@mui/system';
import React from "react";
import { Link } from "react-router-dom";

function LecExamCard(props) {
  return (
    <>
      <Card sx={{ maxWidth: "90%" }}>
        <CardMedia
          component="img"
          height="200"
          image="./pubImgs/marking.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.courseCode}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.courseName}
          </Typography>
          <Button sx={{ mt: 2 }} size="small">
            <Link to={"/lec_course_marking"}>Mark Course</Link>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default LecExamCard;
