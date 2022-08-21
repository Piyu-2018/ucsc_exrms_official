import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgRegDrawer from '../../Component/SAR/Progress/Registration/SAR_ProgRegDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function SAR_RegProg() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <SAR_ProgRegDrawer/> 
    </div>
  )
}

export default SAR_RegProg
