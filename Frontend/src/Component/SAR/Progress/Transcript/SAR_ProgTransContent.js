import React from 'react';
import { createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function SAR_ProgTransContent() {
  return (
    <div>
        <div>
            <Typography variant="h4" theme={theme} align='left'>Progress of Transcript Issue Process</Typography>
        </div> 
    </div>
  )
}

export default SAR_ProgTransContent
