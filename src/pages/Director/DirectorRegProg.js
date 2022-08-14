import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgRegDrawer from '../../Component/Director/Progress/Registration/DirectorProgRegDrawer';

function DirectorRegProg() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorProgRegDrawer/> 
    </div>
  )
}

export default DirectorRegProg
