import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorDrawer from '../../Component/Director/Dashboard/DirectorDrawer';
import Navbar from '../../Component/Navbar';


function DirectorDash() {
  return (
    <>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <Navbar />
      <DirectorDrawer/>
    </>
  )
}

export default DirectorDash
