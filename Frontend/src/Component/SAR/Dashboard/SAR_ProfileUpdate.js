import React from 'react';
import { Box, TextField,Input  } from '@mui/material'


function SARDash() {
  const open = true;
  console.log(open);

  return (
    <>
    <Box component='div'>
        <TextField id="outlined-basic" InputLabelProps={{
            shrink: true,
          }} label="Update profile picture" defaultValue='' variant="outlined" type='file' sx={fieldsx} />
        <TextField id="outlined-basic" label="Address" variant="outlined" placeholder ='No 17, Heen ela road, Ambalangoda' sx={fieldsx} />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" placeholder ='077 851 1274' type='tel' sx={fieldsx} />
        <TextField id="outlined-basic" label="Add a secondary email" variant="outlined" placeholder ='example@123.com' type='tel' sx={fieldsx} />
    </Box>
    </>
  );
}

export default SARDash;
