import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgEnDrawer from '../../Component/Director/Progress/Enrollment/DirectorProgEnDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function DirectorUnder() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorProgEnDrawer/>
      
    </div>
  )
}

export default DirectorUnder
