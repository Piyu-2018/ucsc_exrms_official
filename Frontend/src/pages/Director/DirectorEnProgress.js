import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgEnDrawer from '../../Component/Director/Progress/Enrollment/DirectorProgEnDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function DirectorUnder() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorProgEnDrawer/><br></br>
      <Footer/>
    </div>
  )
}

export default DirectorUnder
