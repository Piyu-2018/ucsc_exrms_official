import React from 'react'
import './../style/login.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Helmet} from 'react-helmet';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';



function Login() {
  return (
    <div className='body'>
        <Helmet>
                <style>{'body { background-image: url("./pubImgs/loginBackground.png") !important; }'}</style>
        </Helmet>
        <Container maxWidth="lg" 
        >
            <Box sx={{ height: '100vh', ml: '60%' }} >
                <Typography sx={{mb:'15%'}} variant="h3" color="#06283D" gutterBottom component="div">
                    Login
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    
                    
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    
                />

                <Button size="large" variant="contained" color="primary" sx={{width:"50%", mt:"5%",borderRadius: "10em"}} >
                    Login
                </Button>

            </Box>    
        </Container>
    </div>
  )
}

export default Login