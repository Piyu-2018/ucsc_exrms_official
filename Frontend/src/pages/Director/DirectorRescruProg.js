import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgRescruDrawer from '../../Component/Director/Progress/Re-scrutinization/DirectorProgRescruDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function DirectorRescruProg() {
  return (
    <div>
        <Helmet>
          <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgRescruDrawer/><br></br>
        <Footer/>
    </div>
  )
}

export default DirectorRescruProg
