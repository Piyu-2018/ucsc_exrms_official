import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgSubDrawer from '../../Component/Director/Progress/SubSl/DirectorProgSubDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar'; 

function DirectorSubProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgSubDrawer/>  
    </div>
  )
}

export default DirectorSubProg
