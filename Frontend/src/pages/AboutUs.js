import React from 'react';
import './../style/home.css';
import {Helmet} from 'react-helmet';
import Footer from './../Component/Footer';
import { Grid } from "@mui/material";
// import 'ui-neumorphism/dist/index.css';
// import { Button } from 'ui-neumorphism';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Navbar from '../Component/Navbar';

function AboutUs() {
  return (
    <div className='body'>
        <Helmet>
                <style>{'body { background-image: url("./pubImgs/background.png") !important; }'}</style>
        </Helmet>
        <Navbar/>
        <div className='homeSection'>
        <div  className='textSection'>
            <Grid container spacing={0} justifyContent="space-between">
                <Grid item sm={12} md={12}>
                    <Grid item sm={12} md={12}>
                        <Card>
                            <CardContent paddingLeft="100">
                                <h3>Vision</h3>
                                <p>Be a Global Leader in Computing, Advancing the Frontiers of Knowledge through Teaching, Learning and Research.</p>
                            </CardContent>
                        </Card><br></br><br></br><br></br>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <Card>
                            <CardContent paddingLeft="100">
                                <h3>Mission</h3>
                                <p>To advance and enhance computing knowledge, fostering global strategic alliances, promoting cross disciplinary research, producing socially responsible professionals with entrepreneurial skills, leadership qualities and integrity contributing  to  position the country as a knowledge hub in the region.</p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item sm={12} md={12}>
                        <Card>
                            <CardContent paddingLeft="100">
                                <h3>Mission</h3>
                                <p>To advance and enhance computing knowledge, fostering global strategic alliances, promoting cross disciplinary research, producing socially responsible professionals with entrepreneurial skills, leadership qualities and integrity contributing  to  position the country as a knowledge hub in the region.</p>
                            </CardContent>
                        </Card>
                </Grid>
            </Grid>
            
            
        </div>
        {/* <img src={require('./../assets/imgs/homeVector.png')} /> */}
        </div>
        <Footer/>
    </div>
    
  )
}

export default AboutUs;