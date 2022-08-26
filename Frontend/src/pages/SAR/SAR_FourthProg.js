import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgFourthDrawer from '../../Component/SAR/Progress/FourthYear/SAR_ProgFourthDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function SAR_Fourth() {
  return (
    <div>
      <Helmet>
          <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <SAR_ProgFourthDrawer/>
    </div>
  )
}

export default SAR_Fourth
