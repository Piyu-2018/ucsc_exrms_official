import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function LecAddFile() {
  return (
    <>
      <Box>
        {/* <Button variant="outlined">Primary</Button> */}
        <Button variant="outlined">
          <a href="./format.xlsx">
            <Typography variant="p" sx={{ color: "black" }}>
              Download format file
            </Typography>
          </a>
        </Button>
      </Box>
    </>
  );
}

export default LecAddFile;
