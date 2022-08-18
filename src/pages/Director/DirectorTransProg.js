import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgTransDrawer from '../../Component/Director/Progress/Transcript/DirectorProgTransDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function DirectorTransProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgTransDrawer/>
    </div>
  )
}

export default DirectorTransProg
