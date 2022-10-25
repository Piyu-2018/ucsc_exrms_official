import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgEnDrawer from '../../Component/SAR/Progress/Enrollment/SAR_ProgEnDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function SAR_EnProgress() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <SAR_ProgEnDrawer/>
      <Footer/>
      
    </div>
  )
}

export default SAR_EnProgress
