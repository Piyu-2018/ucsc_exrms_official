import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ReportDrawer from '../../Component/SAR/Report/SAR_ReportDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function SAR_SummaryReport() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <SAR_ReportDrawer/><br></br>
      <Footer/>
      
    </div>
  )
}

export default SAR_SummaryReport
