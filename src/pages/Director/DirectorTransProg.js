import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgTransDrawer from '../../Component/Director/Progress/Transcript/DirectorProgTransDrawer';
import Navbar from '../../Component/Navbar';

function DirectorTransProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <Navbar />
        <DirectorProgTransDrawer/>
    </div>
  )
}

export default DirectorTransProg
