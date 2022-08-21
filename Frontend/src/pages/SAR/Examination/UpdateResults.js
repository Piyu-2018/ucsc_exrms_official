import React from 'react';
import {Helmet} from 'react-helmet';
import UnderDrawer3 from '../../../Component/SAR/Examination/UnderDrawer3';
import DirectorNavbar from '../../../Component/DirectorNavbar'
import Footer from '../../../Component/Footer';

function UpdateResults() {
  return (
    <div>
    
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      
      <DirectorNavbar />
      
      <UnderDrawer3/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default UpdateResults




