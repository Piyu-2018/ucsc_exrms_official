import React from 'react';
import {Helmet} from 'react-helmet';
import DirectorDashboardDrawer from '../../Component/Director/DashboardP/DirectorDashboardDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';


function DirectorDashboard() {
  return (
    <>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <DirectorDashboardDrawer/><br></br>
      <Footer/>
    </>
  )
}

export default DirectorDashboard

