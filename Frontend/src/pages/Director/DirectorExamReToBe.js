import React from 'react';
import {Helmet} from 'react-helmet';
import UnderDrawer1 from '../../Component/Director/Examination/UnderDrawer1';
import DirectorNavbar from '../../Component/DirectorNavbar'
import Footer from '../../Component/Footer';

function ToBeReleased() {
  return (
    <div>
    
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      
      <DirectorNavbar />
      
      <UnderDrawer1/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default ToBeReleased

