import React from 'react';
import './../style/home.css';
import {Helmet} from 'react-helmet';
import Footer from './../Component/Footer';
// import 'ui-neumorphism/dist/index.css';
// import { Button } from 'ui-neumorphism';

import Navbar from '../Component/Navbar';

function Home() {
  return (
    <div className='body'>
        <Helmet>
                <style>{'body { background-image: url("./pubImgs/background.png") !important; }'}</style>
        </Helmet>
        <Navbar/>
        <div className='homeSection'>
        <div className='textSection'>
            <h3>Welcome to the UCSC EXRMS official website</h3>
            <p>Official platform for providing the pathway to communicate with the examination division of University Of Colombo School Of Computing.</p>
        </div>
        <img src={require('./../assets/imgs/homeVector.png')} />
        </div>
        <Footer/>
    </div>
    
  )
}

export default Home