import React from 'react';
import {Helmet} from 'react-helmet';
import UnderDrawer from '../../Component/HeadofExam/Examination/UnderDrawer';
import HoENavbar from '../../Component/HoENavbar'
import Footer from '../../Component/Footer';

function Released() {
  return (
    <div>
    
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      
      <HoENavbar />
      
      <UnderDrawer/><br></br>
      
    </div>
    <Footer/>
    </div>
  )
}

export default Released



