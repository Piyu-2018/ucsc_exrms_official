import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorUnderDrawer from '../../Component/Director/DirectorUnderDrawer';

function DirectorUnder() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorUnderDrawer/>
      
    </div>
  )
}

export default DirectorUnder
