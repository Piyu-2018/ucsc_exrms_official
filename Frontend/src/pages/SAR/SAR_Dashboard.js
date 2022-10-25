import React from 'react';
import {Helmet} from 'react-helmet';
import SAR_DashboardDrawer from '../../Component/SAR/DashboardP/SAR_DashboardDrawer';
import DirectorNavbar from '../../Component/DirectorNavbar';
import Footer from '../../Component/Footer';


function SAR_Dashboard() {
  return (
    <>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <DirectorNavbar />
      <SAR_DashboardDrawer/><br></br>
      <Footer/>
    </>
  )
}

export default SAR_Dashboard

