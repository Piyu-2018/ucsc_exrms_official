import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgSubDrawer from '../../Component/SAR/Progress/SubSl/SAR_ProgSubDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar'; 

function SAR_SubProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <SAR_ProgSubDrawer/>  
    </div>
  )
}

export default SAR_SubProg
