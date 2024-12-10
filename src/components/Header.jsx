import React, { useContext, useState } from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { Link, NavLink } from 'react-router-dom';
import NavImg from '../assets/navimg.png'
import { AuthContext } from '../providers/AuthProviders';
import { FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Header = () => {

    const {text} = useTypewriter({
        words: ['Devloper', 'designer', 'photographer'],
        loop: {},
    });

    const [count, setCount] = useState()

    const notify = () => {
        Swal.fire({
            title: 'success!',
            text: 'You are logged out',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }




    const { user, signOutUser } = useContext(AuthContext);

    console.log(user,);
    const handleSignout = () => {
        signOutUser()
            .then(() => {
                console.log('user sign out successfully');
            })
            .catch(error => console.log('ERROR', error.message))
    }



    const links = <>
        <li> <NavLink to={'/'}>Home</NavLink></li>
        <li> <NavLink to={'/allCampaign'}>All Campaign</NavLink></li>
        <li> <NavLink to={'/datelineCampaign'}>Dateline</NavLink></li>
        {
            user && <>
                <li> <NavLink to={'/addCampaign'}>Add New Campaign</NavLink></li>
                <li> <NavLink to={'/homeDonation'}>My Donations</NavLink></li>
                <li> <NavLink to={'/myCampaign'}>My  Campaign</NavLink></li>
            </>
        }


    </>
    return (
        <div className='bg-green-600'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <img
                        className='w-20' src={NavImg} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <div class="relative group flex gap-3 ">
                                    <div>
                                        <img
                                            className='w-10 h-10 rounded-full'
                                            src={user.photoURL} alt="user" />
                                    </div>
                                    <div>
                                        <span class="absolute  transform -translate-x-1/2 -translate-y-1/2 text-pink-500 text-lg font-bold opacity-0 group-hover:opacity-100">
                                            {user.displayName}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={notify}>
                                    <a onClick={handleSignout}
                                        className='btn'>{count} <FaSignOutAlt /> SignOut</a>
                                </button>
                            </>
                            :
                            <div  class='my-container'>
                                <Tippy content="Login">
                                <Link to={'login'}>
                                    <button className='btn'> Login</button>
                                </Link>
                                </Tippy>
                            </div>
                    }

                </div>
            </div>
        <div>
            <h2 className=''>I am a
            <span>
                {text}
                </span>
            <Cursor></Cursor>
            </h2>
        </div>
        </div>
    );
};

export default Header;