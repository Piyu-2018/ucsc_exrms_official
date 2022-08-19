import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorDrawer from '../../Component/Director/Dashboard/DirectorDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';


function DirectorDash() {
  return (
    <>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorDrawer/>
    </>
  )
}

export default DirectorDash

