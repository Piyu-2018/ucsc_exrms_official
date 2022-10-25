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
          <Typography variant="h3" theme={theme} align='left'>Examination</Typography>
        </div>
      
      
    </div>
  )
}

export default UnderContent
