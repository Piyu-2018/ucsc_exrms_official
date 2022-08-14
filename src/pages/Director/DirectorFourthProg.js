import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgFourthDrawer from '../../Component/Director/Progress/FourthYear/DirectorProgFourthDrawer';

function DirectorFourth() {
  return (
    <div>
      <Helmet>
          <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorProgFourthDrawer/>
    </div>
  )
}

export default DirectorFourth
