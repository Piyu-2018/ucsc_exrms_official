import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgConfirmDrawer from '../../Component/Director/Progress/Confirm_letter/DirectorProgConfirmDrawer';

function DirectorConfirmProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorProgConfirmDrawer/>
    </div>
  )
}

export default DirectorConfirmProg
