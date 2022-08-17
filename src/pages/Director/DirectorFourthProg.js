import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgFourthDrawer from '../../Component/Director/Progress/FourthYear/DirectorProgFourthDrawer';
import Navbar from '../../Component/Navbar';

function DirectorFourth() {
  return (
    <div>
      <Helmet>
          <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <Navbar />
        <DirectorProgFourthDrawer/>
    </div>
  )
}

export default DirectorFourth
