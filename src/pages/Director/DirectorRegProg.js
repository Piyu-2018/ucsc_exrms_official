import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgRegDrawer from '../../Component/Director/Progress/Registration/DirectorProgRegDrawer';
import Navbar from '../../Component/Navbar';

function DirectorRegProg() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <Navbar />
      <DirectorProgRegDrawer/> 
    </div>
  )
}

export default DirectorRegProg
