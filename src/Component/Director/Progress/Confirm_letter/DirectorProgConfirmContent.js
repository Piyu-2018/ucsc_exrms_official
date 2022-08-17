import React from 'react';
import { createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
}); 

function DirectorProgConfirmContent() {
  return (
    <div>
        <div>
            <Typography variant="h4" theme={theme} align='left'>Progress of Confirmation Letter Issue Process</Typography>
        </div>
    </div>
  )
}

export default DirectorProgConfirmContent
