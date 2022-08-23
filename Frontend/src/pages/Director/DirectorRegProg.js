import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgRegDrawer from '../../Component/Director/Progress/Registration/DirectorProgRegDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function DirectorRegProg() {
  return (
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorProgRegDrawer/> <br></br>
      <Footer/>
    </div>
  )
}

export default DirectorRegProg
