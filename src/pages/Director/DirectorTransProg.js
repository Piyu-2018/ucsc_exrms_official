import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgTransDrawer from '../../Component/Director/Progress/DirectorProgTransDrawer';

function DirectorTransProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorProgTransDrawer/>
    </div>
  )
}

export default DirectorTransProg
