import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorUnderDrawer from '../../Component/Director/Undergraduate/DirectorUnderDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function DirectorUnder() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorUnderDrawer/>
      
    </div>
  )
}

export default DirectorUnder
