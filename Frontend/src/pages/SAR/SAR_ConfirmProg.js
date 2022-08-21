import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_ProgConfirmDrawer from '../../Component/SAR/Progress/Confirm_letter/SAR_ProgConfirmDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';

function SAR_ConfirmProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <SAR_ProgConfirmDrawer/>
    </div>
  )
}

export default SAR_ConfirmProg

