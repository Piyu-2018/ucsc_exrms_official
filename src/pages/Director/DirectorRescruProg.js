import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgRescruDrawer from '../../Component/Director/Progress/Re-scrutinization/DirectorProgRescruDrawer';
import Navbar from '../../Component/Navbar';

function DirectorRescruProg() {
  return (
    <div>
        <Helmet>
          <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <Navbar />
        <DirectorProgRescruDrawer/>
    </div>
  )
}

export default DirectorRescruProg
