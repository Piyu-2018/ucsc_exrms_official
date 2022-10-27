import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios";
import { useSelector } from "react-redux";

import { API_URL } from "../../../constants/globalConstants";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid({ option, year, semester, degree, subject }) {
  const userInfo = useSelector((state) => state.userInfo);
  const { accessToken } = userInfo.user;

  async function onReleaseClick() {
    const config = {
      headers: {
        authorization: accessToken,
      },
    };

    await axios
    .get(API_URL+`/settings/getResult1/${option}/${year}/${semester}/${degree}/${subject}`,config)
    .then((response) => {
      debugger
      response.data.forEach(async result => {
        await axios.post(API_URL + `/settings/release/${result.mark_id}`, config)
        .then(() => {
          
        });
      });
      alert('All records are successfully released')
    });
};

  return (
    <Box sx={{ flexGrow: 1 }}>
            <Grid item xs={3} md={12} container spacing={4} columnpacing={10} sx={{justifyContent:'left'}}>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                  
                  {/* <Button variant="contained" sx={{color:'white'}} color="success"><a href='/update-results'>Update</a></Button> */}
                  <Button onClick={onReleaseClick} variant="contained" sx={{color:'white'}} color="error">Release</Button>
                </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                <Stack spacing={2} direction="row">
                </Stack>
                </Grid>
            </Grid>
    </Box>
  );
}
 