import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgTransDrawer from '../../Component/SAR/Progress/Transcript/SAR_ProgTransDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function SAR_TransProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <SAR_ProgTransDrawer/>
    </div>
  )
}

export default SAR_TransProg
