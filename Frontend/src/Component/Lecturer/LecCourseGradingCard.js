import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import { Box } from '@mui/system';
import React from "react";
import { Link } from "react-router-dom";

function LecCourseGradingCard(props) {
  console.log(props);

  return (
    <>
      <Card sx={{ maxWidth: "90%" }}>
        <CardMedia
          component="img"
          height="100"
          image="./pubImgs/computerscience.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.CourseCode}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.CourseName}
          </Typography>
          <Button sx={{ mt: 2 }} size="small">
            <Link to={`/lec_course_results/${props.CourseId}`}>
              View Progress
            </Link>
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default LecCourseGradingCard;
