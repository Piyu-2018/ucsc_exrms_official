import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgSubDrawer from '../../Component/Director/Progress/SubSl/DirectorProgSubDrawer';

function DirectorSubProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorProgSubDrawer/>  
    </div>
  )
}

export default DirectorSubProg