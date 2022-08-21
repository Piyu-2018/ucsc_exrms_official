import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgFourthDrawer from '../../Component/Director/Progress/FourthYear/DirectorProgFourthDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';

function DirectorFourth() {
  return (
    <div>
      <Helmet>
          <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgFourthDrawer/><br></br>
        <Footer/>
    </div>
  )
}

export default DirectorFourth
