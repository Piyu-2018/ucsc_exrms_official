import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgEnDrawer from '../../Component/SAR/Progress/Enrollment/SAR_ProgEnDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function SAR_EnProgress() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <SAR_ProgEnDrawer/>
      
    </div>
  )
}

export default SAR_EnProgress
