import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorProgSubDrawer from '../../Component/Director/Progress/SubSl/DirectorProgSubDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar'; 
import Footer from '../../Component/Footer';

function DirectorSubProg() {
  return (
    <div>
        <Helmet>
            <style>{'body { background: #E4EBF5 !important; }'}</style>
        </Helmet>
        <DirectorNavbar />
        <DirectorProgSubDrawer/>  <br></br>
        <Footer/>
    </div>
  )
}

export default DirectorSubProg
