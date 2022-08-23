import React from 'react';
import {Helmet} from 'react-helmet';
import UnderDrawer3 from '../../Component/HeadofExam/Examination/UnderDrawer3';
import HoENavbar from '../../Component/HoENavbar'
import Footer from '../../Component/Footer';

function UpdateResults() {
  return (
    <div>
    
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      
      <HoENavbar />
      
      <UnderDrawer3/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default UpdateResults




