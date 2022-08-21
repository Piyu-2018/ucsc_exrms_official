import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function LecAddFile() {
  return (
    <>
      <Box>
        <Button>
          <Link to="/files/myfile.pdf" target="_blank" download>
            Download
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default LecAddFile;
