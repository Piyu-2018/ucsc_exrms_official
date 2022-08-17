import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgConfirmDrawer from '../../Component/Director/Progress/Confirm_letter/DirectorProgConfirmDrawer';
import Navbar from '../../Component/Navbar';

function DirectorConfirmProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <Navbar />
        <DirectorProgConfirmDrawer/>
    </div>
  )
}

export default DirectorConfirmProg
