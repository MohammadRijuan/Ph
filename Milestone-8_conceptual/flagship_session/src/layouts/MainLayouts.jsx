import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div>
        <Navbar></Navbar>
        {/* placeholder component */}
        <div className='min-h-[calc(100vh-117px)] py-8'>
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayouts;