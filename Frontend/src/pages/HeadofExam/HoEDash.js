import React from 'react';
import {Helmet} from 'react-helmet';
import HoEDrawer from '../../Component/HeadofExam/Dashboard/HoEDrawer';
import HoENavbar from '../../Component/HoENavbar';


function HoEDash() {
  return (
    <>
      <Helmet>
        <style>{'body { background: #E4EBF5 !important; }'}</style>
      </Helmet>
      <HoENavbar />
      <HoEDrawer/>
    </>
  )
}

export default HoEDash;

