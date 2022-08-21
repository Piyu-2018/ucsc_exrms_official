import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorReportDrawer from '../../Component/Director/Report/DirectorReportDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function DirectorSummaryReport() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorReportDrawer/>
      
    </div>
  )
}

export default DirectorSummaryReport
