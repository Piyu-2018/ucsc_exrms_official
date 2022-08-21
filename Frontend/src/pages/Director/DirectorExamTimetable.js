import React from 'react';
import {Helmet} from 'react-helmet';
import UnderDrawer2 from '../../Component/Director/Examination/UnderDrawer2';
import DirectorNavbar from '../../Component/DirectorNavbar'
import Footer from '../../Component/Footer';


function TimeTable() {
  return (
    <div>
    
    <div>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      
      <DirectorNavbar />
      
      <UnderDrawer2/>
      
    </div>
    <Footer/>
    </div>
  )
}

export default TimeTable