import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgRescruDrawer from '../../Component/SAR/Progress/Re-scrutinization/SAR_ProgRescruDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function SAR_RescruProg() {
  return (
    <div>
        <Helmet>
          <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <SAR_ProgRescruDrawer/>
    </div>
  )
}

export default SAR_RescruProg
