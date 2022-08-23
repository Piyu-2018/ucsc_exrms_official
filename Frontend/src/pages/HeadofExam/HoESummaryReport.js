import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorReportDrawer from '../../Component/HeadofExam/Report/DirectorReportDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function HoESummaryReport() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorReportDrawer/><br></br><br></br><br></br><br></br><br></br>
      <Footer/>
      
    </div>
  )
}

export default HoESummaryReport
