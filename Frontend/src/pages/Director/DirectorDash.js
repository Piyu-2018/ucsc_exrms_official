import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorDrawer from '../../Component/Director/Dashboard/DirectorDrawer';

function DirectorDash() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorDrawer/>
    </div>
  )
}

export default DirectorDash
