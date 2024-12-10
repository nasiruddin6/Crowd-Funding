import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;