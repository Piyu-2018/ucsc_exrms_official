import React from 'react';
import { createTheme, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    h3: {
      color: "#06283D",
    },
  },
});

function SAR_ProgRescruContent() {
  return (
    <div>
        <Typography variant="h4" theme={theme} align='left'>Details of Re-scruthinization</Typography>
    </div>
  )
}

export default SAR_ProgRescruContent
