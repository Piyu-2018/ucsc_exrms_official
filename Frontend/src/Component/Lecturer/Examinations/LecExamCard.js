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
  console.log(props);
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
          <Typography gutterBottom variant="h6" component="div">
            {props.CourseCode}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.CourseName}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            ({props.MarkingStatus == 1 ? "First Marking" : "Second Marking"})
          </Typography>

          <Button sx={{ mt: 2 }} size="small">
          <Typography gutterBottom variant="body2" component="div">
            <Link to={`/lec_course_marking/${props.CourseId}/${props.MarkingStatus}`}>Mark Course</Link>
          </Typography>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default LecExamCard;
