import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_UnderDrawer from '../../Component/SAR/Undergraduate/SAR_UnderDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function SAR_Under() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <SAR_UnderDrawer/>
      
    </div>
  )
}

export default SAR_Under
