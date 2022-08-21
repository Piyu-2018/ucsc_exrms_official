import React from 'react';
import {Helmet} from 'react-helmet';
import UnderDrawer1 from '../../Component/HeadofExam/Examination/UnderDrawer1';
import HoENavbar from '../../Component/HoENavbar'
import Footer from '../../Component/Footer';

function ToBeReleased() {
  return (
    <div>
    
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      
      <HoENavbar />
      
      <UnderDrawer1/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default ToBeReleased

