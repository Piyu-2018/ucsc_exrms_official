import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_Drawer from '../../Component/SAR/Dashboard/SAR_Drawer';
import DirectorNavbar from '../../Component/DirectorNavbar';


function SARdash() {
  return (
    <>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <SAR_Drawer/>
    </>
  )
}

export default SARdash

