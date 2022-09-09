import React from 'react';
import { createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function UnderContent() {
  return (
    <div>
        <div>
          <Typography variant="h4" theme={theme} align='left'>Undergraduate</Typography>
        </div>
      
      
    </div>
  )
}

export default UnderContent
