import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgTransDrawer from '../../Component/Director/Progress/Transcript/DirectorProgTransDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function DirectorTransProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgTransDrawer/><br></br>
        <Footer/>
    </div>
  )
}

export default DirectorTransProg
