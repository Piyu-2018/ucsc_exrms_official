import { Box, Typography } from '@mui/material'
import React from 'react'

function LecRightBar() {
  return (
    <>
        <Box sx={{display:{xs:"none",sm:"none",md:"block"}}}>
            <Typography variant='h6'>
                Rightbar
            </Typography>
        </Box>
        
    </>
  )
}

export default LecRightBar