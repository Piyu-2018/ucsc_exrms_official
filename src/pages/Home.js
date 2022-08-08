import React from 'react';
import './../style/home.css';
import {Helmet} from 'react-helmet';
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
        <div className='leftSection'>
          <h3>WE WILL HELP YOU SELECT THE BEST EDUCATION COURSE FOR YOU.</h3>
          <p>After leaving school it is hard to find the correct path and career to pursue. We will help you find the most suitable higher educational options with our system.</p>
          {/* <Button color='#ccc' bgColor='#06283D' rounded width='50px' className='registerBtn'>Register Now</Button> */}
        </div>
        <img src={require('./../assets/imgs/homeVector.png')} />
        </div>
    </div>
  )
}

export default Home