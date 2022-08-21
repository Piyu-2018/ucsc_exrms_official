import React from 'react';
import {Helmet} from 'react-helmet';
import UnderDrawer2 from '../../Component/HeadofExam/Examination/UnderDrawer2';
import HoENavbar from '../../Component/HoENavbar'
import Footer from '../../Component/Footer';


function TimeTable() {
  return (
    <div>
    
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      
      <HoENavbar />
      
      <UnderDrawer2/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default TimeTable