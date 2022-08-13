import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgEnDrawer from '../../Component/Director/Progress/DirectorProgEnDrawer';

function DirectorUnder() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorProgEnDrawer/>
      
    </div>
  )
}

export default DirectorUnder
