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

function LecExamUploads(props) {
  return (
    <>
      <Card sx={{ maxWidth: "90%" }}>
        <CardMedia
          component="img"
          height="200"
          image="./pubImgs/exam.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.courseCode}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.courseName}
          </Typography>
          <Box sx={{ ml: "35%" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="contained" component="label">
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default LecExamUploads;
