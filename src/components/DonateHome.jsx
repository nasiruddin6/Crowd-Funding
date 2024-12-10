import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { NavLink, Outlet } from 'react-router-dom';

const DonateHome = () => {
    const links = <div className='justify-center mx-auto pt-2 gap-2'>
        <div className='flex justify-center'>
            <li className='btn'> <NavLink to='/myCampaign'>Your Donation</NavLink> </li>
            <li className='btn'> <NavLink to='/homeDonation/donateForm'>Donate Now</NavLink> </li>
        </div>
        <div>
            <h2 className='text-2xl font-semibold text-yellow-500'>
                <Marquee> Dear sir, If you would like to donate, you can do so. Thank you.</Marquee>
            </h2>
        </div>
    </div>


    return (
        <div>
            {links}
            <Outlet></Outlet>
        </div>
    );
};

export default DonateHome;