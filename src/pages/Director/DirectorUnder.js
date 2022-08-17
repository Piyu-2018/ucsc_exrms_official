import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorUnderDrawer from '../../Component/Director/Undergraduate/DirectorUnderDrawer';
import Navbar from '../../Component/Navbar';

function DirectorUnder() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <Navbar />
      <DirectorUnderDrawer/>
      
    </div>
  )
}

export default DirectorUnder
