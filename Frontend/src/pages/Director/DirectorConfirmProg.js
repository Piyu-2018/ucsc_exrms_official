import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgConfirmDrawer from '../../Component/Director/Progress/Confirm_letter/DirectorProgConfirmDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function DirectorConfirmProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgConfirmDrawer/>
    </div>
  )
}

export default DirectorConfirmProg

