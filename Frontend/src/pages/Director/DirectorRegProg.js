import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgRegDrawer from '../../Component/Director/Progress/Registration/DirectorProgRegDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function DirectorRegProg() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorProgRegDrawer/> 
    </div>
  )
}

export default DirectorRegProg
