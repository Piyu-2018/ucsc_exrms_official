import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorUnderDrawer from '../../Component/Director/Undergraduate/DirectorUnderDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function DirectorUnder() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorUnderDrawer/><br></br>
      <Footer/>
      
    </div>
  )
}

export default DirectorUnder
