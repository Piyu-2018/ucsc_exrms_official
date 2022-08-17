import React from 'react';
import { createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
}); 

function DirectorProgEnContent() {
  return (
    <div>
        <div>
            <Typography variant="h4" theme={theme} align='left'>Progress of Enrollment</Typography>
        </div>
      
    </div>
  )
}

export default DirectorProgEnContent