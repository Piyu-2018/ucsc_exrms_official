import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgConfirmDrawer from '../../Component/Director/Progress/Confirm_letter/DirectorProgConfirmDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function DirectorConfirmProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgConfirmDrawer/><br></br>
        <Footer/>
    </div>
  )
}

export default DirectorConfirmProg

